import React from 'react';
// import Flexbox from 'Flexbox-react';
import _ from 'lodash';

const BORDER_STYLE = 'solid rgb(180, 180, 180) 1px';
const BORDER_STYLE_WHITE = 'solid rgb(230, 255, 255) 1px';
class Planner extends React.Component {

  constructor(props) {
    super(props)
  }

  updateCalendar() {
    console.log('this value was clicked!');
  }

  getTableRows() {
    var cells = [];
    for (var day of this.props.planner.days) {
      cells.push(
        <div style={{display: 'flex', flexGrow: 2}}>
          <PlannerDow day={day.day}/>
          <PlannerCell update = {this.updateCalendar.bind(this)} />
          <PlannerCell update = {this.updateCalendar.bind(this)} />
          <PlannerCell update = {this.updateCalendar.bind(this)} />
        </div >
      );
    }
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
      onClick = {this.props.update}
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
