import { createStore, combineReducers } from 'redux';
import ipAddress from './ipAddress';

const reducer = combineReducers({
  ipAddress,
});

const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
  );
};

export default configureStore;
