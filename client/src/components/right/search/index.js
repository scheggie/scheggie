import React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const Search = () => (

  <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '15px'
  }}>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
    }}>
      
      <div style={{
        paddingLeft: '30px'
      }}>
        <FlatButton 
          label="Favorites"
          hoverColor='rgb(40, 130, 150)'
          rippleColor='#E1F5FE'
        />
      </div>

      <div style={{
        paddingLeft: '30px'
      }}>
        <TextField 
          hintText="Find recipes..."
          textareaStyle={{
            backgroundColor: 'gray'
          }}
          underlineFocusStyle={{
            borderColor: 'rgb(40, 130, 150)',
            borderBottomStyle: 'solid',
            borderBottomWidth: 2,
            transform: 'scaleX(0)',
          }}
          style={{
            width: '500px'
          }}
        />
        <span style={{width: '30px'}}></span>
        <FlatButton 
          label="Search"
          hoverColor='rgb(40, 130, 150)'
          rippleColor='#E1F5FE'
        />
      </div>

    </div>

    <div style={{
      paddingRight: '30px'
    }}>
      <img 
        style={{
          height: '100px'
        }}
        src="http://i.imgur.com/3RjUCdI.png"
        alt="Scheggie: The vegetarian's meal planner"
      />
    </div>

  </div> 

)



export default Search;