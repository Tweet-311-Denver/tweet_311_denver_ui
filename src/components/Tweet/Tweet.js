import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export const Tweet = ({ description }) => {

  const redCheck = <Image style={styles.img} source={require('../../../assets/images/confirm.png')} />
  const greenCheck = <Image style={styles.img} source={require('../../../assets/images/confirmTrue.png')} />

  return(
    <View style={styles.tweetContainer}>
      <Text style={styles.headerText}>Confirm Your Tweet:</Text>
      { description ? greenCheck : redCheck }
      <View style={styles.inputArea}>
        <Text style={styles.tweetLabel}>Your Tweet:</Text>
        <TextInput
          multiline
          maxLength='280'
          style={styles.tweetInput}
          placeholder='Your Tweet'
        >
        </TextInput>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tweetContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    width: '95%',
  },
  headerText: {
    color: '#3976EA',
    fontSize: 35,
    marginTop: 20,
  },
  inputArea: {
    flex: 1,
    marginTop: 70,
    width: '90%',
  },
  tweetLabel: {
    color: '#3976EA',
    fontSize: 20,
    paddingBottom: 10,
  },
  tweetInput: {
    borderColor: 'gray', 
    borderWidth: 1, 
    height: 150,
    padding: 10,
    width: '100%', 
  },
  img: {
    height: 250,
    marginTop: 70,
    width: 250,
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 35,
    width: '50%',
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 20
  }
})
