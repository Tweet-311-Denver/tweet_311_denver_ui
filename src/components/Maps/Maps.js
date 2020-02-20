import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps'

export const Maps = () => {

  return(
    <View style={styles.mapContainer}>
      <MapView
      style={styles.map} 
      region={ { 
        latitude: 39.7392,
        longitude: -104.9903,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,  
          }
        }        
      showsUserLocation={true}>
      </MapView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Add Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  map: {
    height: 500,
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    width: '40%'
  }
});

export default Maps;

