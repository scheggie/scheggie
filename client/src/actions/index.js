import _ from 'lodash';
import $ from 'jquery';

import * as types from './types';
import * as plannerActions from './planner';
import * as searchActions from './search';
import * as selectionActions from './selection';
import * as authActions from './auth';
import * as favoritesActions from './favorites';

const syncUser = (user) => ({
  type: types.SYNC_USER,
  user: user,
});

const loadUser = () => {
  return (dispatch, getState) => {
    let id = getState().auth.user.id;
    $.get({
      url: '/user',
      data: {id},
      dataType: 'json',
      success: (user) => {
        dispatch(syncUser(user));
      }
    });
  }
}

const actions = _.extend(
  { loadUser },
  plannerActions,
  searchActions,
  selectionActions,
  authActions,
  favoritesActions
);

export default actions;
