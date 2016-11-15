import { INCREMENT_COUNTER } from '../actions';

const initialState =  {
    count: 0
};

function incrementCount(state, action) {
  return parseInt(state.count) + parseInt(action.increment);
}

export default function example_reducer(state = initialState, action) {

  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state, count: state.count+ 1
      };
    // More cases go here
    default:
      return state;
  }
}
