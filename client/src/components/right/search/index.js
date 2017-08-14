import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const Search = () => (

  <div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '15px 30px 15px 30px',

    }}>
    <TextField 
      hintText="Search recipes..."
      underlineFocusStyle={{
        borderColor: 'rgb(40, 130, 150)',
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        transform: 'scaleX(0)',
      }}
      style={{
        borderRadius: '10px'
      }}
    />
    <FlatButton 
      label="Search"
      hoverColor='rgb(40, 130, 150)'
      rippleColor='#E1F5FE'
    />
  </div>

)

export default Search;