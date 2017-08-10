import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.props.login}
      />
    ]

    return (
      <MuiThemeProvider>
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
            onRequestClose={this.props.login}
          >
            <div style={{textAlign: 'center'}}>
              <img style={{maxWidth: '100%'}} src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"/>
              <div>
                <br />
                <a href="/auth/facebook">Click me</a>
              </div>
            </div>
          </Dialog>
        </div>
      </MuiThemeProvider>
    )

  }

} 

ReactDOM.render(<Login />, document.getElementById('login'));
