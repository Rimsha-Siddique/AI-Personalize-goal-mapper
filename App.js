// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/AuthStack';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
export default function App() {
  return (
    
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      
  );
}


