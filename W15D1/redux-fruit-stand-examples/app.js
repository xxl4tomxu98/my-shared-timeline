const { createStore } = require('redux');
const ADD_FRUIT = 'ADD_FRUIT';
const ADD_FRUITS = 'ADD_FRUITS';
const SELL_FRUIT = 'SELL_FRUIT';
const SELL_OUT = 'SELL_OUT';
// Define the store's reducer.
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FRUIT:
      return [...state, action.fruit];
    case ADD_FRUITS:
      return [...state, ...action.fruits];
    case SELL_FRUIT:
      const index = state.indexOf(action.fruit);
      if (index !== -1) {
        // remove first instance of action.fruit
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state; // if action.fruit is not in state, return previous state
    case SELL_OUT:
      return [];
    default:
      return state;
  }
};

// Create the store.
const store = createStore(fruitReducer);

// Define an 'ADD_FRUIT' action for adding an orange to the store.
const addOrange = {
  type: 'ADD_FRUIT',
  fruit: 'orange',
};



// Log to the console the store's state before and after
// dispatching the 'ADD_FRUIT' action.
console.log(store.getState()); // []
store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]


const addFruit = (fruit) => {
  return {
    type: 'ADD_FRUIT',
    fruit,
  };
};

const sellFruit = (fruit) => {
  return {
    type: 'SELL_FRUIT',
    fruit,
  };
};

// Define and register a callback to listen for store updates
// and console log the store's state.
const display = () => {
  console.log(store.getState());
};
const unsubscribeDisplay = store.subscribe(display);

// Dispatch the 'ADD_FRUIT' action. This time the `display` callback
// will be called by the store when its state is updated.
store.dispatch(addOrange); // [ 'orange', 'orange' ]
store.dispatch(addFruit('apple'));
store.dispatch(addFruit('strawberry'));
store.dispatch(addFruit('lychee'));
store.dispatch(sellFruit("orange"));

// Unsubscribe the `display` callback to stop listening for store updates.
unsubscribeDisplay();

// Dispatch the 'ADD_FRUIT' action one more time
// to confirm that the `display` method won't be called
// when the store state is updated.
store.dispatch(addOrange); // no output
