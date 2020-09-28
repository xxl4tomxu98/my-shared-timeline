import React, { useEffect, useState } from 'react';

const App = props => {
  const [ip, setIP] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMyIP = () => {
    setIP('(coming soon)');
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
  );
};

export default App;
