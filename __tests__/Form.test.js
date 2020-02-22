import React from 'react';
import renderer from 'react-test-renderer';

import Form from '../src/components/Form/Form';

describe('Form', () => {

  test('renders Form correctly', () => {
    const mockLocation = { location: {
        lat: '1233',
        long: '-24324'
      }
    } 
    const tree = renderer.create(<Form location={mockLocation}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
