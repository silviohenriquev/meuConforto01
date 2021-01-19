import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialPage from './src/screens/InitialPage'
import api from './src/services/api';
import Routes from './src/routes'
import * as Font from 'expo-font'
import { useState } from 'react';
import {AppLoading} from 'expo'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import axios from 'axios'

const getFonts = () => Font.loadAsync({
  'oswald-regular' : require('./assets/fonts/Oswald-Regular.ttf'),
  'oswald-bold' : require('./assets/fonts/Oswald-Bold.ttf'),
  'gotham-regular' : require('./assets/fonts/Gotham-Font/GothamMedium_1.ttf'),
  'gotham-bold': require('./assets/fonts/Gotham-Font/GothamBold.ttf'),
  'gotham-light': require('./assets/fonts/Gotham-Font/GothamLight.ttf'),
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Routes />
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
