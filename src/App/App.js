import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from '../components/Form/Form.js';
import Tweet from '../components/Tweet/Tweet';
import Success from '../components/Success/Success';
import Maps from '../components/Maps/Maps';

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
          headerShown: true
        }}>
          <Stack.Screen name="Home">
            {props => <Form {...props} desc={this.updateDescription}/>}
          </Stack.Screen>
          <Stack.Screen name="Location" component={Maps} />
          <Stack.Screen name="Tweet" component={Tweet} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default registerRootComponent(App);
