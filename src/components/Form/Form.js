import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';

class Form extends Component {
  state = {
      email: '',
      description: '',
      isSnowRemoval: false,
      loaction: '',
      photo: ''
    }

  validateSubmit = () => {
    const { description } = this.state;
    return this.validateEmail() && description ? true : false;
  }

  validateEmail = () => {
    return /\S+@\S+\.\S+/.test(this.state.email);
  }

  handleSubmit = () => {
    console.log(this.validateSubmit());
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>
            Tweet<Text style={styles.h1Color}>311</Text>Denver
          </Text>
          <Text style={styles.label}>Enter Email:</Text>
          <TextInput style={styles.smallInput} value={this.state.email} onChangeText={text => this.setState({email: text})}/>
          <View style={styles.smallWrapper}>
            <Switch style={styles.CheckBox} value={this.state.isSnowRemoval} onValueChange={value => this.setState({isSnowRemoval: value})}/>
            <Text style={styles.iconLabel}>Snow Removal?</Text>
          </View>
          <Text style={styles.label}>Description:</Text>
          <TextInput multiline={true} style={styles.largeInput} value={this.state.description} onChangeText={text => this.setState({description: text})}/>
          <View style={styles.smallWrapper}>
            <Image style={styles.icon} source={require('../../../assets/images/placeholder.png')}/>
            <Text style={styles.iconLabel}>Add Location</Text>
          </View>
          <View style={styles.smallWrapper}>
            <Image style={styles.icon} source={require('../../../assets/images/photo.png')}/>
            <Text style={styles.iconLabel}>Add Photo</Text>
          </View>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonLabel} onPress={() => this.handleSubmit()}>Submit</Text></TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  },
  smallWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 0,
    flexDirection: 'row',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    width: '80%'
  },
  icon: {
    height: 50,
    marginRight: 15,
    width: 50
  },
  iconLabel: {
    color: '#3976EA',
    fontSize: 25
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    width: '40%'
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 20
  },
  CheckBox: {
    height: 50,
    marginRight: 15,
    width: 50
  }
});

export default Form;
