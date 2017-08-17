import * as types from './types';

/* Thunk action
export const addCalendarDayAjax = ({ selectedDay, selectedMeal }) => {
  return (dispatch) => {
    $.ajax ...
    .then(() => {
      dispatch(syncCalendarDay({ selectedDay, selectedMeal}));
    })
  }
}
*/

export const addCalendarDay = ({ selectedDay, selectedMeal }) => ({
  type: types.ADD_CALENDAR_DAY,
  selectedDay,
  selectedMeal
});

export const removeCalendarDay = ({ selectedDay, selectedMeal }) => ({
  type: types.REMOVE_CALENDAR_DAY,
  selectedDay,
  selectedMeal
});

export const setPlannerEditMode = (mode) => ({
  type: types.SET_PLANNER_EDIT_MODE,
  mode
})
