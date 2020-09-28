import React from 'react';
import RandomQuote from './RandomQuote';




function App(props) {
  return (
    <React.StrictMode>
      <RandomQuote quotes={props.quotes}/>
    </React.StrictMode>
  );
}

export default App;
