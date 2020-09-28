import React from 'react';
import { shallow } from 'enzyme'

import { findElementInTree } from '../shallowDomUtils';
import ProductsContext from '../ProductsContext';
import AddProductLink from '../AddProductLink';
import ProductsList from '../ProductsList';

test ('(5 points) ProductsList renders AddProductLink component as first non-root element', () => {
  const context = {
    products: [],
  };

  const appRouter = shallow(
    <ProductsContext.Provider value={context}>
      <ProductsList />
    </ProductsContext.Provider>
  );

  const addProductLink = findElementInTree('AddProductLink', appRouter);
  expect(addProductLink.name()).toEqual('AddProductLink');
});

test ('(5 points) AddProductLink renders a NavLink with "/products/new" path and active class name "is-selected"', () => {
  const addProductLink = shallow(
    <AddProductLink />
  );
  const navLink = findElementInTree('NavLink', addProductLink);
  expect(navLink.prop('to')).toEqual('/products/new');
  expect(navLink.prop('activeClassName')).toEqual('is-selected');
  expect(navLink.text().toLowerCase()).toEqual('new product');
});
