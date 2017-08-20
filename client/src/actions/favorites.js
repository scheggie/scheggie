import $ from 'jquery';
import * as types from './types';

export const toggleFavoriteThunk = (recipe) => {
  return (dispatch, getState) => {
    let {favorites, auth} = getState();
    let facebookId = auth.user.id;
    let postUrl = recipe._id in favorites ?
      '/removeFromFavorites':
      '/addToFavorites';
    $.post({
      url: postUrl,
      data: JSON.stringify({
        recipe,
        facebookId
      }),
      contentType: 'application/json',
      success: (response) => {
        console.log(response);
        dispatch(toggleFavorite(recipe));
      }
    });
  };
};


export const toggleFavorite = (recipe) => ({
  type: types.TOGGLE_FAVORITE,
  recipe: recipe
});
