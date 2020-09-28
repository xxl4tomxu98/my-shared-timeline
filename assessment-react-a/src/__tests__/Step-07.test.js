import React from 'react';
import { StaticRouter, withRouter } from 'react-router';
import { shallow } from 'enzyme'

import { findElementInTree } from '../shallowDomUtils';
import ProductsContext from '../ProductsContext';
import ProductDetail from '../ProductDetail';

jest.mock('react-router-dom', () => {
  const rrd = jest.requireActual('react-router-dom');
  rrd.BrowserRouter = ({ children }) => <div>{children}</div>;
  return rrd;
});

import App from '../App';

test ('(5 points) App should route "/products/:productId" to ProductDetail component', () => {
  const context = {
    products: [
      { id: 1, name: 'Whammo!', description: 'It will knock your socks off!' },
      { id: 2, name: 'Blammo!', description: 'Ouch! Watch out for Blammo!' },
      { id: 3, name: 'Spammo!', description: 'Send lots of email to unexpecting people!' },
    ],
  };

  const appRouter = shallow(
    <StaticRouter location={{pathname: '/products/1'}}>
      <ProductsContext.Provider value={context}>
        <App />
      </ProductsContext.Provider>
    </StaticRouter>
  );

  const route = findElementInTree('Route', appRouter);
  expect(route.prop('exact')).toEqual(true);
  expect(route.prop('path')).toEqual('/products/:productId')
});

test ('(5 points) ProductDetail should render product details indicated in the path', () => {
  const context = {
    products: [
      { id: 1, name: 'Whammo!', description: 'It will knock your socks off!' },
      { id: 2, name: 'Blammo!', description: 'Ouch! Watch out for Blammo!' },
      { id: 3, name: 'Spammo!', description: 'Send lots of email to unexpecting people!' },
    ],
  };
  const id = Math.floor(Math.random() * 3) + 1;
  const expected = context.products[id - 1];

  const ProductDetailWithRouter = withRouter(ProductDetail);

  const memoryRouter = shallow(
    <ProductsContext.Provider value={context}>
      <ProductDetailWithRouter.WrappedComponent match={{params: { productId: id.toString() }}} />
    </ProductsContext.Provider>
  );
  const h1 = findElementInTree('h1', memoryRouter);
  expect(h1.text()).toEqual(expected.name);

  const p = findElementInTree('p', memoryRouter);
  expect(p.text()).toEqual(expected.description);
});
