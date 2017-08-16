import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const Entry = (props) => (

  <div style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    padding: '10px 30px 10px 30px',
    height: '100px',
    backgroundColor: '#F1F8E9'
  }}>

    <div style={{
      flexGrow: 0,
      padding: '0px 30px 0px 0px'
    }}>
      <img 
        style={{
          height: '100px'
        }}
        src={props.recipe.fullData.images[0]['hostedLargeUrl']}
      />
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      flexGrow: 3,
    }}>
      <div style={{
        height: '20px',
        'font-weight': 'bold'
      }}>
        {props.recipe.fullData.name}
      </div>
      <span style={{height: '5px'}}></span>
      <div style={{
        height: '75px'
      }}>
        Ingredients: {props.recipe.abridgedData.ingredients.join(',  ')}
      </div>
    </div>

    <div style={{
      display: 'flex',
      flexGrow: 0,
      alignItems: 'center'
    }}>
      <IconButton 
        tooltip="Favorite"
        iconClassName="material-icons"
      >
        favorites
      </IconButton>
    </div>

  </div>

)

export default Entry;