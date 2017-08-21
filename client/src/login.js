import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FacebookLogin from 'react-facebook-login';

const customContentStyle = {
  textAlign: "center"
};


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dialogImage: 'test'
    };
  }

  render() {
    let imgPath = 'https://i.imgur.com/3RjUCdI.png';
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
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <span style={{height: '50px'}}></span>
            {this.state.dialogImage}
            <span style={{height: '75px'}}></span>
            <FacebookLogin
              appId="1998888367009644"
              fields="name,email,picture"
              callback={this.props.logIn}/>
            <span style={{height: '10px'}}></span>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default LogIn;
