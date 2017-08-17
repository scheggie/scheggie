import * as types from '../actions/types';

const INITIAL_STATE = null;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECT:
      return action.selection;
  }
  return state;
}

export default reducer;
