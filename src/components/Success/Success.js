import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Success = ({ navigation }) => {

  return(
    <View style={styles.successContainer}>
      <Text style={styles.headerText}>Success</Text>
      <Text style={styles.messageText}>Form submitted and Tweet Posted</Text>
      <Image style={styles.img} source={require('../../../assets/images/completed-task.png')} />
      <Text style={styles.thanksText}>Thanks!</Text>
      <TouchableOpacity style={styles.homeButton} onPress={ () => navigation.navigate('Home') }>
        <Text style={styles.homeLabel}>Home</Text>
      </TouchableOpacity>
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
    width: '100%',
  },
  headerText: {
    color: '#3976EA',
    fontSize: 50,
    marginTop: 20,
  },
  messageText: {
    color: '#3976EA',
    fontSize: 20,
    marginTop: 20,
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginRight: 35,
    height: 250,
    marginTop: 50,
    width: 250,
  },
  thanksText: {
    color: '#3976EA',
    fontSize: 20,
    marginTop: 40,
  },
  homeButton: {
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
  homeLabel: {
    color: '#FFFFFF',
    fontSize: 20
  }
});

export default Success;