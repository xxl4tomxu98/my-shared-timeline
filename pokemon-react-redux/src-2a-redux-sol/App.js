import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginPanel from './components/LoginPanel';
import PokemonBrowser from './components/PokemonBrowser';
import { loadToken } from './actions/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const needLogin = useSelector(state => !state.authentication.token);

  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPanel} />
        <PrivateRoute path="/"
          exact={true}
          needLogin={needLogin}
          component={PokemonBrowser} />
        <PrivateRoute path="/pokemon/:pokemonId"
          exact={true}
          needLogin={needLogin}
          component={PokemonBrowser} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
