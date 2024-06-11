import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splash/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import SigninScreen from '../screens/auth/SigninScreen';
 import RegisterScreen from '../screens/auth/RegisterScreen';
import OtpScreen from "../screens/auth/OtpScreen"
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen}     options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen}    options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OTP" component={OtpScreen} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
