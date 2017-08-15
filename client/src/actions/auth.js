import * as types from './types';
import $ from 'jquery';

export const logIn = (user) => ({
  type: types.LOG_IN,
  user: user
});

export const logInAjax = (user) => {
  return (dispatch) => {
    $.post({
      url: '/login',
      data: JSON.stringify(user),
      contentType: 'application/json',
      success: (response) => {
        console.log(response);
        dispatch(logIn(user))
      }
    });
  }
};

export const logOut = () => ({
  type: types.LOG_OUT
})
