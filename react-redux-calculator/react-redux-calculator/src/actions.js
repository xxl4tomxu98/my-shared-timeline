
export const ADD_ONE = 'ADD_ONE';
export const SUBTRACT_ONE = 'SUBTRACT_ONE';
export const ADD_NUMBER = 'ADD_NUMBER';

export const addOne = () => {
  return {
    type: ADD_ONE,
  };
};

export const subtractOne = () => {
  return {
    type: SUBTRACT_ONE,
  };
};

export const addNumber = (number) => {
  const newAction = {
    type: ADD_NUMBER,
    number,
  };

  debugger;
  return newAction;
};
