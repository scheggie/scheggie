import * as types from '../actions/types.js';
import _ from 'lodash';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_FAVORITE:
      if (action.recipe._id in state) {
        return _.omit(state, [action.recipe._id]);
      } else {
        return _.extend({[action.recipe._id]: action.recipe}, state)
      }
  }
  return state;
};

export default reducer;
