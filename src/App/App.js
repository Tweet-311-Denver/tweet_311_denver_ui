import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tweet } from '../components/Tweet/Tweet';
import { Success } from '../components/Success/Success';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Form from '../components/Form/Form.js';

const Stack = createStackNavigator();

class App extends Component {
  state = {
      description: ''
    }

  updateDescription = desc => {
    this.setState({description: desc});
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Form">
            {props => <Form {...props} desc={this.updateDescription}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default registerRootComponent(App);
