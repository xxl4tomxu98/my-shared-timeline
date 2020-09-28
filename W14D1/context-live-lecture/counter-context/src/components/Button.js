import React from 'react';
import CounterContext from '../context/CounterContext';

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.updateCount();
  };

  return (
    <button onClick={handleClick}>
      Increase counter
    </button>
  );
};

const ButtonWithContext = () => {
  return (
    <CounterContext.Consumer>
      {(value) => <Button updateCount={value.updateCount} />}
    </CounterContext.Consumer>
  );
};

export default ButtonWithContext;
