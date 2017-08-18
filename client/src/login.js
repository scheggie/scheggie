import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Flexbox from 'flexbox-react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FacebookLogin from 'react-facebook-login';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dialogImage: 'test'
    };
  }

  render() {
    let imgPath = 'http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg'
    let image = new Image();
    image.onload = () => {
      this.setState({
        open: true,
        dialogImage: <img src={imgPath} />
      });
    };
    image.src = imgPath;

    return (
      <div>
        <Dialog
          title="Scheggie Login"
          modal={true}
          open={this.state.open}
        >
          <div style={{textAlign: 'center'}}>
            {this.state.dialogImage}
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
