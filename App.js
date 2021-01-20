import React from 'react';
import {Provider} from 'react-redux'
import { AppRegistry } from 'react-native';
import Routes from './src/routes'
import * as Font from 'expo-font'
import { useState } from 'react';
import {AppLoading} from 'expo'

import storeConfig from './src/store/storeConfig'

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
      <Provider store = {storeConfig()}>
        <Routes/>
      </Provider>
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