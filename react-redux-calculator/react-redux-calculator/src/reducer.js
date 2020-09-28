
import {
  ADD_ONE,
  SUBTRACT_ONE,
  ADD_NUMBER,
} from './actions';

const calculatorReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;
    case SUBTRACT_ONE:
      return state - 1;
    case ADD_NUMBER:
      debugger;
      return state + action.number;
    default:
      return state;
  }
};

export default calculatorReducer;
