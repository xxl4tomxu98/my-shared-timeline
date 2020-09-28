import { HIRE_FARMER, PAY_FARMER } from '../actions/farmersActions';

const farmerReducer = (state, action) => {
  // State is a farmer object.
  switch (action.type) {
    case HIRE_FARMER:
      return {
        id: action.id,
        name: action.name,
        paid: false
      };
    case PAY_FARMER:
      return Object.assign({}, state, {
        paid: !state.paid
      });
    default:
      return state;
  }
};

const farmersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case HIRE_FARMER:
      nextState[action.id] = farmerReducer(undefined, action);
      return nextState;
    case PAY_FARMER:
      nextState[action.id] = farmerReducer(nextState[action.id], action);
      return nextState;
    default:
      return state;
  }
};

export default farmersReducer;
