import React from 'react';
import store from './store';
import { addOne, subtractOne, addNumber } from './actions';

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <h1>Result: {store.getState()}</h1>
        <br />
        <button onClick={() => store.dispatch(addOne())}>+1</button>
        <button onClick={() => store.dispatch(subtractOne())}>-1</button>
        <button onClick={() => store.dispatch(addNumber(100))}>+100</button>
      </div>
    );
  }
}

export default App;
