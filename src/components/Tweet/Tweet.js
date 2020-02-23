import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button, TouchableOpacity } from 'react-native';


export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetContent: this.props.desc,
      twitterViaAccount: 'Tweet311Denver',
    };
  }
  
  tweetNow = () => {
    let twitterParameters = '';
    const { tweetContent, twitterViaAccount } = this.state;
    const { navigation } = this.props;

    if (tweetContent != undefined) {
      if (twitterParameters.includes('?') == false) {
        twitterParameters =
          twitterParameters + '?text=' + encodeURI(tweetContent);
      } else {
        twitterParameters =
          twitterParameters + '&text=' + encodeURI(tweetContent);
      }
    }
    if (twitterViaAccount != undefined) {
      if (twitterParameters.includes('?') == false) {
        twitterParameters =
          twitterParameters + '?via=' + encodeURI(twitterViaAccount);
      } else {
        twitterParameters =
          twitterParameters + '&via=' + encodeURI(twitterViaAccount);
      }
    }
    let url = 'https://twitter.com/intent/tweet' + twitterParameters;

    Linking.openURL(url)
      .then(data => {
        navigation.navigate('Success')
      })
      .catch(() => {
        alert('Something went wrong');
      });
  };

  render() {
    const { navigation, setDec } = this.props;
    const { tweetContent, twitterViaAccount } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Submit A Tweet</Text>
        <Text style={styles.inputLabel}>Enter Tweet Content</Text>
        <TextInput
          value={tweetContent}
          onChangeText={tweetContent => this.setState({ tweetContent }, setDec(tweetContent))}
          placeholder={'Enter Tweet Content'}
          maxLength='280'
          style={styles.input}
        />
        <Text style={styles.inputLabel}>Tag Twitter Account</Text>
        <TextInput
          value={twitterViaAccount}
          onChangeText={twitterViaAccount =>
            this.setState({ twitterViaAccount })
          }
          placeholder={'Enter Via Account'}
          style={styles.input}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={this.tweetNow} title="Tweet Now" />
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={ () => navigation.navigate('Success') }>
          <Text style={styles.buttonLabel}>Skip Tweet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff'
  },
  h1: {
    color: '#3976EA',
    fontSize: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center', 
    fontSize: 40, 
  },
  input: {
    borderColor: 'gray',
    lineHeight: 1,
    borderWidth: 1,
    width: '100%',
    height: 150,
    padding: 5,
    paddingTop: 0,
  },
  inputLabel: {
    color: '#3976EA',
    fontSize: 18,
    marginTop: 20, 
    marginBottom: 8
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 35,
    width: '50%',
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 20
  }
});