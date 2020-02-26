import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from '../components/Form/Form.js';
import Tweet from '../components/Tweet/Tweet';
import Success from '../components/Success/Success';
import Maps from '../components/Maps/Maps';
import Welcome from '../components/Welcome/Welcome';

console.disableYellowBox = true;

const Stack = createStackNavigator();

class App extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      location: {
        lat: '',
        long: ''
      }
    }
  }

  updateDescription = desc => {
    this.setState({description: desc});
  };

  handleLocationChange = (lat, long) => {
    this.setState({
      location: {
        lat,
        long
      }
    });
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home">
            {props => <Form {...props} desc={this.updateDescription} location={this.state.location}/>}
          </Stack.Screen>
          <Stack.Screen name="Location">
            {props => <Maps {...props} setLocation={this.handleLocationChange}
            />}
          </Stack.Screen>
          <Stack.Screen name="Tweet">
            {props => <Tweet
              {...props} desc={this.state.description}
              setDesc={this.updateDescription}
            />}
          </Stack.Screen>
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default registerRootComponent(App);
