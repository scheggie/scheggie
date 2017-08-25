import React from 'react';
import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Left from './components/left';
import Right from './components/right';
import LogIn from './login';

injectTapEventPlugin();


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        {
          this.props.auth.loggedIn ?
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%'
          }}>
            <Right
              actions={this.props.actions}
              favorites={this.props.favorites}
              search={this.props.search}
            />
            <Left
              planner = {this.props.planner}
              user={this.props.auth.user}
              actions={this.props.actions}
              selection={this.props.selection}
            />
          </div> :
          <LogIn logIn={this.props.actions.logInAjax} />
        }
      </MuiThemeProvider>
    );
  }

}

export default App;
