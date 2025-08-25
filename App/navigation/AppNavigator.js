import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailConfirm from '../screens/EmailConfirm';
import ForgotPassword from '../screens/ForgotPassword';
import Welcome from '../screens/Welcome';
import EmailSent from '../screens/EmailSent';
import Personalize from '../screens/Personalize';
import Congratulation from '../screens/Congratulation';
import ErrorPage from '../screens/ErrorPage';
import BasicDetail from '../screens/BasicDetail';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="EmailConfirm" component={EmailConfirm} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailSent" component={EmailSent} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Personalize" component={Personalize} />
      <Stack.Screen name="Congratulation" component={Congratulation} />
      <Stack.Screen name="ErrorPage" component={ErrorPage} />
      <Stack.Screen name="BasicDetail" component={BasicDetail} />

      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
