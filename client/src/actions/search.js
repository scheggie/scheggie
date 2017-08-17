import * as types from './types';

export const updateSearchTerm = (input) => {
  var searchTerm = typeof input === 'string' ?
    input :
    input.target.value;
  return { type: types.UPDATE_SEARCH_TERM, searchTerm }
}

export const updateSearchType = () => ({
  type: types.UPDATE_SEARCH_TYPE,
});
