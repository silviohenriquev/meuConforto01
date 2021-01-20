import * as React from 'react';
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import {View, Text, Image, StyleSheet} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import HeaderDrawer from '../components/HeaderDrawer'

class DrawerComponent extends React.Component {

    logout = () => {
        this.props.onLogout()
    }

    render(){
        const options = {
            email: this.props.email,
            secure: true
        }
        return (
            <DrawerContentScrollView  {...this.props}>
                {/* <View style={styles.container} >
                    <Image source={require("../../assets/imgs/profile.png")} style={styles.profileImg}/>
                    <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>{this.props.name}</Text>
                    <Text style={{color:"gray",marginBottom:10}}>{this.props.email}</Text>
                    <View style={styles.sidebarDivider}></View>
                </View> */}
                <HeaderDrawer/>
                <DrawerItemList {...this.props} />
            </DrawerContentScrollView>
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

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout:() => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DrawerComponent)

//export default Drawer