import React from '../../pokedex-react-redux-sol/frontend/src/node_modules/react';


const LogoutButton= (props) => {

  const logout = async () => {
    await fetch(`/api/session`, {
      method: 'delete'
    }).then(() => props.updateUser());
  }



  return (
    <div id="logout-button-holder">
      <button onClick={logout}>Logout</button>
    </div>
  );

}

export default LogoutButton;
