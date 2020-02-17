import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      description: '',
      loaction: '',
      photo: ''
    }
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text>This is the form</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;
