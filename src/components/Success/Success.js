import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const Success = ({ navigation, caseID, setCase }) => {

  const handlePress = () => {
    setCase('')
    navigation.navigate('Home')
  }

  return(
    <View style={styles.successContainer}>
      <Text style={styles.headerText}>Success!</Text>
      <Image style={styles.img} source={require('../../../assets/images/completed-task.png')} />
      <Text style={styles.thanksText}>Denver might email for more info</Text>
      <Text style={styles.denverText}>Denver 311 Case-ID:</Text>
      <Text style={styles.idText}>{caseID}</Text>
      <TouchableOpacity style={styles.homeButton} onPress={ () => handlePress() }>
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
    fontWeight: 'bold',
    marginTop: 20,
  },
  messageText: {
    color: '#3976EA',
    fontSize: 20,
    marginTop: 20,
  },
  img: {
    marginRight: width * -.08,
    height: 250,
    marginTop: 35,
    width: 250,
  },
  thanksText: {
    color: '#3976EA',
    fontSize: 24,
    marginTop: 30,
  },
  idText: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 25,
  },
  denverText: {
    color: '#3976EA',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
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
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Success;