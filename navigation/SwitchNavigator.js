import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/screens/HomeScreen';
import CallSDC from '../src/screens/CallSDC';
import Login from '../src/screens/Login';
import Signup from '../src/screens/Signup';
import Profile from '../src/screens/Profile';
import FindMe from '../src/screens/FindMe';
import Map from '../src/screens/Map';
import ImageUpload from '../src/screens/ImageUpload';
import ClickImage from '../src/screens/ClickImage';
import GalleryImage from '../src/screens/GalleryImage';
import WeatherMain from '../src/screens/WeatherMain';
import Tips from '../src/screens/Tips';

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
  Map: {
    screen: Map,
    navigationOptions: {
      headerTitle: 'Map',
    },
  },
  ImageUpload: {
    screen: ImageUpload,
    navigationOptions: {
      headerTitle: 'ImageUpload',
    },
  },
  ClickImage: {
    screen: ClickImage,
    navigationOptions: {
      headerTitle: 'ClickImage',
    },
  },
  GalleryImage: {
    screen: GalleryImage,
    navigationOptions: {
      headerTitle: 'GalleryImage',
    },
  },
  WeatherMain: {
    screen: WeatherMain,
    navigationOptions: {
      headerTitle: 'WeatherMain',
    },
  },
  Tips: {
    screen: Tips,
    navigationOptions: {
      headerTitle: 'Tips',
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
