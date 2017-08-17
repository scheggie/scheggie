import { combineReducers } from 'redux'
import auth from './auth';
import planner from './planner';
import search from './search';
import selection from './selection';
import favorites from './favorites';
import * as types from '../actions/types';

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
  search,
  favorites
});

// Any update that need multiple branchs of the store tree go here
const rootReducer = (state, action) => {
  switch (action.type) {
    case types.SYNC_CALENDAR_DAY:
      let selectedDay = action.selectedDay;
      let selectedMeal = action.selectedMeal;
      let selectedWeek = state.planner.selectedWeek;
      let updatedState = _.extend({}, state);

      updatedState.planner[selectedWeek][selectedDay][selectedMeal] =
        state.selection.selection;

      return updatedState;
  }
  return state;
}

const mergedReducer = applyReducersSequentially(
  appReducer,
  rootReducer
);

export default mergedReducer;
