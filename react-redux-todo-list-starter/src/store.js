import { createStore } from 'redux';
import tasksReducer from './reducers/tasksReducer';
import { loadState, saveState } from './localStorage';

// TODO: Access the `preloadedState` by loading the state from local storage
const preloadedState = loadState();
// TODO: Use Redux's `createStore` function to generate the Redux store
const store = createStore(tasksReducer, preloadedState);
//       with the `tasksReducer` and the `preloadedState`

// TODO: Subscribe to store changes and save the state upon each change
store.subscribe(()=> {
  saveState(store.getState());
  console.log(store.getState());
})


export { store };
