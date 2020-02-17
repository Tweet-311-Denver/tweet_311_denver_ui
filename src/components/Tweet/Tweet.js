import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export const Tweet = () => {

  return(
    <View style={styles.tweetContainer}>
      <Text>This is the tweet container</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      >

      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  tweetContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
