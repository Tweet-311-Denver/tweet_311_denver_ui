import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }

  handleValidation = () => {
    const { markers } = this.state;
    const greenCheck = <Image style={styles.greenCheck} source={require('../../../assets/images/green_check.png')}></Image>
    const redX = <Image style={styles.redCheck} source={require('../../../assets/images/stop.png')}></Image>

    if(!markers.length) {
      return(
        <View style={styles.xContainer}>
          <Text style={styles.redText}>Please Select A Location</Text>
          <Text>{redX}</Text>
        </View>
      )
    } else {
      return(
        <Text>{greenCheck}</Text>
      )
    }
  }

  handlePress = (e) => {
    this.setState({
      markers: [
        {
          coordinate: e.nativeEvent.coordinate,
          pin: <Image style={styles.imgPin} source={require('../../../assets/images/pin.png')} />
        }
      ]
    });
  };

  handleSubmit = () => {
    const { navigation, setLocation } = this.props;
    const { markers } = this.state;

    if(markers.length) {
      const latAndLong = {
        lat: markers[0].coordinate.latitude,
        long: markers[0].coordinate.longitude
      };
      setLocation(latAndLong.lat, latAndLong.long);
      navigation.navigate('Home');
    } else {
      navigation.navigate('Home');
    }
  };

  getLocation = () => {
    const { markers } = this.state;

    return markers.map(marker => {
      return (
        <Marker { ...marker } key={marker.coordinate}>
          <View>
            <Text style={styles.img}>{marker.pin}</Text>
          </View>
        </Marker>)
    })
  };

  render() {
    const { markers } = this.state;

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
        {!markers.length ? null : this.getLocation()}
        </MapView>
        {this.handleValidation()}
        <TouchableOpacity style={styles.btn} onPress={ () => this.handleSubmit() }>
          <Text style={styles.text}>Add Location</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  mapContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  map: {
    borderColor: '#3976EA',
    borderWidth: 1,
    height: height * .65,
    width: '100%',
  },
  xContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20
  },
  redCheck: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 35,
    width: 35,
  },
  greenCheck: {
    height: 45,
    marginTop: 25,
    width: 60,
  },
  redText: {
    color: 'red',
    fontSize: 15,
    marginTop: height * .04,
    marginBottom: height * .02,
  },
  imgPin: {
    height: 30,
    width: 30,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#3976EA',
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    marginBottom: height * .06,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: height * .04,
    width: '50%'
  }
});

export default Maps;
