import React from 'react';


const Farmer = ({ farmer, payFarmer }) => {
  const handleClick = () => payFarmer(farmer.id);

  return (
    <li>
      {farmer.name}
      {farmer.paid === false &&
        <button onClick={handleClick}>PAY</button>
      }
    </li>
  );
};

export default Farmer;
