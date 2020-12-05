import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InitialPage from './src/screens/InitialPage'
import api from './src/services/api';
import Routes from './src/routes'
//import axios from 'axios'

//axios.defaults.baseURL='https://meuconforto-c4a46.firebaseio.com/'

export default function App() {
  /*const [equipaments, setEquipaments] = React.useState([])

  React.useEffect(() => {
    api.get("/equipaments.json")
    .then(res=>{
      const rawEquipaments = res.data
      const equipaments = []
      for(let key in rawEquipaments){
        equipaments.push({
          ...rawEquipaments[key],
          id: key
        })
      }
      setEquipaments(equipaments)
    })
  }, [])
*/
  return (
    /*<View style={styles.container}>
      <InitialPage/>
      <StatusBar style="auto" />
    </View>*/  
    <Routes />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
