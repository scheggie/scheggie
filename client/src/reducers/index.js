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
  let updatedState;

  switch (action.type) {
    case types.ADD_CALENDAR_DAY:
      let selectedDay = action.selectedDay;
      let selectedMeal = action.selectedMeal;
      let selectedWeek = state.planner.selectedWeek;
      updatedState = JSON.parse(JSON.stringify(state));

      updatedState.planner[selectedWeek][selectedDay][selectedMeal] =
        state.selection;

      return updatedState;

    case types.SYNC_USER:
      updatedState = JSON.parse(JSON.stringify(state));
      let user = action.user;
      updatedState.planner.week_one = user.week_one;
      updatedState.planner.week_two = user.week_two;
      updatedState.favorites = user.favRecipes
      return updatedState;
  }
  return state;
}

const mergedReducer = applyReducersSequentially(
  appReducer,
  rootReducer
);

export default mergedReducer;
