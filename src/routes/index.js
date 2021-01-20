import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import InitialPage from '../screens/InitialPage';
import Login from '../screens/Login'
import DrawerScreen from '../screens/Drawer'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerScreen {...props} />}>
            <Drawer.Screen name="Initial Page" component={InitialPage} /> 
        </Drawer.Navigator>
    );
}

class Routes extends React.Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                    headerMode={'none'}>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='InitialPage' component={MyDrawer}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes;