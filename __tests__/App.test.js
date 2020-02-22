import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App/App';

test('renders Maps correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});