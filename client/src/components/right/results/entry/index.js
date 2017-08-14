import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const Entry = () => (

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
        src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"
      />
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      flexGrow: 3,
    }}>
      <div style={{
        height: '20px'
      }}>
        Food Title Here
      </div>
      <span style={{height: '5px'}}></span>
      <div style={{
        height: '75px'
      }}>
        Lorem ipsum dolor sit amet, elitr convenire ei per, id vis idque quodsi intellegat, inermis veritus quaerendum vis at. Eam deserunt suscipiantur ea, mutat gubergren est id. Ea liber senserit vim. Salutatus similique complectitur ex pro, pro eu altera labitur. Te ignota perpetua quo, id mea nostrud feugiat, nec falli decore fuisset an.
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
        favorite
      </IconButton>
    </div>

  </div>

)

export default Entry;