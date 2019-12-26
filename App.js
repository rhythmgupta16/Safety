import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CallSDC from './src/screens/CallSDC';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Call: CallSDC,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
