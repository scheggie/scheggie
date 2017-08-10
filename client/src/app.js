import React from 'react';
import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Left from './components/left';
import Right from './components/right';
import Login from './components/login';

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        {
          this.state.loggedIn ?
            <Flexbox flexDirection="row" width="100%" height="100%">
              <Left />
              <Right />
            </Flexbox>
            :
            <Flexbox minWidth="100vw" minHeight="100vh">
              <Login login={this.login}/>
            </Flexbox>
        }
      </MuiThemeProvider>
    );
  }

}

export default App;
