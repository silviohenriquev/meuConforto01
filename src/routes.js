import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialPage from './screens/InitialPage';

const Stack = createStackNavigator();

const MenuRoutes = {
    InitialPage:{
        name: 'InitialPage',
        screen: InitialPage
    }
}

function Routes() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Página Inicial" component={InitialPage} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Routes;