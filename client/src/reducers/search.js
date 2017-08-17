import * as types from '../actions/types';

const INITIAL_STATE = {
  searchTerm: '',
  searchType: 'RECIPES'
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_TERM:
      return _.extend({}, state, {searchTerm: action.searchTerm});
    case types.UPDATE_SEARCH_TYPE:
      return _.extend({}, state, {
        searchType: state.searchType === 'RECIPES' ? 'FAVORITES' : 'RECIPES'
      });
  }
  return state;
}

export default reducer;
