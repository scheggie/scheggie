import * as types from './types';
import $ from 'jquery';

export const updateSearchThunk = (input, filter = {}) => {
  return (dispatch) => {
    var searchTerm = typeof input === 'string' ?
      input :
      input.target.value;
    dispatch(updateSearchTerm(searchTerm));
    $.get({
      url: '/recipeSearch',
      data: {
        query: searchTerm,
        filter: filter
      },
      dataType: 'json',
      success: (results) => {
        console.log('result is:', results[0]);
        dispatch(updateSearchResults(results));
      }
    });
  };
}

export const updateSearchResults = results =>
  ({ type: types.UPDATE_SEARCH_RESULTS, results });

export const updateSearchTerm = searchTerm =>
  ({ type: types.UPDATE_SEARCH_TERM, searchTerm });

export const updateSearchType = () =>
  ({ type: types.UPDATE_SEARCH_TYPE });
