import React from 'react';
import renderer from 'react-test-renderer';

import Tweet from '../src/components/Tweet/Tweet';

test('renders success correctly', () => {
  const tree = renderer.create(<Tweet />).toJSON();
  expect(tree).toMatchSnapshot();
});
