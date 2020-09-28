import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'

import App from '../App';

test ('(10 points) App should have a BrowserRouter inside a main', () => {
  const wrapper = shallow(<App />);

  const mainWrapper = wrapper.find('main');
  expect(mainWrapper).toHaveLength(1);

  expect(mainWrapper.find(BrowserRouter)).toHaveLength(1);
});
