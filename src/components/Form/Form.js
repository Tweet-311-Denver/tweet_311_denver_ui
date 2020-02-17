import React, { Component } from 'react';
import { View, StyleSheet, Text, Header, TextInput } from 'react-native';

class Form extends Component {
  state = {
      category: '',
      description: '',
      loaction: '',
      photo: ''
    }

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.h1}>
          Tweet<Text style={styles.h1Color}>311</Text>Denver
        </Text>
        <Text style={styles.label}>Select Category:</Text>
        <TextInput style={styles.smallInput}/>
        <Text style={styles.label}>Description:</Text>
        <TextInput multiline={true} numberoflines={4} style={styles.largeInput}/>
        <View style={styles.smallWrapper}>
        </View>
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
    textAlign: 'center'
  },
  h1: {
    color: '#3976EA',
    fontSize: 45,
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  h1Color: {
    color: '#000000'
  },
  smallInput: {
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 30,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    width: '80%'
  },
  largeInput: {
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 30,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    width: '80%'
  },
  label: {
    color: '#3976EA',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: '10%',
    marginTop: 40
  }
});

export default Form;
