import React from 'react';
import FarmerList from './FarmerList';
import FarmerHire from './FarmerHire';

const FarmerManager = ({ farmers, hireFarmer, payFarmer }) => {
  return (
    <div>
      <h2>Farmer Manager</h2>
      <FarmerList farmers={farmers} payFarmer={payFarmer}/>
      <FarmerHire hireFarmer={hireFarmer} />
    </div>
  );
}


export default FarmerManager;
