import * as types from '../actions/types';

const INITIAL_STATE = {
  selection: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECT:
      return {
        selection: action.item
      }
  }
  return state;
}

export default reducer;
