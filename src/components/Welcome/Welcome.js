import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Welcome = () => {

  return(
    <View style={styles.welcomeContainer}>
    <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
      <Image style={styles.img} source={require('../../../assets/images/denver.png')}></Image>
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
      </LinearGradient>
    </View>
  )
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    width: width * 1,
  },
  img: {
    height: 300,
    marginTop: height * .09,
    marginLeft: width * .05,
    width: 300,
  },
  linearGradient: {
    height: height * 1, 
    width: width * 1,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: width * .05,
    marginBottom: 15,
  },
  welcomePara: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: width * .05,
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
    width: width * .5,
  },
});
