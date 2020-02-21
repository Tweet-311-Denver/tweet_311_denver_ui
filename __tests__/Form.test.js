import React from 'react';
import renderer from 'react-test-renderer';

import Form from '../src/components/Form/Form';

test('renders Form correctly', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});