const ADD_ONE = 'ADD_ONE';
const SUBTRACT_ONE = 'SUBTRACT_ONE';
const ADD_NUMBER = 'ADD_NUMBER';

const addOne = () => {
  return {
    type: ADD_ONE,
  };
};

const subtractOne = () => {
  return {
    type: SUBTRACT_ONE,
  };
};

const addNumber = (number) => {
  return {
    type: ADD_NUMBER,
    number,
  };
};

module.exports = {
  ADD_ONE,
  SUBTRACT_ONE,
  ADD_NUMBER,
  addOne,
  subtractOne,
  addNumber,
};
