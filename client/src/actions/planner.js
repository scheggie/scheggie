import $ from 'jquery';
import * as types from './types';

export const addCalendarDayThunk = ({ selectedDay, selectedMeal }) => {
  return (dispatch, getState) => {
    let state = getState();
    let selectedWeek = state.planner.selectedWeek;
    let facebookId = state.auth.user.id;
    let selection = state.selection;

    $.post({
      url: '/addToCalendar',
      data: JSON.stringify({
        week: selectedWeek,
        day: selectedDay,
        meal: selectedMeal,
        recipe: selection,
        facebookId,
      }),
      contentType: 'application/json',
      success: () => {
        dispatch(addCalendarDay({ selectedDay, selectedMeal}));
      }
    })

  }
}

export const removeCalendarDayThunk = ({ selectedDay, selectedMeal }) => {
  return (dispatch, getState) => {
    let state = getState();
    let selectedWeek = state.planner.selectedWeek;
    let facebookId = state.auth.user.id;

    $.post({
      url: '/removeFromCalendar',
      data: JSON.stringify({
        week: selectedWeek,
        day: selectedDay,
        meal: selectedMeal,
        facebookId,
      }),
      contentType: 'application/json',
      success: () => {
        dispatch(removeCalendarDay({ selectedDay, selectedMeal}));
      }
    });

  }
}

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

export const setPlannerWeek = (week) => ({
  type: types.SET_PLANNER_WEEK,
  week
})
