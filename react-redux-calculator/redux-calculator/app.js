const { store } = require('./store');
const {
  addOne,
  subtractOne,
  addNumber,
} = require('./actions');

console.log('Default Redux Store: ', store.getState());
// Default Redux Store State: 0

store.dispatch(addOne());
store.dispatch(addOne());
store.dispatch(addOne());
console.log('Updated state after adding: ', store.getState());
// Updated state after adding:  3

store.dispatch(subtractOne());
store.dispatch(subtractOne());
console.log('Updated state after subtracting: ', store.getState());
// Updated state after subtracting:  1

store.dispatch(addNumber(100));
console.log('Updated state after adding number: ', store.getState());
// Updated state after adding number:  101
