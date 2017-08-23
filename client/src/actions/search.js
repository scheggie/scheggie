import * as types from './types';
import $ from 'jquery';

export const updateSearchThunk = (input) => {
  return (dispatch) => {
    var searchTerm = typeof input === 'string' ?
      input :
      input.target.value;
      if (searchTerm.includes(' ')) {
        var searchItem = searchTerm.split(' ')[0];
      } else {
        var searchItem = searchTerm;
      }
    dispatch(updateSearchTerm(searchItem));
    $.get({
      url: '/recipeSearch',
      data: {
        query: searchItem
      },
      dataType: 'json',
      success: (results) => {
        var newResult = [];
        if (searchTerm.includes(' ')) {
          var searchSplit = searchTerm.split(' ').slice(1);
          for (var i = 0; i < results.length; i++) {
            if (results[i].name.toLowerCase().includes(searchSplit[0])) {
              newResult.unshift(results[i]);
            } else {
              newResult.push(results[i]);
            }
          }
        } else {
          newResult = results;
        }
        dispatch(updateSearchResults(newResult));
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
