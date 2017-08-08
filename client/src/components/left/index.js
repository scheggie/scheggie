import React from 'react';
import User from './user';
import Selection from './selection';
import Planner from './planner';



class Left extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

      <div style={{flexGrow: 1}}>
        <User />
        <Selection />
        <Planner />
      </div>

    )

  }

} 


export default Left;