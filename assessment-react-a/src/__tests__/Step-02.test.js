import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import AppWithContext from '../AppWithContext';
import ProductsContext from '../ProductsContext';

jest.mock('react-dom');

expect.extend({
  toHaveBeenCalledWithAppWithContext(received) {
    const calls = received.mock.calls;
    const [symbol, _] = calls[0];
    const child = symbol.props.children;

    if (child.type.name === 'AppWithContext') {
      return {
        message: () => "Received <React.StrictMode><AppWithContext /></React.StrictMode>",
        pass: true,
      }
    } else {
      return {
        message: () => "Expected you to use AppWithContext in index.js",
        pass: false,
      }
    }
  }
});

test ('(4 points) AppWithContext has ProductsContext producer with correct initial state', () => {
  const expectedContextValue = {
    products: [
      { id: 1, name: 'Whammo!', description: 'It will knock your socks off!' },
      { id: 2, name: 'Blammo!', description: 'Ouch! Watch out for Blammo!' },
      { id: 3, name: 'Spammo!', description: 'Send lots of email to unexpecting people!' },
    ],
  };

  const wrapper = shallow(<AppWithContext />);
  const propsValue = wrapper.props().value;
  const products = propsValue.products;
  expect(products).toEqual(expectedContextValue.products);
});


test ('(3 points) AppWithContext renders the App component', () => {
  const wrapper = shallow(<AppWithContext />);
  expect(wrapper.find(ProductsContext.Provider)).toHaveLength(1);
});


test ('(3 points) AppWithContext is used in index.js', () => {
  require('../index');
  expect(ReactDOM.render).toHaveBeenCalledWithAppWithContext();
});
