import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CallSDC from './src/screens/CallSDC';
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    Signup: Signup,
    Call: CallSDC,
  },
  {
    initialRouteName: 'Signup',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
