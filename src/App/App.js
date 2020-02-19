import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from '../components/Form/Form.js';
import Tweet from '../components/Tweet/Tweet';
import Success from '../components/Success/Success';

const Stack = createStackNavigator();

class App extends Component {
  state = {
      description: ''
    }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen name="Home" component={Form} />
          <Stack.Screen name="Tweet" component={Tweet} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default registerRootComponent(App);
