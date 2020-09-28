import React from 'react';
import { StaticRouter } from 'react-router';
import { shallow } from 'enzyme'

import { findElementInTree } from '../shallowDomUtils';
import Introduction from '../Introduction';
import ProductsContext from '../ProductsContext';

jest.doMock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Switch: jest.requireActual('react-router-dom').Switch,
  Route: jest.requireActual('react-router-dom').Route,
}));

import App from '../App';

test ('(10 points) App should route "/" to Introduction component', () => {
  const context = {
    products: [
      { id: 1, name: 'Whammo!', description: 'It will knock your socks off!' },
      { id: 2, name: 'Blammo!', description: 'Ouch! Watch out for Blammo!' },
      { id: 3, name: 'Spammo!', description: 'Send lots of email to unexpecting people!' },
    ],
  };

  const memoryRouter = shallow(
    <StaticRouter path="/foo/bar">
      <ProductsContext.Provider value={context}>
        <App />
      </ProductsContext.Provider>
    </StaticRouter>
  );
  const route = findElementInTree('Route', memoryRouter);

  const introConsumer = route.dive();
  const introProvider = introConsumer.dive();

  expect(route.prop('exact')).toEqual(true);
  expect(route.prop('path')).toEqual('/');
  expect(introProvider.find(Introduction)).toHaveLength(1);
});
