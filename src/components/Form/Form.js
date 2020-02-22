import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        description: '',
        isSnowRemoval: false,
        loaction: '',
        photo: '',
        error: ''
    }
  };

  componentDidMount = () => {
    this.getPermissions();
  };

  selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1
    });
    this.setState({photo: result.uri});
  };

  getPermissions = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  handlePhotoUpload = async () => {
    try {
      this.selectImage();
    } catch(error) {
        this.setState({error});
    }
  };

  validateSubmit = () => {
    const { description } = this.state;
    // We will eventually need to add location to this validation
    return this.validateEmail() && description ? true : false;
  };

  validateEmail = () => {
    return /\S+@\S+\.\S+/.test(this.state.email);
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    const payload = {
      report: {
        category: this.state.isSnowRemoval ? 'snow_removal' : 'other',
        description: this.state.description,
        image: this.state.images,
        email: this.state.email
      },
      location: {
        lat: '',
        lon: ''
      }
    };
    if (this.validateSubmit()) {
      // this is where we make the API call
      navigation.navigate('Tweet');
      this.props.desc(this.state.description);
    } else {
        this.setState({error: 'Please add a valid email, description, and location.'})
    }
  };

  handleChange = (value, type) => {
    if (this.validateSubmit()) {
      this.setState({error: ''});
    }
    this.setState({[type]: value});
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>
            Tweet
            <Text style={styles.h1Color}>311</Text>Denver
          </Text>
          <Text style={styles.label}>Enter Email:</Text>
          <TextInput style={styles.smallInput} value={this.state.email} onChangeText={text => this.handleChange(text, 'email')}/>
          <View style={styles.smallWrapper}>
            <Switch style={styles.CheckBox} value={this.state.isSnowRemoval} onValueChange={value => this.setState({isSnowRemoval: value})}/>
            <Text style={styles.iconLabel}>Snow Removal?</Text>
          </View>
          <Text style={styles.label}>Description:</Text>
          <TextInput multiline={true} style={styles.largeInput} value={this.state.description} onChangeText={text => this.setState({description: text})}/>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Location') }>
              <Text style={styles.iconLabel}>Add Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.addButton}
            onPress={this.handlePhotoUpload}>
            <Text style={styles.iconLabel}>Add Photo</Text>
          </TouchableOpacity>
          <Text style={styles.error}>
          {this.state.error}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.buttonLabel}>Submit</Text></TouchableOpacity>
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
    marginBottom: 40,
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
    marginRight: 15
  },
  error: {
    color: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    width: '80%'
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    width: '80%'
  }
});

export default Form;
