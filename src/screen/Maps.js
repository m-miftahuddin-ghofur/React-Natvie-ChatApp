
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default Maps = () => (
    <View style={styles.container}>
        <MapView
            showsMyLocationButton={true}
            showsUserLocation={true}
            style={styles.map}
            initialRegion={{ 
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
            <Marker coordinate={{
                latitude:-7.756147,
               longitude: 110.377282,
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