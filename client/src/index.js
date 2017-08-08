import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui';
import Left from './components/left';
import Right from './components/right';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (


        <Flexbox flexDirection="row" minWidth="100vw" minHeight="100vh">
          <Left />
          <Right />
        </Flexbox>
 

    ) 

  }

}



ReactDOM.render(<App />, document.getElementById('app'));