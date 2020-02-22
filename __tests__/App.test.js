import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App/App';

test('renders App correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});