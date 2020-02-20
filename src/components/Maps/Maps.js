import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }

  handlePress = (e) => {
    this.setState({
      markers: [
        {
        coordinate: e.nativeEvent.coordinate,
        pin: <Image style={styles.img} source={require('../../../assets/images/pin.png')} />
      }
    ]
    })
  }

  render() {
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
          showsTraffic={true}
          onPress={ this.handlePress }       
          >
          {this.state.markers.map(marker => {
            return (
              <Marker { ...marker } >
                <View>
                  <Text style={styles.img} >{marker.pin}</Text>
                </View>
              </Marker>)
          })}
        </MapView>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Add Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={ () => navigation.navigate('Home') }>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
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
  img: {
    height: 30,
    width: 30,
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

