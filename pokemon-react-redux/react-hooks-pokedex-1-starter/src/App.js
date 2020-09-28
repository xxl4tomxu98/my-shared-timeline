import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginPanel from './LoginPanel';
import PokemonBrowser from './PokemonBrowser';
import { PrivateRoute } from './routesUtil';

const App = props => {

  const authToken = Cookies.get("token");
  let userId;
  if (authToken) {
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      userId = data.id;
    } catch (e) {
      Cookies.remove("token");
    }
  }

  //set hook for initial states
  const [loaded, setLoaded] =useState( false );
  const [currentUserId, setCurrentUserId] =useState( userId );
  const [needLogin, setNeedLogin] =useState(!currentUserId);
  const [pokemon, setPokemon] = useState([]);




  const handleCreated = (newPokemon) => {
    setPokemon( [...pokemon, newPokemon] );
  }



  useEffect(() => {
    const loadAllPokemon = async () =>{
      const response = await fetch(`/api/pokemon`);
      if (response.ok) {
        const pokemon = await response.json();
        setPokemon( pokemon );
        setNeedLogin(false);
      } else {
        setNeedLogin( true );
      };
      setLoaded( true );
    }
    loadAllPokemon();
  }, [currentUserId]);


  const updateUser = (id) => {
    if(id){
      setCurrentUserId( id );
      setNeedLogin( false );
    } else {
      setCurrentUserId( null );
      setNeedLogin( true );
    }
  }


  if (!loaded) {
    return null;
  }
  const cProps = {
    pokemon,
    handleCreated,
    currentUserId,
    updateUser
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"
          render={props => <LoginPanel {...props} updateUser={updateUser} currentUserId={currentUserId} />} />
        <PrivateRoute path="/"
                      exact={true}
                      needLogin={needLogin}
                      component={PokemonBrowser}
                      cProps={cProps} />
        <PrivateRoute path="/pokemon/:pokemonId"
                      exact={true}
                      needLogin={needLogin}
                      component={PokemonBrowser}
                      cProps={cProps} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
