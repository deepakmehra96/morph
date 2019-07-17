import React from 'react';
import { Platform, StyleSheet, View, Dimensions, Text } from 'react-native';
import SignUp from '../Auth/Signup';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapMain extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super()
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    let { region } = this.state
    console.log(region, "currentLatitude currentLatitude")
    return (
      <MapView
        style={{ height: '100%', width: '100%' }}
        // provider={PROVIDER_GOOGLE}
        // mapType={Platform.OS == "android" ? "none" : "standard"}
        // customMapStyle={[
        //   {
        //     "featureType": "poi",
        //     "elementType": "labels.text",
        //     "stylers": [
        //       {
        //         "visibility": "off"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "poi.business",
        //     "stylers": [
        //       {
        //         "visibility": "off"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road",
        //     "elementType": "labels.icon",
        //     "stylers": [
        //       {
        //         "visibility": "off"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "transit",
        //     "stylers": [
        //       {
        //         "visibility": "off"
        //       }
        //     ]
        //   }
        // ]}
        // showsUserLocation={ true }
        region={this.state.region}
        onRegionChange={region => this.setState({ region })}
        onRegionChangeComplete={region => this.setState({ region })}
      >
        <MapView.Marker
          coordinate={this.state.region}
        />
      </MapView>
    )
  }
}
export default MapMain


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    flex: 1,
  },
});