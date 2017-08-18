import * as types from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
	selectedWeek: 'week_one',
	editMode: 'ADD',
  week_one: _.map(_.range(7), ()=>({})),
  week_two: _.map(_.range(7), ()=>({}))
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_PLANNER_EDIT_MODE:
			return _.extend({}, state, {editMode: action.mode})

		case types.SET_PLANNER_WEEK:
			return _.extend({}, state, {selectedWeek: action.week})

		case types.REMOVE_CALENDAR_DAY:
      let selectedDay = action.selectedDay;
      let selectedMeal = action.selectedMeal;
      let selectedWeek = state.selectedWeek;
      let updatedState = JSON.parse(JSON.stringify(state));

      updatedState[selectedWeek][selectedDay][selectedMeal] =
        null;

      return updatedState;

	}

	return state;
}

export default reducer;
