const {
  ADD_ONE,
  SUBTRACT_ONE,
  ADD_NUMBER,
} = require('./actions');

const calculatorReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;
    case SUBTRACT_ONE:
      return state - 1;
    case ADD_NUMBER:
      return state + action.number;
    default:
      return state;
  }
};

module.exports = {
  calculatorReducer
};
