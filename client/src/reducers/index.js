import { combineReducers } from 'redux'
import auth from './auth';
import planner from './planner';
import search from './search';
import selection from './selection';
import { LOAD, SAVE } from 'redux-storage';

const applyReducersSequentially = (...reducers) => {
  return (originalState, action) => {
    let updatedState;
    reducers.forEach((reducer) => {
      updatedState = reducer(updatedState || originalState, action)
    });
    return updatedState;
  }
};

const appReducer = combineReducers({
  auth,
  selection,
  planner,
  search
});

const loadReducer = (state, action) => {
  if (action.type === LOAD) {
    return action.payload;
  } else {
    return state;
  }
}

export default applyReducersSequentially(
  appReducer,
  loadReducer
);
