import * as types from './types';

export const toggleFavorite = (recipe) => ({
  type: types.TOGGLE_FAVORITE,
  recipe: recipe
});
