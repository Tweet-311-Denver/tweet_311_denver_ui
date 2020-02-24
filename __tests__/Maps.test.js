import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import MockMapView from 'react-native-maps';
import { Image } from 'react-native';

import Maps from '../src/components/Maps/Maps';

jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = (props : any) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props : any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

describe('Maps', () => {
  const mockEvent = {
    nativeEvent: {
      coordinate: '311'
    }
  };
  const styles = {
    img: ''
  };

  test('renders Maps correctly', () => {
    const tree = renderer.create(<Maps />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('handlePress adds the marker to state', () => {
    const instance = renderer.create(<Maps />).getInstance();
    instance.handlePress(mockEvent);
    expect(instance.state.markers[0].coordinate).toEqual('311');
  });

});
