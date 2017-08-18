import * as types from '../actions/types';
import data from '../../../sampleData.js';

const INITIAL_STATE = {
  searchTerm: '',
  searchType: 'RECIPES',
  results: data
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_TERM:
      return _.extend({}, state, {searchTerm: action.searchTerm});
    case types.UPDATE_SEARCH_TYPE:
      return _.extend({}, state, {
        searchType: state.searchType === 'RECIPES' ? 'FAVORITES' : 'RECIPES'
      });
    case types.UPDATE_SEARCH_RESULTS:
      return _.extend({}, state, {
        results: action.results
      });
  }
  return state;
}

export default reducer;
