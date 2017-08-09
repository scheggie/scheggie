import React from 'react';
import Avatar from 'material-ui/Avatar';
import Flexbox from 'flexbox-react';

const general_style = {
  background: 'linear-gradient(to bottom, #99ff33 18%, #009900 90%)'
};

const avatar_style = {
  float: 'left',
}

const title_style = {
  float: 'left',
}

var User = () => (

  <Flexbox minHeight="125px" style={general_style}>

    <Flexbox marginLeft="30px" marginTop="20px"> 
      <Avatar size={80} style={avatar_style}/>
    </Flexbox>

    <Flexbox marginLeft="30px" marginTop="20px"> 
      <h3 >Welcome User!</h3>
    </Flexbox>

  </Flexbox>

)

export default User;