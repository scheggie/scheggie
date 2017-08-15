const INITIAL_STATE = {
	week: 'week_one',
	days: [
      {day: 'Mon'},
      {day: 'Tues'},
      {day: 'Wed'},
      {day: 'Thu'},
      {day: 'Fri'},
      {day: 'Sat'},
      {day: 'Sun'}
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default reducer;
