import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


(async () => {

  const res = await fetch('https://dog.ceo/api/breeds/image/random/5');

  if(res.ok) {
    const { message } = await res.json();
    ReactDOM.render(
      <React.StrictMode>
        <App urls={message} />
      </React.StrictMode>
      , document.getElementById('root'));

  }
}) ();
