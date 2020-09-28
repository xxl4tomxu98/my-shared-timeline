import React from 'react';

import Farmer from './Farmer';

const FarmerList = ({ farmers, payFarmer }) => {

  const farmersList = Object.values(farmers);

  return (
    <div>
      <h2>Farmers</h2>
      {farmersList.length > 0
        ? <ul>{farmersList.map((farmer) => <Farmer key={farmer.id} farmer={farmer} payFarmer={payFarmer} />)}</ul>
        : <span>No farmers currently available!</span>
      }
    </div>
  );

}

export default FarmerList;
