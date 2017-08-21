import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentDelete from 'material-ui/svg-icons/action/delete';
import ContentList from 'material-ui/svg-icons/action/list';
import ContentTouchApp from 'material-ui/svg-icons/action/touch-app';
import _ from 'lodash';
import PDFDocument from 'pdfkit';
import blobStream  from 'blob-stream';

const BORDER_STYLE = 'solid rgb(180, 180, 180) 1px';
const BORDER_STYLE_WHITE = 'solid rgb(230, 255, 255) 1px';

const DAY_LABELS = {
  0: 'Mon',
  1: 'Tues',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun',
}

class Planner extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      viewIngredients: false
    }
    this.toggleIngredients = this.toggleIngredients.bind(this);
  }

  getIngredientList() {
    let ingredientString = '';
    let recipeCounts = {}
    let selectedWeek = this.props.planner.selectedWeek;

    this.props.planner[selectedWeek].forEach(day => {
      ['breakfast', 'lunch', 'dinner'].forEach((mealKey) => {
        if (mealKey in day) {
          let recipe = day[mealKey];
          if ( !(recipeCounts[ recipe._id ]) ) {
            recipeCounts[ recipe._id ] = {recipe: recipe, count: 0};
          }
          recipeCounts[ recipe._id ].count++;
        }
      });
    });

    Object.values(recipeCounts).forEach((recipe) => {
      ingredientString +=
        recipe.recipe.abridgedData.recipeName + ` (x${recipe.count}) \n` + 
        recipe.recipe.fullData.ingredientLines.join('\n') + '\n\n';
    })

    return ingredientString;
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.viewIngredients) {
      let doc = new PDFDocument;
      let stream = doc.pipe(blobStream());

      doc.text(this.getIngredientList());

      doc.end();

      stream.on('finish', () => {
        let blob = stream.toBlob('application/pdf');
        let url = stream.toBlobURL('application/pdf');
        this.ingredientList.src = url;
      });
    }
  }

  toggleIngredients() {
    this.setState((prevState) => {
      return { viewIngredients: !prevState.viewIngredients };
    });
  }

  getPlannerItem({selectedDay, selectedMeal}) {
    let selectedWeek = this.props.planner.selectedWeek;
    let plannerItem = this.props.planner[selectedWeek][selectedDay][selectedMeal];
    return plannerItem;
  }

  getPlannerCell(selectedDay, selectedMeal) {
    let cell = {selectedDay, selectedMeal};
    return (
      <PlannerCell
        editMode={this.props.planner.editMode}
        cell={cell}
        plannerItem={this.getPlannerItem(cell)}
        selection={this.props.selection}
        actions={this.props.actions}
      />
    )
  }

  getThisWeekButton() {
    let buttonToggled = this.props.planner.selectedWeek === 'week_one';
    let buttonProps = {
      label: 'This Week',
      onClick: () => {
        this.props.actions.setPlannerWeek('week_one')
      }
    };

    if (buttonToggled) {
      _.extend(buttonProps, {
        backgroundColor: 'rgb(40, 130, 150)',
        labelColor: 'white',
        hoverColor: 'rgb(40, 130, 150)',
        rippleColor: '#E1F5FE'
      });
    }

    return (
      <div>
        <RaisedButton {...buttonProps} />
      </div>
    )
  }

  getNextWeekButton() {
    let buttonToggled = this.props.planner.selectedWeek === 'week_two';
    let buttonProps = {
      label: 'Next Week',
      onClick: ()=>{ this.props.actions.setPlannerWeek('week_two') }
    };

    if (buttonToggled) {
      _.extend(buttonProps, {
        backgroundColor: 'rgb(40, 130, 150)',
        labelColor: 'white',
        hoverColor: 'rgb(40, 130, 150)',
        rippleColor: '#E1F5FE'
      });
    }

    return (
      <div>
        <RaisedButton {...buttonProps} />
      </div>
    )
  }

  getBottomAddButton() {
    let buttonToggled = this.props.planner.editMode === 'ADD';
    let buttonProps = {
      style: {marginRight: '10px'},
      mini: true,
      onClick: () => this.props.actions.setPlannerEditMode('ADD'),
    }
    if (!buttonToggled) {
      _.extend(buttonProps, {
        style: {boxShadow: 'unset'},
        backgroundColor: 'white',
        iconStyle: {fill:'#00BCD4'}
      });
    }
    return (
      <FloatingActionButton {...buttonProps} >
        <ContentAdd />
      </FloatingActionButton>
    )
  }

  getBottomExportButton() {
    let buttonProps = {
      onClick: () => this.toggleIngredients(),
      mini: true,
      style: {boxShadow: 'unset'},
      backgroundColor: 'white',
      iconStyle: {fill:'#00BCD4'}
    }
    return (
      <FloatingActionButton {...buttonProps} >
        <ContentList />
      </FloatingActionButton>
    )
  }

  getBottomRemoveButton() {
    let buttonToggled = this.props.planner.editMode === 'REMOVE';
    let buttonProps = {
      mini: true,
      style: {marginRight: '10px'},
      onClick: () => this.props.actions.setPlannerEditMode('REMOVE'),
    }

    if (buttonToggled) {
      buttonProps.secondary = true;;
    } else {
      _.extend(buttonProps, {
        style: {boxShadow: 'unset', marginRight: '10px'},
        backgroundColor: 'white',
        iconStyle: {fill:'#FF4081'}
      });
    }
    return (
      <FloatingActionButton {...buttonProps} >
        <ContentDelete />
      </FloatingActionButton>
    )
  }

  getTableRows() {
    var cells = [];
    let selectedWeek = this.props.planner.selectedWeek;
    this.props.planner[selectedWeek].forEach((day, index) => {
      cells.push(
        <div style={{display: 'flex', flex: '0 0 88px'}}>
          <PlannerDow day={DAY_LABELS[index]}/>
          { this.getPlannerCell(index, 'breakfast') }
          { this.getPlannerCell(index, 'lunch') }
          { this.getPlannerCell(index, 'dinner') }
        </div >
      );
    });
    return cells;
  }

  getListDialog() {
    const actions = [
      <FlatButton
        label="Close"
        secondary={true}
        onTouchTap={this.toggleIngredients}
      />
    ];

    return (
      <Dialog
        actions={actions}
        autoDetectWindowHeight={false}
        contentStyle={{
          width: "92%",
          height:"90%",
          maxWidth: "none",
          transform: "none"
        }}
        bodyStyle={{
          height: "90%",
          maxHeight: 'none',
        }}
        modal={false}
        open={this.state.viewIngredients}
        onRequestClose={this.toggleIngredients}
      >
        <iframe
          ref={(iframe) => { this.ingredientList = iframe}}
          src='https://www.google.com'
          style={{
            width: '96%',
            height: '90%'
          }}
        />
      </Dialog>
    )
  }

  render() {
    return (
      <div style={{display: 'flex', flexFlow: "column", flexGrow: 1}}>
        <div style={{display: 'flex', flexGrow: 0}}>
          <PlannerCorner />
          <PlannerHeader title="Breakfast" />
          <PlannerHeader title="Lunch" />
          <PlannerHeader title="Dinner" />
        </div>

        { this.getTableRows() }

        <div style={{display: 'flex', flexGrow: 1, padding: '6px'}}>
          { this.getThisWeekButton() }

          <div style={{flexGrow: 1, textAlign: 'center'}} >
            { this.getBottomRemoveButton() }
            { this.getBottomAddButton() }
            { this.getBottomExportButton() }
          </div>

          { this.getNextWeekButton() }

          { this.getListDialog() }
        </div >
      </div>
    )
  }
}

class PlannerHeader extends React.Component {
  render() {
    return <div style={{
      display: 'flex',
      flex: '1 1',
      alignItems: 'center',
      borderBottom: BORDER_STYLE,
      borderTop: BORDER_STYLE_WHITE,
      borderRight: BORDER_STYLE_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '7px',
      color: 'white',
      backgroundColor: 'rgb(40, 130, 150)'
    }}>
      {this.props.title}
    </div>
  }
}

class PlannerCorner extends React.Component {
  render() {
    return <div style={{
      display: 'flex',
      borderLeft: BORDER_STYLE_WHITE,
      borderRight: BORDER_STYLE_WHITE,
      borderBottom: BORDER_STYLE,
      borderTop: BORDER_STYLE_WHITE,
      flex: '0 0 40px',
      backgroundColor: 'rgb(40, 130, 150)'
    }}>
    </div>
  }
}

class PlannerDow extends React.Component {
  render() {
    return <div style={{
      display: 'flex',
      flex: '0 0 40px',
      borderBottom: BORDER_STYLE_WHITE,
      borderLeft: BORDER_STYLE_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'rgb(40, 130, 150)'
    }}>
      {this.props.day}
    </div>
  }
}

class PlannerCell extends React.Component {
  getCellContents() {
    let item = this.props.plannerItem;

    if (
      this.props.editMode === 'REMOVE' &&
      item
    ) {
      return (
        <FloatingActionButton
          mini={true}
          backgroundColor='#F06292'
          onClick={()=>{
            this.props.actions.removeCalendarDayThunk(this.props.cell);
          }}
        >
          <ContentDelete />
        </FloatingActionButton>
      )
    }

    if (item) {
      return (
        <div onClick={()=>{this.props.actions.selectItem(item)}}>
          <img
            src={item.fullData.images[0].hostedLargeUrl}
            style={{width: '120px'}}
          />
        </div>
      )
    }

    if (
      this.props.editMode === 'ADD' &&
      this.props.selection
    ) {
      return (
        <FloatingActionButton
          mini={true}
          backgroundColor='rgb(150,230,230)'
          onClick={()=>{
            this.props.actions.addCalendarDayThunk(this.props.cell);
          }}
        >
          <ContentAdd />
        </FloatingActionButton>
      );
    }

    if (
      this.props.editMode === 'ADD' &&
      !this.props.selection
    ) {
      return (
        <FloatingActionButton mini={true} disabled={true}>
          <ContentAdd />
        </FloatingActionButton>
      );
    }

    return 'Empty'
  }

  render() {
    return (
      <div
        onClick = {this.props.onClick}
        style={{
          display: 'flex',
          flex: '1 1',
          borderBottom: BORDER_STYLE,
          borderRight: BORDER_STYLE,
          color: 'rgb(120, 120, 120)',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
          fontSize: '12px'
        }}
      >
        {this.getCellContents()}
      </div>
    );
  }
}

export default Planner;
