import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export const Tweet = () => {

  return(
    <View style={styles.tweetContainer}>
      <Text style={styles.headerText}>Confirm Your Tweet:</Text>
      <Image 
        style={styles.confirmedFalse} 
        source={require('../../../assets/confirm.png')} 
      />
      <TextInput
        multiline
        maxLength='280'
        style={styles.tweetInput}
        placeholder='Your Tweet'
      >
      </TextInput>
      <Button title='Confirm' />
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 35,
  },
  tweetContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  tweetInput: {
    borderColor: 'gray', 
    borderWidth: 1, 
    height: 150,
    marginTop: 10,
    padding: 10,
    width: 350, 
  },
  confirmedFalse: {
    height: 200,
    margin: 50,
    width: 200,
  }
})
