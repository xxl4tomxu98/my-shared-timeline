import React from 'react';
import { StaticRouter, withRouter } from 'react-router';
import { shallow } from 'enzyme'

import { findElementInTree } from '../shallowDomUtils';
import ProductsContext from '../ProductsContext';
import NotFound from '../NotFound';

jest.mock('react-router-dom', () => {
  const rrd = jest.requireActual('react-router-dom');
  rrd.BrowserRouter = ({ children }) => <div>{children}</div>;
  return rrd;
});

import App from '../App';

test ('(5 points) App should route "*" to NotFound component', () => {
  const context = {
    products: [],
  };

  const appRouter = shallow(
    <StaticRouter location={{pathname: '/unknown/route'}}>
      <ProductsContext.Provider value={context}>
        <App />
      </ProductsContext.Provider>
    </StaticRouter>
  );

  const route = findElementInTree('Route', appRouter);
  expect(route.prop('exact')).toBeFalsy();
  expect(route.prop('path')).toEqual('*')
});

test ('(5 points) NotFound should render an h1 with the not-found message', () => {
  const context = {
    products: [],
  };

  const notFound = shallow(
    <NotFound />
  );
  const h1 = findElementInTree('h1', notFound);
  expect(h1.text()).toEqual('Page not found');
});
