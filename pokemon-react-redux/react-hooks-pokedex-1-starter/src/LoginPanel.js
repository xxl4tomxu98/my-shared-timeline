import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LoginPanel= props =>  {

  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/session`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const { player } = await response.json();
      props.updateUser(player.id);
    }
  };


  const updateEmail = email => e => {
    setEmail( e.target.value );
  }

  const updatePassword = password => e => {
    setPassword( e.target.value );
  }


  const { currentUserId } = props;

  if (currentUserId) {
    return <Redirect to="/" />;
  }
  return (
    <main className="centered middled">
      <form onSubmit={handleSubmit}>
        <input type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail} />
        <input type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default LoginPanel;
