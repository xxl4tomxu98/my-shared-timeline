import React from 'react';
import CounterContext from './context/CounterContext';
import Child from './components/Child';

class App extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <div id="app">
        <h2>Counter: {this.context.count}</h2>
        <Child />
      </div>
    );
  }
}

export default App;