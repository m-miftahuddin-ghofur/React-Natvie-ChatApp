import React,{useEffect} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import * as firebase from 'firebase';

const Loading = (props)=> {

    useEffect(()=> {
        firebase
        .auth()
        .onAuthStateChanged(user => {
            props.navigation.navigate(user? "App":"Auth");
        })
    },[])
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})

export default  Loading;