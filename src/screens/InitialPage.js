import React, {Component} from 'react'

import { connect } from 'react-redux'
import { fetchData } from '../store/actions/equipaments'
import { logout } from '../store/actions/user'

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import commonStyles from '../commonStyles'
import EquipamentList from '../components/EquipamentList'
import RoomList from '../components/RoomList'
import AddDevice from './AddNewDevice'
import api from '../services/api'

import Header from '../components/Header'

class InitialPage extends Component {

    state = {
        showAddDevice: false
    }

    componentDidMount= () => {
        this.props.onFetchData(this.props.userId)
    }

    logout = () => {
        this.props.onLogout()
        this.props.navigation.reset({
            index: 0,
            routes:[{
                name: 'WelcomePage'
            }]
        })
    }

    toggleRoom = roomId => {
        api.patch(`/users/${this.props.userId}/rooms/${this.props.roomSelectedId}.json`, {roomSelected: false})
        api.patch(`/users/${this.props.userId}/rooms/${roomId}.json`, {roomSelected: true})
            .catch(err=>console.log(err))
            .then(res => {
                this.componentDidMount()
            })
    }

    togglePower = equipamentId => {
        api.get(`/users/${this.props.userId}/rooms/${this.props.roomSelectedId}/equipaments/${equipamentId}.json`)
            .catch(err => console.log(err))
            .then(res=>{
                let power = res.data.power
                if(power == 'on') power='off'
                else power='on'
                api.patch(`/users/${this.props.userId}/rooms/${this.props.roomSelectedId}/equipaments/${equipamentId}.json`, {power})
                    .catch(err=>console.log(err))
                    .then(res=>{
                        this.componentDidMount()
                    })
            })
    }

    addNewDevice = device => {
        api.post(`/users/${this.props.userId}/rooms/${this.props.roomSelectedId}/equipaments.json`,{
            name: device.name,
            porta: parseInt(device.porta),
            power: 'off'
        })
            .catch(err=> console.log(err))
            .then(res=>
                this.componentDidMount(),
                this.setState({showAddDevice:false}))
    }

    render(){
        return(
            <View style={styles.container}>
                <AddDevice isVisible={this.state.showAddDevice} 
                    onCancel={()=> this.setState({showAddDevice: false})}
                    addNewDevice = {this.addNewDevice}/>
                <View style={styles.background}>
                    <View style={styles.iconArea}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars'
                                size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                        <Text style={styles.pageTitle}>Initial Page</Text>
                        <TouchableOpacity 
                            onPress={this.logout}>
                            <Icon name='sign-out-alt'
                                size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Welcome, {this.props.name}!</Text>
                        <TouchableOpacity 
                            onPress={() => this.setState({showAddDevice: true})}
                            style={styles.addButton}>
                            <Icon name='plus' size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerRoomList}>
                    <RoomList
                        {...this.props}
                        style={styles.equipamentList}
                        toggleRoom = {this.toggleRoom}/>
                </View>
                <View style={styles.containerEquipamentList}>
                    <EquipamentList
                        {...this.props}
                        style={styles.equipamentList}
                        togglePower = {this.togglePower}/>
                </View>
            </View>
        )
    }
}

const larguraTela = Dimensions.get('window').width
const alturaTela = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: commonStyles.colors.branco,
    },
    background:{
        marginTop: -50,
        backgroundColor: '#FF8C00',
        borderRadius: 40,
        paddingBottom: 10
    },
    pageTitle:{
        fontFamily: commonStyles.fontFamilyBold,
        fontSize: 20,
    },
    iconArea:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 90 : 90
    },
    containerRoomList:{
        height: alturaTela*0.21,
        flexDirection: "column",
        marginTop: larguraTela*0.03,
        backgroundColor: commonStyles.colors.branco,
        marginHorizontal: larguraTela*0.05,
    },
    containerEquipamentList:{
        height: alturaTela*0.69,
        backgroundColor: commonStyles.colors.branco,
        margin: larguraTela*0.1,
        marginTop: larguraTela*0.0,
        marginBottom: alturaTela*0.00,
        marginLeft: larguraTela*0.05,
        padding: 0,
        flex: 1,
        flexDirection: "column",
        width: larguraTela*0.9,
        height: alturaTela*1,
    },
    header:{
        flexDirection: 'row',
        height: alturaTela*0.1,
        marginTop: 10,
        margin:10,
        marginLeft: larguraTela*0.08,
        marginBottom: 0,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    titulo:{
        fontFamily: commonStyles.fontFamilyBold,
        fontSize: 25
    },
    addButton: {
        marginRight: 30,
        justifyContent: 'center',
        alignItems:'center'
    }
    
})

const mapStateToProps = ({equipaments, user}) => {
    return {
        name: user.name,
        userId: user.id,
        rooms: equipaments.rooms,
        roomSelectedId: equipaments.roomSelectedId,
        equipaments: equipaments.equipaments

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: userId => dispatch(fetchData(userId)),
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InitialPage)

//export default InitialPage