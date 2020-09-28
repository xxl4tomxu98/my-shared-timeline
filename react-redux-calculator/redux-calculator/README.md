# Redux Calculator Lecture

Today we'll be creating a calculator with Redux! Imagine having a Node app where
you are directly working with a component's state, but without the JSX that
creates the UI for user interactions to update state. We'll use a Redux store to
keep track of our calculator's `state` and `dispatch actions` to make changes to
the `state`.

## Phase 1: Set up Redux store with createStore

Think of how `createContext` sets up the global state storage when you use
Context - with Redux, you'll use the [createStore] function to create the Redux
store. According to the Redux `createStore` documentation, you'll see that the
function takes in a required `reducer` as an argument. Let's go ahead and define
the `reducer` for our Redux store.

**store.js**

```js
const { createStore } = require('redux');
const { calculatorReducer } = require('./reducer');

const store = createStore(calculatorReducer);

module.exports = {
  store,
};
```

## Phase 2: Create a reducer

You can create a reducer with a [switch statement] to manage the Redux store.
You can think of reducers as a way to `route` your dispatched actions. Can
someone give me their quick summary definition of that they think a `dispatched
action` is?

Each switch case outlines a specific `action` type. So whenever the
`calculatorReducer` function gets an action POJO like `{ type: 'ADD_ONE' }`,
then the updated `state` will be the original `state` plus one.

For now, we'll have actions to:
- Add one
- Subtract one
- Reset the calculator
- Add a specific number

**reducer.js**

```js
const calculatorReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'SUBTRACT_ONE':
      return state - 1;
    case 'ADD_NUMBER':
      return state + action.number;
    default:
      return state;
  }
};

module.exports = {
  calculatorReducer
};
```

## Phase 3: Define action creator functions

Now it's time to define the actual action POJOs! By convention, you use constant
variables instead of string literals to set action types. Remember how we used
strings in the reducer for each switch case - that's error prone for typos that
are hard to catch. If we use constants, we'll get typo errors!

**actions.js**

```js
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
```

Let's change the `action type` strings in our reducer's switch statement to the
constants we just defined so that we can catch typos:

**reducer.js**

```js
const {
  ADD_ONE,
  SUBTRACT_ONE,
  ADD_NUMBER,
} = require('./actions');
```

## Phase 4: Testing

Now we can test our Redux `store` by dispatching some `actions`! We'll start by
importing our store and actions:

**app.js**

```js
const { store } = require('./store');
const {
  addOne,
  subtractOne,
  addNumber,
} = require('./actions');
```

Now we can use the `store.getState()` method to see what the default state of
our calculator:

```js
console.log('Default Redux Store: ', store.getState());
// Default Redux Store State: 0
```

Now let's dispatch some actions to `addOne` to our calculator state:

```js
store.dispatch(addOne());
store.dispatch(addOne());
store.dispatch(addOne());
console.log('Updated state after adding: ', store.getState());
// Updated state after adding:  3
```

Now let's dispatch some actions to `subtractOne` from our calculator state:

```js
store.dispatch(subtractOne());
store.dispatch(subtractOne());
console.log('Updated state after subtracting: ', store.getState());
// Updated state after subtracting:  1
```

Now let's test the action to add a specific number to the calculator state:

```js
store.dispatch(addNumber(100));
console.log('Updated state after adding number: ', store.getState());
// Updated state after adding number:  101
```

[createStore]: https://redux.js.org/api/createstore [switch statement]:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
