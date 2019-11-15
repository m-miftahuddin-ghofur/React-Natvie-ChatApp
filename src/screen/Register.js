import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
import * as firebase from 'firebase';

const Register=(props)=> {
    const [dataRegister, setDataRegister] = useState({name:'',email:'',password:'',errorMessage: null})

    const handleSingUp = async () => {
      try {
        const credentials = await firebase.auth().createUserWithEmailAndPassword(dataRegister.email, dataRegister.password);
        await credentials.user.updateProfile({
          displayName : dataRegister.name
        });
        await firebase.database().ref('Users/' + credentials.user.uid).set({
          name: dataRegister.name,
          email: dataRegister.email,
          uid : credentials.user.uid
        });
      } catch (error) {
        setDataRegister({errorMessage: error.message})
      }
    }

    return (
      <View style={styles.container}>
        <View>
        {/* <Image style={styles.logo} source={require('../assets/logo-pos.png')}/> */}
        <Image style={styles.avatar} source={require('../Assets/ChatMan.png')}/>

        </View>
        <View>
          {dataRegister.errorMessage &&
            <Text style={{ color: 'red' }}>
              {dataRegister.errorMessage}
          </Text>}
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Fullname"
              keyboardType="default"
              underlineColorAndroid='transparent'
              value={dataRegister.name}
              // onChangeText={name => setDataRegister({name})}
              onChangeText={name=> {                    
                setDataRegister({...dataRegister, name: name})
              }}
              /> 
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              autoCapitalize="none"
              placeholder="Email"
              // keyboardType="email"
              underlineColorAndroid='transparent'
              value={dataRegister.email}
              // onChangeText={email => setDataRegister({email})}
              onChangeText={email=> {                    
                setDataRegister({...dataRegister, email: email})
              }}
              />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={dataRegister.password}
              // onChangeText={password => setDataRegister({password})}
              onChangeText={password=> {                    
                setDataRegister({...dataRegister, password: password})
              }}
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={handleSingUp}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={()=> props.navigation.navigate('Login')}>
            <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
}

export default Register; 


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
})


{/* <Button>
<Text onPress={()=> props.navigation.navigate('Login')}>Sign Up</Text>
</Button> */}