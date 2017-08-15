import * as types from '../actions/types.js';

const INITIAL_STATE = {
  loggedIn: false,
  user: null
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === types.LOG_IN) {
    return {
      loggedIn: true,
      user: action.user
    };
  } else if (action.type === types.LOG_OUT) {
    return {
      loggedIn: false,
      user: null
    };
  } else {
    return state;
  }
}

export default reducer;
