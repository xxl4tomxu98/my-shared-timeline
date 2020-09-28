import React from 'react';
import { shallow } from 'enzyme'
import { StaticRouter } from 'react-router';

import { findElementInTree } from '../shallowDomUtils';
import ProductsContext from '../ProductsContext';
import NewProductForm from '../NewProductForm';
import AppWithContext from '../AppWithContext';

jest.mock('react-router-dom', () => {
  const rrd = jest.requireActual('react-router-dom');
  rrd.BrowserRouter = ({ children }) => <div>{children}</div>;
  return rrd;
});

import App from '../App';

test('(3 points) NewProductForm renders a form with elements and event handlers', () => {

  const context = {
    products: [],
    updateNewProductName: jest.fn(),
    updateNewProductDescription: jest.fn(),
    addProduct: jest.fn(),
  };

  const productsList = shallow(
    <ProductsContext.Provider value={context}>
      <NewProductForm />
    </ProductsContext.Provider>
  );

  const form = findElementInTree('form', productsList);
  form.simulate('submit');
  expect(context.addProduct).toHaveBeenCalled();

  const input = findElementInTree('input', productsList);
  expect(input.prop('type')).toEqual('text');
  expect(input.prop('placeholder')).toEqual('Name');
  input.simulate('change');
  expect(context.updateNewProductName).toHaveBeenCalled();

  const textarea = findElementInTree('textarea', productsList);
  expect(textarea.prop('placeholder')).toEqual('Description');
  textarea.simulate('change');
  expect(context.updateNewProductDescription).toHaveBeenCalled();
});

test('(5 points) App component renders NewProductForm for route "/products/new"', () => {
  const context = {
    products: [],
  };

  const appRouter = shallow(
    <StaticRouter location={{pathname: '/products/new'}}>
      <ProductsContext.Provider value={context}>
        <App />
      </ProductsContext.Provider>
    </StaticRouter>
  );

  const route = findElementInTree('Route', appRouter);
  expect(route.prop('exact')).toEqual(true);
  expect(route.prop('path')).toEqual('/products/new')
  expect(route.prop('component')).toEqual(NewProductForm)
});

test('(2 points) AppWithContext provides state updating methods', () => {
  const appWithContext = shallow(<AppWithContext />);

  appWithContext.state().updateNewProductName({ target: { value: 'new name' }});
  expect(appWithContext.state().newProduct.name).toEqual('new name');

  appWithContext.state().updateNewProductDescription({ target: { value: 'new description' }});
  expect(appWithContext.state().newProduct.description).toEqual('new description');

  appWithContext.state().addProduct({ preventDefault: () => {} });
  expect(appWithContext.state().products).toHaveLength(4);
  expect(appWithContext.state().newProduct).toEqual({});
});
