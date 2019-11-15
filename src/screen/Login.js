import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
  } from 'react-native';
import * as firebase from 'firebase';

const SignIn=(props)=> {
  const [dataLogin, setDataLogin] = useState({email:'',password:'',errorMessage: null})

  handleLogin = () => {
    const {email,password} = dataLogin

    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(error => setDataLogin({errorMessage:error.message})) 
  }
    
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.avatar} source={require('../Assets/ChatMan.png')}/>

        </View>
        <View>
        {dataLogin.errorMessage &&
            <Text style={{ color: 'red' }}>
              {dataLogin.errorMessage}
          </Text>}
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              autoCapitalize="none"
              underlineColorAndroid='transparent'
              onChangeText={email=> {                    
                setDataLogin({...dataLogin, email: email})
              }}
              value={dataLogin.email}
              />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password=> {                    
                setDataLogin({...dataLogin, password: password})
              }}
              value={dataLogin.password}
              />
        </View>

        <TouchableHighlight 
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress={handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight 
        style={styles.buttonContainer} 
        onPress={()=> props.navigation.navigate('Register')}
        >
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebf7',
  },
  logo :{
    width:200,
    height:210,
    justifyContent: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3B5999",
  },
  loginText: {
    color: 'white',
  },
  avatar: {
    width: 130,
    height: 130,
    marginBottom:50,
    alignSelf:'center',
  },
});

// ()=> props.navigation.navigate('TabNavigation')