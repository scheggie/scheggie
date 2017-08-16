import React from 'react';
import User from './user';
import Selection from './selection';
import Planner from './planner';
import Paper from 'material-ui/Paper';


const generalStyle = {
  flexGrow: 1,
  flexBasis: '500px',
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
      <Paper style={generalStyle} zDepth={3}>
        <User
          user={this.props.user}
          logOut={this.props.actions.logOut}
        />
        <Selection />
        <span style={{height: '30px'}}></span>
        <Planner planner={this.props.planner} />
      </Paper>
    )

  }

}


export default Left;
