import * as React from 'react';
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
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
            <DrawerContentScrollView {...this.props}>
                <HeaderDrawer/>
                <DrawerItemList {...this.props}/>
            </DrawerContentScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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