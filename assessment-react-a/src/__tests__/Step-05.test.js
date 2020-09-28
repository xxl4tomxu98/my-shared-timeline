import React from 'react';
import { NavLink, StaticRouter as MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme'

import App from '../App';
import ProductsContext from '../ProductsContext';
import ProductsList from '../ProductsList';
import { findElementsInTree } from '../shallowDomUtils';

test ('(8 points) ProductsList renders products in context', () => {
  const context = {
    products: [
      { id: 1, name: 'Whammo!', description: 'It will knock your socks off!' },
      { id: 2, name: 'Blammo!', description: 'Ouch! Watch out for Blammo!' },
      { id: 3, name: 'Spammo!', description: 'Send lots of email to unexpecting people!' },
    ],
  };

  const router = shallow(
    <MemoryRouter initialEntries={["/products/1"]}>
      <ProductsContext.Provider value={context}>
        <ProductsList />
      </ProductsContext.Provider>
    </MemoryRouter>
  );

  const navLinks = findElementsInTree('NavLink', router);
  expect(navLinks.length).toBeGreaterThanOrEqual(3);
  let expectedIds = [null, 1, 2, 3];
  let i = 1;
  if (navLinks.length === 3) {
    expectedIds.shift();
    i = 0;
  }
  for (; i < navLinks.length; i += 1) {
    const link = navLinks[i];
    expect(link.prop('activeClassName')).toEqual('is-selected');
    expect(link.prop('to')).toEqual(`/products/${expectedIds[i]}`);
  }
});


test ('(2 points) ProductsList is used by the App component', () => {
  const appWrapper = shallow(<App />);
  expect(appWrapper.find(ProductsList)).toHaveLength(1);
});
