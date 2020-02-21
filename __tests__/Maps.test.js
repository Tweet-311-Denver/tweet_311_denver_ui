import React from 'react';
import renderer from 'react-test-renderer';

import Maps from '../src/components/Maps/Maps';

test('renders Maps correctly', () => {
  const tree = renderer.create(<Maps />).toJSON();
  expect(tree).toMatchSnapshot();
});