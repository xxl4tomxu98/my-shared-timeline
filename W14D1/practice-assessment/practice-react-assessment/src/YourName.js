import React from 'react';
import NameContext from './NameContext';

const YourName = (props) => {
  return (
    <input value={props.name} onChange={props.changeName}>
    </input>
  );
};

const YourNameWithContext = () => {
  return (
    <NameContext.Consumer>
      {(value) => <YourName name={value.name} changeName={value.changeName} />}
    </NameContext.Consumer>
  );
};

export default YourNameWithContext;
