import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {

  return (
      <NavigationContainer>
        <StatusBar backgroundColor={'#122023'} barStyle={Platform.OS === 'ios' ? 'light-content' : 'light-content'}/>
        <Routes />
      </NavigationContainer>
  );
}