import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../src/screens/HomeScreen';
import CallSDC from '../src/screens/CallSDC';
import Login from '../src/screens/Login'
import Signup from '../src/screens/Signup'
import Profile from '../src/screens/Profile'


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
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)
