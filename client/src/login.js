import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FacebookLogin from 'react-facebook-login';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={
        {
          display: 'flex',
          width: '100vw',
          backgroundImage: "url('https://images7.alphacoders.com/417/thumb-1920-417966.jpg')"
        }
      }>
        <Dialog
          title="Scheggie Login"
          modal={false}
          open={true}
        >
          <div style={{textAlign: 'center'}}>
            <img style={{maxWidth: '100%'}} src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"/>
            <FacebookLogin
              appId="1998888367009644"
              fields="name,email,picture"
              callback={this.props.logIn}
            />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default LogIn;
