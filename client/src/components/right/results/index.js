import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class Results extends React.Component {
  constructor(props) {
    super(props);
  };

  getFavoriteIcon(recipe) {
    return (
      <IconButton onClick={()=>{
        this.props.actions.toggleFavoriteThunk(recipe);
      }}>
        {recipe._id in this.props.favorites ?
         <Favorite color="white" /> :
         <FavoriteBorder color="white" />
        }
      </IconButton>
    );
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          padding: '0px 30px 0px 30px'
        }}
      >
        <GridList
          cellHeight={200}
          cols={3}
          style={{
            overflowY: 'scroll'
          }}
        >
          {
            this.props.data.map( (recipe, i) => {
              return (
                <GridTile
                  key={i}
                  title={recipe.fullData.name}
                  subtitle={
                    <a
                      href={recipe.fullData.source.sourceRecipeUrl}
                      style={{color: 'white'}}
                      target="_blank"
                    >
                      { recipe.abridgedData.sourceDisplayName }
                    </a>
                  }
                  actionIcon={this.getFavoriteIcon(recipe)}
                >
                  <img
                    src={recipe.fullData.images[0]['hostedLargeUrl']}
                    onDragStart={(e)=>{
                      this.props.actions.selectItem(recipe);
                    }}
                    onClick={()=>{
                      this.props.actions.selectItem(recipe)
                    }}
                  />
                </GridTile>
              )
            })
          }
        </GridList>
      </div>
    )
  }
}

export default Results;
