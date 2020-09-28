import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {
  addOne,
  subtractOne,
  addNumber,
} from './actions';

window.store = store;

window.addOne = addOne;
window.subtractOne = subtractOne;
window.addNumber = addNumber;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
