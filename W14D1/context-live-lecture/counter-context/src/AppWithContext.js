import React from 'react';
import CounterContext from './context/CounterContext';
import App from './App';

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      updateCount: this.updateCount,
    };
  }

  updateCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <App />
      </CounterContext.Provider>
    );
  }
}

export default AppWithContext;