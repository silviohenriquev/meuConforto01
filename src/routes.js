import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialPage from './screens/InitialPage';
import Login from './screens/Login'

const Stack = createStackNavigator();

const MenuRoutes = {
    InitialPage:{
        name: 'InitialPage',
        screen: InitialPage
    },
    Login:{
        name: 'Login',
        screen: Login
    }
}

function Routes() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Página Inicial" component={InitialPage} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Routes;