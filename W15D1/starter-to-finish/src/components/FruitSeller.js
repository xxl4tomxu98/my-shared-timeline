import React from 'react';

const FruitSeller = ({ distinctFruit, sell, sellAll }) => {

  if (distinctFruit.length === 0) {
    return null;
  }

  const sellFruitClick = (event) => sell(event.target.innerText);

  return (
    <div>
      <h3>Sell</h3>
      {distinctFruit.map((fruitName, index) => (
        <button key={index} onClick={sellFruitClick}>{fruitName}</button>
      ))}
      <button onClick={sellAll}>SELL OUT</button>
    </div>
  );
}


export default FruitSeller;
