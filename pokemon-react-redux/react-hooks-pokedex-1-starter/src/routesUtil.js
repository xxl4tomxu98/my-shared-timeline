import React from '../../pokedex-react-redux-sol/frontend/src/node_modules/react';
import { Route, Redirect } from '../../pokedex-react-redux-sol/frontend/src/node_modules/react-router-dom';

export const PrivateRoute = ({
  component: Component,
  needLogin,
  cProps,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      needLogin === true ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} {...cProps} />
      )
    }
  />
);
