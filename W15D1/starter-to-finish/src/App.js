import React from 'react';
import FarmerManagerContainer from './components/FarmerManagerContainer';
import FruitManagerContainer from './components/FruitManagerContainer';

function App() {
  return (
    <>
      <h1>Fruit Stand</h1>
      <FruitManagerContainer />
      <FarmerManagerContainer />
    </>
  );
}

export default App;
