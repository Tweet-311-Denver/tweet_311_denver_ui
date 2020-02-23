import React from 'react';
import renderer from 'react-test-renderer';

import Form from '../src/components/Form/Form';

describe('Form', () => {
  let wrapper;
  const mockLocation = { location: {
      lat: '1233',
      long: '-24324'
    }
  };

  test('renders Form correctly', () => {
    const tree = renderer.create(<Form location={mockLocation}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handleChange', () => {

    test('handleChange should update the email in state', () => {
      const mockLocation = { location: {
          lat: '1233',
          long: '-24324'
        }
      };
      const instance = renderer.create(<Form location={mockLocation}/>).getInstance();
      instance.handleChange('email@g.gg', 'email');
      expect(instance.state.email).toEqual('email@g.gg');
    });

    test('handleChange should update the description in state', () => {
      const mockLocation = { location: {
          lat: '1233',
          long: '-24324'
        }
      };
      const instance = renderer.create(<Form location={mockLocation}/>).getInstance();
      instance.handleChange('description text', 'description');
      expect(instance.state.description).toEqual('description text');
    });

  });

  describe('handleSubmit', () => {

    test('handleSubmit should update the error message in state if the fields are not filled out', () => {
      const instance = renderer.create(<Form location={mockLocation}/>).getInstance();
      instance.handleSubmit();
      expect(instance.state.error).toEqual('Please add a valid email, description, and location.');
    });

  });

});
