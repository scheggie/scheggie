import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


class Results extends React.Component {
  constructor(props) {
    console.log('full data', props.data);
    super(props);
  };


  render() {
    return (
      
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          padding: '0px 100px 0px 100px'
        }}>

        <GridList
          cellHeight={200}
          cols={3}
          style={{
            overflowY: 'scroll'
          }}
        >
          
        </GridList>

      </div>

    )
  }
}

// commented out for reference later on:

// GRID TILE MAPPING FUNCTION:

// {
//   fakeTileData.map( (tile, i) => {
//     return (
//       <GridTile
//         key={i}
//         title={tile.title}
//         subtitle={<span>by <b>{tile.author}</b></span>}
//         actionIcon={<IconButton><FavoriteBorder color="white" /></IconButton>}
//       >
//         <img src={tile.img} />
//       </GridTile>
//     )
//   })
// }


// OLD REFERENCE TO LIST:

// <div 
//   style={{
//     display: 'flex',
//     flexDirection: 'column',
//     flexWrap: 'nowrap',
//     justifyContent: 'center',
//     alignContent: 'center',
//     padding: '0px 30px 0px 30px'
//   }}>

//   {
//     this.props.data.map(recipe => 
//       <div>
//         <Entry recipe={recipe}/>
//         <span style={{
//           height: '5px'
//         }}></span>
//       </div>
//     )
//   } 
// </div>

export default Results;


