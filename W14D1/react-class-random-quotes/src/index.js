import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const quotes = [
  'Toto, I\'ve a feeling we\'re not in Kansas anymore.',
  'Here\'s looking at you, kid.',
  'There\'s no crying in baseball!',
  'Elementary, my dear Watson.',
  'Rosebud.',
];

ReactDOM.render(
  <React.StrictMode>
    <App quotes={quotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);
