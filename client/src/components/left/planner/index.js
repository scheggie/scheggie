import React from 'react';
// import Flexbox from 'Flexbox-react';
import _ from 'lodash';

const BORDER_STYLE = 'solid rgb(180, 180, 180) 1px';
const BORDER_STYLE_WHITE = 'solid rgb(230, 255, 255) 1px';

const DAY_LABELS = {
  0: 'Mon',
  1: 'Tues',
  2: 'Mon',
  3: 'Mon',
  4: 'Mon',
  5: 'Mon',
  6: 'Mon',
}

class Planner extends React.Component {

  constructor(props) {
    super(props)
  }

  updateCalendar() {
    console.log('this value was clicked!');
  }

  getTableRows() {
    var cells = [];
    this.props.planner.week_one.forEach((day, index) => {
      cells.push(
        <div style={{display: 'flex', flexGrow: 2}}>
          <PlannerDow day={DAY_LABELS[index]}/>
          <PlannerCell
            onClick={() => {
              let selectedCell = {selectedDay: index, selectedMeal: 'breakfast'}
              console.log(selectedCell);
              this.props.syncCalendarDay(selectedCell);
            }}
          />
          <PlannerCell
            onClick={() => {
              let selectedCell = {selectedDay: index, selectedMeal: 'lunch'}
              console.log(selectedCell);
              this.props.syncCalendarDay(selectedCell);
            }}
          />
          <PlannerCell
            onClick={() => {
              let selectedCell = {selectedDay: index, selectedMeal: 'dinner'}
              console.log(selectedCell);
              this.props.syncCalendarDay(selectedCell);
            }}
          />
        </div >
      );
    });
    return cells;
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
        <div style={{display: 'flex', flexGrow: 1}}>
          <div style={{padding: '10px'}}> Last Week </div>
          <div style={{flexGrow: 1}}> </div>
          <div style={{padding: '10px'}}> Next Week </div>
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
      borderRight: BORDER_STYLE_WHITE,
      flex: '0 0 40px',
    }}> </div>
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
  render() {
    return <div
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
    > Empty </div>
  }
}



export default Planner;
