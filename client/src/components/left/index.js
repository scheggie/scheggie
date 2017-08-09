import React from 'react';
import User from './user';
import Selection from './selection';
import Planner from './planner';

const general_style = {
  flexGrow: 1, 
  flexBasis: '33%',
  backgroundColor: '#e6e6e6' 
}

class Left extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

      <div style={general_style}>
        <User />
        <Selection />
        <Planner />
      </div>

    )

  }

} 


export default Left;