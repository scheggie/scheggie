import React from 'react';
import User from './user';
import Selection from './selection';
import Planner from './planner';

const generalStyle = {
  flexGrow: 1,
  flexBasis: '400px',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
}

class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={generalStyle}>
        <User />
        <Selection />
        <Planner />
      </div>
    )

  }

}


export default Left;
