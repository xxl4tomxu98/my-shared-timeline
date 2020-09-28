const { createStore } = require('redux');
const { calculatorReducer } = require('./reducer');

const store = createStore(calculatorReducer);

module.exports = {
  store,
};
