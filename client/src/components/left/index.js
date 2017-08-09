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

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        flexBasis: '400px'
      }}>
        <User />
        <Selection />
        <Planner />
      </div>

    )

  }

}


export default Left;
