import React from 'react';
import renderer from 'react-test-renderer';

import Success from '../src/components/Success/Success';

test('renders Success correctly', () => {
  const tree = renderer.create(<Success />).toJSON();
  expect(tree).toMatchSnapshot();
});
