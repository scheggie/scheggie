import * as types from './types';

export const selectItem = (item) => ({
  type: types.SELECT,
  selection: item
});
