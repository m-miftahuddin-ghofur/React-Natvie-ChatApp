import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';                                          
import { SwitchNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './screen/Login';
import Register from './screen/Register';
import Loading from './screen/Loading';
import TabNavigation from './Component/TabNavigation';
// import Router from './src/Component/TabNavigation';
import * as firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAvHN8BXIt2FE365W_ur-aVu5sNwcF9iHE",
  authDomain: "chatapp-59460.firebaseapp.com",
  databaseURL: "https://chatapp-59460.firebaseio.com",
  projectId: "chatapp-59460",
  storageBucket: "chatapp-59460.appspot.com",
  messagingSenderId: "328716417683",
  appId: "1:328716417683:web:7b656c7278b492901c2b66",
  measurementId: "G-ZPQG3NXESG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  TabNavigation
},{
  headerMode: 'none',
})

const AuthStack = createStackNavigator({
  Login,
  Register
},{
  headerMode: 'none',
});

const Router = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      App : AppStack,
      Auth : AuthStack
    },
    {
      initialRouteName : 'Loading',
      
    }
  )
)

export default Router;
