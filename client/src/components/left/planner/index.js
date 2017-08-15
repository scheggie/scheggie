import React from 'react';
import Flexbox from 'flexbox-react';
import _ from 'lodash';

const BORDER_STYLE = 'solid rgb(180, 180, 180) 1px';
const BORDER_STYLE_WHITE = 'solid rgb(230, 255, 255) 1px';
class Planner extends React.Component {

  constructor(props) {
    super(props)
  }

  updateCalendar() {
    console.log('this value was clicked!');
    // $.ajax({
    //   url: 
    // })
  }

  getTableRows() {
    // var cells = [];
    // for (var day of this.props.planner.days) {
    //   cells.push(
    //     <Flexbox style={{flexGrow: 2}}>
    //       <PlannerDow day={day.day}/>
    //       <PlannerCell name = "breakfast" id = {day.id} week = {day.week} onClick = {this.updateCalendar}/>
    //       <PlannerCell name = "lunch" id = {day.id} week = {day.week} onClick = {this.updateCalendar}/>
    //       <PlannerCell name = "dinner" id = {day.id} week = {day.week} onClick = {this.updateCalendar}/>
    //     </Flexbox >
    //   );
    // }
    // return cells;
  }

  render() {
    return (
      <Flexbox style={{flexFlow: "column", flexGrow: 1}}>
        <Flexbox style={{flexGrow: 0}}>
          <PlannerCorner />
          <PlannerHeader title="Breakfast" />
          <PlannerHeader title="Lunch" />
          <PlannerHeader title="Dinner" />
        </Flexbox>
        { this.getTableRows() }
        <Flexbox style={{flexGrow: 1}}>
          <div style={{padding: '10px'}}> Last Week </div>
          <div style={{flexGrow: 1}}> </div>
          <div style={{padding: '10px'}}> Next Week </div>
        </Flexbox >
      </Flexbox>
    )
  }
}

class PlannerHeader extends React.Component {
  render() {
    return <Flexbox style={{
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
    </Flexbox>
  }
}

class PlannerCorner extends React.Component {
  render() {
    return <Flexbox style={{
      borderRight: BORDER_STYLE_WHITE,
      flex: '0 0 40px',
    }}> </Flexbox>
  }
}

class PlannerDow extends React.Component {
  render() {
    return <Flexbox style={{
      flex: '0 0 40px',
      borderBottom: BORDER_STYLE_WHITE,
      borderLeft: BORDER_STYLE_WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: 'rgb(40, 130, 150)'
    }}>
      {this.props.day}
    </Flexbox>
  }
}

class PlannerCell extends React.Component {
  render() {
    return <Flexbox style={{
      flex: '1 1',
      borderBottom: BORDER_STYLE,
      borderRight: BORDER_STYLE,
      color: 'rgb(120, 120, 120)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px',
      fontSize: '12px'
    }}> Empty </Flexbox>
  }
}



export default Planner;
