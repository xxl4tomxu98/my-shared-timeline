import React from 'react';
import { shallow } from 'enzyme'

import { findElementInTree } from '../shallowDomUtils';
import App from '../App';
import ProductsList from '../ProductsList';

test ('(7 points) ProductsList renders a div and a ProductsContext consumer', () => {
  const div = shallow(
    <ProductsList />
  );

  const consumer = findElementInTree('ContextConsumer', div);
  expect(div.prop('className')).toEqual('products-list');
  expect(consumer.name().toLowerCase()).toContain('consumer');
});

test ('(3 points) ProductsList is used by the App component', () => {
  const div = shallow(
    <ProductsList />
  );

  const consumer = findElementInTree('ContextConsumer', div);
  const appWrapper = shallow(<App />);
  expect(appWrapper.find(ProductsList)).toHaveLength(1);
});
