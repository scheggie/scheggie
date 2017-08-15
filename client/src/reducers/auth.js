import * as types from '../actions/types.js';
import { LOAD } from 'redux-storage';

const INITIAL_STATE = {
  loggedIn: false,
  user: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        loggedIn: true,
        user: action.user
      };

    case types.LOG_OUT:
      return {
        loggedIn: false,
        user: null
      };

    case LOAD:
      return action.payload.auth
  }
  return state;
};

export default reducer;
