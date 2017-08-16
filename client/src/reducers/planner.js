import * as types from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
	selectedWeek: 'week_one',
  week_one: _.map(_.range(7), ()=>({})),
  week_two: _.map(_.range(7), ()=>({}))
};

const reducer = (state = INITIAL_STATE, action) => {
	return state;
}

export default reducer;
