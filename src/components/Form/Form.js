import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, ScrollView, Switch } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import { sendReport } from '../../apiCalls';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        description: '',
        isSnowRemoval: false,
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
    const { location } = this.props;
    return this.validateEmail() &&
      description &&
      location.lat &&
      location.long ?
      true : false;
  };

  validateEmail = () => {
    return /\S+@\S+\.\S+/.test(this.state.email);
  };

  handleSubmit = () => {
    const { navigation, location } = this.props;
    const { isSnowRemoval, description, email, photo } = this.state;
    const payload = {
      report: {
        category: isSnowRemoval ? 'snow_removal' : 'other',
        description,
        image: photo,
        email
      },
      location
    };
    if (this.validateSubmit()) {
      this.postForm(payload);
      this.props.desc(this.state.description);
      this.resetState();
      navigation.navigate('Tweet');
    } else {
        this.setState({error: 'Please add a valid email, description, and location.'})
    }
  };

  postForm = async payload => {
    const { setCase, setFetchError } = this.props;
    try {
      const response = await sendReport(payload);
      setCase(response);
    } catch(error) {
        this.setState({error: 'Sorry, we couldn\'t complete your request. Please try again.'});
        setFetchError();
        console.log(error);
    };
  };

  handleChange = (value, type) => {
    if (this.validateSubmit()) {
      this.setState({error: ''});
    }
    this.setState({[type]: value});
  };

  resetState = () => {
    this.setState({
        email: '',
        description: '',
        isSnowRemoval: false,
        photo: '',
        error: ''
    });
  };

  render() {
    const { navigation, location } = this.props;
    const photoButtonText = this.state.photo ?
        'Change Photo' :
        'Add Photo';
    const mapButtonText = location.lat && location.long ? 'Change Location' : 'Add Location';

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
              <Text style={styles.iconLabel}>{mapButtonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.addButton}
            onPress={this.handlePhotoUpload}>
            <Text style={styles.iconLabel}>{photoButtonText}</Text>
          </TouchableOpacity>
          <Text style={styles.error}>
          {this.state.error}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.buttonLabel}>Submit</Text></TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  h1: {
    color: '#3976EA',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: height * .02,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  h1Color: {
    color: '#000000'
  },
  smallInput: {
    borderColor: '#000000',
    borderWidth: 2,
    fontSize: 20,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 8,
    width: '80%'
  },
  largeInput: {
    borderColor: '#000000',
    borderWidth: 2,
    fontSize: 20,
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 8,
    width: '80%'
  },
  label: {
    color: '#3976EA',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: '10%',
    marginTop: 30
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
    fontSize: 20,
    fontWeight: 'bold',
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
    marginTop: 30,
    width: width * .5
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
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
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    width: width * .65
  }
});

export default Form;
