import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import InitialPage from '../screens/InitialPage';
import Login from '../screens/Login'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView  {...props}>
            <View style={styles.container} >
                <Image source={require("../../assets/imgs/profile.png")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Silvio Henrique</Text>
                <Text style={{color:"gray",marginBottom:10}}>silvioviana@myconfort.com</Text>
                <View style={styles.sidebarDivider}></View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Initial Page" component={InitialPage} /> 
            <Drawer.Screen name="Login" component={Login} /> 
        </Drawer.Navigator>
    );
}

class Routes extends React.Component {
    state = {
        routes:[{
            name: "Initial Page",
            icon: "bars"
        },{
            name: "Login",
            icon: "bars"
        },]
    }

    render(){
        return (
            <NavigationContainer>
                <MyDrawer/>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        alignItems: 'center'
    },
    profileImg:{
        width:80,
        height:80,
        borderRadius:40,
        marginTop:20
    },
    sidebarDivider:{
        height:1,
        width:"100%",
        backgroundColor:"lightgray",
        marginVertical:10
    },
    listItem:{
        height:60,
        alignItems:"center",
        flexDirection:"row",
    },
    title:{
        fontSize:18,
        marginLeft:20
    },
})


export default Routes;