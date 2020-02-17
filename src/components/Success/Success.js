import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export const Success = () => {

  return(
    <View style={styles.successContainer}>
      <Text style={styles.headerText}>Success</Text>
      <Text style={styles.formText}>Form submitted</Text>
      <Text style={styles.tweetText}>Tweet Posted</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  successContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    padding: 15,
    width: '95%',
  },
  headerText: {
    color: '#3976EA',
    fontSize: 50,
    marginTop: 20,
  },
  formText: {
    color: '#3976EA',
    fontSize: 30,
    marginTop: 20,
  },
  tweetText: {
    color: '#3976EA',
    fontSize: 30,
    marginTop: 20,
  },
});