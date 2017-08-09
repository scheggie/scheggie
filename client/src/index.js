import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Left from './components/left';
import Right from './components/right';

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <MuiThemeProvider>
        <Flexbox flexDirection="row" minWidth="100vw" minHeight="100vh">
          <Left />
          <Right />
        </Flexbox>
      </MuiThemeProvider>

    ) 

  }

}



ReactDOM.render(<App />, document.getElementById('app'));