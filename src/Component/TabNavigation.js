import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";  

import Chat from '../screen/Chat';
import Maps from '../screen/Maps';
import Profile from '../screen/Profile';
import ChatPrivate from '../screen/ChatPrivate';

const TabScreen = createMaterialTopTabNavigator(
  {
    Chat: { screen: Chat },
    Maps: { screen: Maps },
    Profile: { screen: Profile },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#3B5999',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#00AFF0',
        borderBottomWidth: 2,

      },
      headerMode: 'none',

      swipeEnabled: true,
    },
  }
);

//making a StackNavigator to export as default
const TabNavigation = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3B5999',
      },
      headerTintColor: '#FFFFFF',
      title: 'ChatMan',
      swipeEnabled: true,
    },
  },
  ChatPrivate: {
    screen : ChatPrivate,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3B5999',
      },
      headerTintColor: '#FFFFFF',
      swipeEnabled: true,
    },
    
  }
});

export default createAppContainer(TabNavigation);
