import _ from 'lodash';

import * as plannerActions from './planner';
import * as searchActions from './search';
import * as selectionActions from './selection';
import * as authActions from './auth';

const actions = _.extend(
  {},
  plannerActions,
  searchActions,
  selectionActions,
  authActions,
);

console.log(plannerActions);
console.log(actions);

export default actions;
