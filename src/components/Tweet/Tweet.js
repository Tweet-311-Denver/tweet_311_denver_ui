import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button, } from 'react-native';


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
    return (
      <View style={styles.container}>
        <Text
          style={{ textAlign: 'center', fontSize: 20, paddingVertical: 30 }}>
          Submit A Tweet
        </Text>
        <Text style={{ marginTop: 20 }}>Enter Tweet Content</Text>
        <TextInput
          value={this.state.tweetContent}
          onChangeText={tweetContent => this.setState({ tweetContent })}
          placeholder={'Enter Tweet Content'}
          style={styles.input}
        />
        <Text style={{ marginTop: 20 }}>Enter Twitter Account</Text>
        <TextInput
          value={this.state.twitterViaAccount}
          onChangeText={twitterViaAccount =>
            this.setState({ twitterViaAccount })
          }
          placeholder={'Enter Via Account'}
          style={styles.input}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={this.tweetNow} title="Tweet Now" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 30,
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    backgroundColor: '#D3D3D3',
  },
});






// export const Tweet = ({ desc, navigation, setDesc }) => {

//   const redCheck = <Image style={styles.img} source={require('../../../assets/images/confirm.png')} />
//   const greenCheck = <Image style={styles.img} source={require('../../../assets/images/confirmTrue.png')} />

//   return (
//     <View style={styles.tweetContainer}>
//       <Text style={styles.headerText}>Tweet the Issue:</Text>
//       {/* { desc ? greenCheck : redCheck } */}
//       <View style={styles.inputArea}>
//         <WebView
//           originWhitelist={['*']}
//           source={{ uri: 'https://twitter.com/intent/tweet' }}
//           style={styles.window}
//           useWebKit={true}
          
//         />
//         <Text style={styles.tweetLabel}>Your Tweet:</Text>
//         <TextInput
//           multiline
//           maxLength='280'
//           style={styles.tweetInput}
//           placeholder='Your Tweet'
//           value={desc}
//           onChangeText={text => setDesc(text)}
//         >
//         </TextInput>
//       </View>
      // <TouchableOpacity style={styles.confirmButton} onPress={ () => navigation.navigate('Success') }>
      //   <Text style={styles.buttonLabel}>Submit</Text>
      // </TouchableOpacity>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   tweetContainer: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 1,
//     width: '100%',
//   },
//   headerText: {
//     color: '#3976EA',
//     fontSize: 35,
//     marginTop: 5,
//   },
//   inputArea: {
//     flex: 1,
//     marginTop: 10,
//     width: '90%',
//   },
//   window: {
//     height: '100%',
//     marginBottom: 5,
//     width: '100%',
//   },
//   tweetLabel: {
//     color: '#3976EA',
//     fontSize: 20,
//     paddingBottom: 10,
//   },
//   tweetInput: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     height: 150,
//     padding: 10,
//     width: '100%',
//   },
//   img: {
//     height: 100,
//     marginTop: 10,
//     width: 100,
//   },
//   confirmButton: {
//     alignItems: 'center',
//     backgroundColor: '#3976EA',
//     borderRadius: 20,
//     height: 40,
//     justifyContent: 'center',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginBottom: 35,
//     width: '50%',
//   },
//   buttonLabel: {
//     color: '#FFFFFF',
//     fontSize: 20
//   }
// })