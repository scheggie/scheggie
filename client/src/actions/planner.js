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

export const syncCalendarDay = ({ selectedDay, selectedMeal }) => ({
  type: types.SYNC_CALENDAR_DAY,
  selectedDay,
  selectedMeal
});
