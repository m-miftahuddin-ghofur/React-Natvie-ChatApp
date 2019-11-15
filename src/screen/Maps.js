
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default Maps = () => (
    <View style={styles.container}>
        <MapView
            // onMapReady={() => {
            //     PermissionsAndroid.request(
            //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            //     ).then(granted => {
            //       alert(granted) // just to ensure that permissions were granted
            //     });
            //   }}
              showsMyLocationButton={true}
              showsUserLocation={true}
            style={styles.map}
            initialRegion={{ // initial region set to Bileto
                latitude: -7.7956,
                longitude: 110.3695,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
          
            // onUserLocationChange={()=>{firebase.database().ref}}
        >
            <Marker coordinate={{
                 latitude: -7.7956,
                longitude: 110.3695,
            }} />
        </MapView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    map: {
        flex: 1,
    }
});