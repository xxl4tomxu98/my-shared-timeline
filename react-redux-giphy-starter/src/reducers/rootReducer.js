import { combineReducers } from 'redux';
import gifsReducer from './gifsReducer'
// TODO: Import the `gifsReducer`

export default combineReducers({
  gifs: gifsReducer,
  // TODO: Set the `gifs` slice of state to the `gifsReducer`
});
