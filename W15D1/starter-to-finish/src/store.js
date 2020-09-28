import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from './localStorage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const preloadedState = loadState();
const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
  saveState(store.getState());
});

// const preloadedState = {
//   fruit: [
//     'APPLE',
//     'ORANGE',
//   ],
//   farmers: {
//     1: {
//       id: 1,
//       name: 'John Smith',
//       paid: false,
//     },
//     2: {
//       id: 2,
//       name: 'Sally Jones',
//       paid: false,
//     },
//   }
// };

// const store = createStore(rootReducer, preloadedState);

// store.subscribe(() => {
//   saveState(store.getState());
// });



export default store;
