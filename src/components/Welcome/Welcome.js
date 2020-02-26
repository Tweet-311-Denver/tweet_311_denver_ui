import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Welcome = () => {

  return(
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.welcomePara}>
        Thank you for using Tweet311Denver. We aim to build a safer, cleaner, 
        and more enjoyable commute experience for bikers, pedestrians, and 
        public transportation enthusiasts. Submit a claim below and contribute 
        to positive change!
      </Text>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>Start Form</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    padding: 15,
    width: width * 1,
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  welcomePara: {
    fontSize: 20,
  },
  startText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  startButton: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    width: '50%',
  },
});
