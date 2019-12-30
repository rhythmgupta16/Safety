import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../src/screens/HomeScreen';
import CallSDC from '../src/screens/CallSDC';
import Login from '../src/screens/Login'
import Signup from '../src/screens/Signup'
import Profile from '../src/screens/Profile'
import FindMe from '../src/screens/FindMe'
import { createStackNavigator } from 'react-navigation-stack';

const NavigationStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Call: {
    screen: CallSDC,
    navigationOptions: {
      headerTitle: 'Call',
    },
  },
  FindMe: {
    screen: FindMe,
    navigationOptions: {
      headerTitle: 'FindMe',
    },
  },
});


const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        },
        NavigationStack: {
        screen: NavigationStack,
        },
    },
    {
        initialRouteName: 'Login'
    }
)


export default createAppContainer(SwitchNavigator)
