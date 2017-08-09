import React from 'react';
import ReactDOM from 'react-dom';
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

    return this.state.loggedIn ? (

      <MuiThemeProvider>
        <Flexbox flexDirection="row" minWidth="100vw" minHeight="100vh">
          <Left />
          <Right />
        </Flexbox>
      </MuiThemeProvider>

    ) : (

      <MuiThemeProvider>
        <Flexbox minWidth="100vw" minHeight="100vh">
          <Login login={this.login}/>
        </Flexbox>
      </MuiThemeProvider>

    )  

  }

}



ReactDOM.render(<App />, document.getElementById('app'));