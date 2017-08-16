import React from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

var User = (props) => (

  <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px',
    backgroundColor: 'rgb(40, 130, 150)'
  }}>
    <div style={{
      paddingLeft: '15px'
    }}>
      <Avatar size={40} src={props.user.picture.data.url} style={{boxShadow: '2px 2px 4px #1a3300'}}/>
    </div>  
    <div style={{
      paddingRight: '15px'
    }}>
      <FlatButton
        label="Log Out"
        hoverColor="#EF5350"
        rippleColor="#FFEBEE"
        onTouchTap={props.logOut}
        style={{
          color: 'white'
        }}
      />
    </div>
  </div>

)

// Toolbar style={toolbar_style}>
//     <ToolbarGroup>
//       <IconMenu
//           iconButtonElement={
//             <IconButton touch={true} style={{margin: '-46px 0 0 -10px'}}>
//             </IconButton>
//           }
//         >
//         <MenuItem primaryText="Change Avatar" />
//         <MenuItem primaryText="Log Out" onTouchTap={props.logOut} />
//       </IconMenu>
//     </ToolbarGroup>
//     <ToolbarGroup>
//       <ToolbarTitle
//         text={`Hello ${props.user.name.split(' ')[0]}!`}
//         style={{color: '#ffffff'}}/>
//     </ToolbarGroup>
//   </Toolbar>



export default User;
