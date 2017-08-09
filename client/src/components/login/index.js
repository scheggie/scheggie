import React from 'react';

const general_style = {
  backgroundImage: 'url(\'http://thiswallpaper.com/cdn/hdwallpapers/101/vegetables%20wide%20hd%20wallpaper.jpg\')',
}

class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

      <div style={general_style}>
        <button onClick={ () => { this.props.login() } }>LOGIN</button>
      </div>

    )

  }

} 


export default Login;