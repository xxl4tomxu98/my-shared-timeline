import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadIP } from "./store/ipAddress";

const App = props => {
  const [loading, setLoading] = useState(false)
  const { ip } = useSelector(state => state.ipAddress)
  const dispatch = useDispatch()

  const getMyIP = () => {
    dispatch(loadIP());
  };

  useEffect(() => {
    setLoading(ip === "");
  }, [ip]);

  return (
    <div>
      <h1>Get My IP</h1>

      {loading
        ? <p>Loading...</p>
        : <p>{ip}</p>
      }
      <button
          onClick={getMyIP}
          disabled={loading}
      >{ip ? 'Again' : 'Go'}</button>
    </div>
  )
};

export default App;
