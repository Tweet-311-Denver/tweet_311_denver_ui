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
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    padding: 15,
    width: '95%',
  },
  map: {
    height: 300,
    width: '100%',
  }
});

export default Maps;

