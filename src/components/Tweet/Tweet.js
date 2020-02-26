import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, Text, Linking, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetContent: this.props.desc,
      twitterViaAccount: 'Tweet311Denver',
    };
  }

  componentDidMount = () => {
    const { error, navigation } = this.props;
    if (error) {
      navigation.navigate('Home');
    }
  };

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
    const { navigation, setDesc } = this.props;
    const { tweetContent, twitterViaAccount } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>Submit Tweet <Image style={styles.img} source={require('../../../assets/images/twitter.png')}></Image></Text>
          <Text style={styles.inputLabel}>Tweet Content</Text>
          <TextInput
            value={tweetContent}
            onChangeText={tweetContent => this.setState({ tweetContent }, setDesc(tweetContent))}
            placeholder={'Enter Tweet Content'}
            maxLength='280'
            multiline={true}
            style={styles.input}
          />
          <Text style={styles.inputLabel}>Tag Twitter Account</Text>
          <TextInput
            value={twitterViaAccount}
            onChangeText={twitterViaAccount =>
              this.setState({ twitterViaAccount })
            }
            multiline={true}
            placeholder={'Enter Via Account'}
            style={styles.input}
          />
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity style={styles.tweetBtn} onPress={this.tweetNow} title="Tweet">
              <Text style={styles.tweetLabel}>Tweet</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.confirmButton} onPress={ () => navigation.navigate('Success') }>
            <Text style={styles.buttonLabel}>Skip Tweet</Text>
          </TouchableOpacity>
        </ScrollView>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: height * .05,
    textAlign: 'center',
  },
  img: {
    height: 50,
    width: 50,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    fontSize: 20,
    height: 150,
    paddingLeft: 10,
    paddingBottom: 90,
    width: width * 0.85,
  },
  inputLabel: {
    color: '#3976EA',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8
  },
  tweetBtn: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 35,
    width: width * .5,
  },
  tweetLabel: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
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
    width: width * .5,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
