import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Flexbox from 'flexbox-react';


const toolbar_style = {
  background: 'linear-gradient(to bottom, #669900 7%, #336600 81%)',
  height: '90px',
  borderRadius: '5px'
}

var User = (props) => (

  <Toolbar style={toolbar_style}>
    <ToolbarGroup>
      <IconMenu
          iconButtonElement={
            <IconButton touch={true} style={{margin: '-46px 0 0 -10px'}}>
              <Avatar size={70} src={props.user.picture.data.url} style={{boxShadow: '2px 2px 4px #1a3300'}}/>
            </IconButton>
          }
        >
        <MenuItem primaryText="Change Avatar" />
        <MenuItem primaryText="Log Out" onTouchTap={props.logOut} />
      </IconMenu>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarTitle
        text={`Hello ${props.user.name.split(' ')[0]}!`}
        style={{color: '#ffffff'}}/>
    </ToolbarGroup>
  </Toolbar>

)

export default User;
