// src/components/WebViewComponent.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; 
const WebViewComponent = () => {

  return (
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
  );
};

export default WebViewComponent;
