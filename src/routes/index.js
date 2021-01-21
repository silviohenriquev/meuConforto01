import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import InitialPage from '../screens/InitialPage';
import WelcomePage from '../screens/WelcomePage'
import Login from '../screens/Login'
import DrawerScreen from '../screens/Drawer'
import SignUp from '../screens/SignUp'
import AddEquipament from '../screens/AddNewDevice'

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
                    <Stack.Screen name='WelcomePage' component={WelcomePage}/>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='SignUp' component={SignUp}/>
                    <Stack.Screen name='InitialPage' component={MyDrawer}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes;