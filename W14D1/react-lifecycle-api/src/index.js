import React from 'react';
import ReactDOM from 'react-dom';
import FetchingData from './FetchingData';

ReactDOM.render(
  <React.StrictMode>
    <FetchingData gitHubUsername='appacademy' />
  </React.StrictMode>,
  document.getElementById('root')
);
