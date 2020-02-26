import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.indicator} />
      <Text style={styles.text}>Hang tight, we are submitting your report!</Text>
      <Text style={styles.text}>(This may take several seconds)</Text>
      <Image style={styles.icon} source={require('../../../assets/images/bike.png')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#3976EA',
    justifyContent: 'center',
    padding: 20
  },
  indicator: {
    color: '#FFFFFF',
    marginBottom: 200,
    transform: [{scale: 2}]
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    marginBottom: 20
  },
  icon: {
    height: 50,
    width: 50
  }
});

export default Loader;
