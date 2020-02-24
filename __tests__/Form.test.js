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
  const mockNavigation = {
    navigate: jest.fn()
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

    test('handleSubmit should rest the state if the fields are filled in', async () => {
      const instance = renderer.create(<Form location={mockLocation} desc={jest.fn()} navigation={mockNavigation}/>).getInstance();
      instance.handleChange('email@g.gg', 'email');
      instance.handleChange('description text', 'description');
      instance.validateSubmit = jest.fn().mockImplementation(() => true);
      instance.handleSubmit();
      expect(instance.state).toEqual({
          email: '',
          description: '',
          isSnowRemoval: false,
          photo: '',
          error: ''
      });
    });

  });

});
