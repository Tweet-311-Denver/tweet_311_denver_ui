import React from 'react';
import renderer from 'react-test-renderer';

import Welcome from '../src/components/Welcome/Welcome';

test('renders Success correctly', () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchSnapshot();
});
