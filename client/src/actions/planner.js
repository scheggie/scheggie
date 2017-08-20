import $ from 'jquery';
import * as types from './types';

export const addCalendarDayThunk = ({ selectedDay, selectedMeal }) => {
  return (dispatch) => {
    dispatch(addCalendarDay({ selectedDay, selectedMeal}));
  }
}

export const removeCalendarDayThunk = ({ selectedDay, selectedMeal }) => {
  return (dispatch) => {
    dispatch(removeCalendarDay({ selectedDay, selectedMeal}));
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
