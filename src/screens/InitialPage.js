import React, {Component, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'
import EquipamentList from '../components/EquipamentList'
import RoomList from '../components/RoomList'
import axios from 'axios'
import api from '../services/api'

import Header from '../components/Header'

class InitialPage extends Component {

    componentDidMount = () => {
        api.get("/rooms.json")
            .catch(err=> console.log(err))
            .then(res => {
                const data = res.data
                const rooms = []

                for (let key in data){
                    rooms.push({
                        ...data[key],
                        id: key
                    })
                }
                rooms.forEach(room => {
                    if(room.roomSelected){
                        const equipaments = []
                        const roomSelectedId = room.id
                        for(let chave in room.equipaments){
                            equipaments.push({
                                ...room.equipaments[chave],
                                id: chave
                            })
                        }
                        //console.log(roomSelectedId)
                        this.setState({equipaments, roomSelectedId})
                    }
                })
                this.setState({rooms})
            })
    }

    toggleRoom = roomId => {
        const lastRoom = false
        const nowRoom = true
        api.patch(`/rooms/${this.state.roomSelectedId}.json`, {roomSelected: lastRoom})
        api.patch(`/rooms/${roomId}.json`, {roomSelected: nowRoom})
            .catch(err=>console.log(err))
            .then(res => {
                this.componentDidMount()
            })


    }

    togglePower = equipamentId => {
        api.get(`/rooms/${this.state.roomSelectedId}/equipaments/${equipamentId}.json`)
            .catch(err => console.log(err))
            .then(res=>{
                let power = res.data.power
                console.log(power) 
                if(power == 'off') power='on'
                else power='off'
                api.patch(`/rooms/${this.state.roomSelectedId}/equipaments/${equipamentId}.json`, {power})
                    .catch(err=>console.log(err))
                    .then(res=>{
                        this.componentDidMount()
                    })
            })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.background}>
                    <View style={styles.iconArea}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars'
                                size={20} color={commonStyles.colors.secondary} />
                        </TouchableOpacity>
                        <Text style={styles.pageTitle}>Initial Page</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Welcome, Silvio!</Text>
                    </View>
                </View>
                <View style={styles.containerRoomList}>
                    <RoomList
                        {...this.state}
                        style={styles.equipamentList}
                        toggleRoom = {this.toggleRoom}/>
                </View>
                <View style={styles.containerEquipamentList}>
                    <EquipamentList
                        {...this.state}
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
        marginLeft: larguraTela*0.05,
    },
    iconArea:{
        flexDirection: 'row',
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
        height: alturaTela*0.1,
        marginTop: 10,
        margin:10,
        marginLeft: larguraTela*0.08,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems:'flex-start'
    },
    titulo:{
        fontFamily: commonStyles.fontFamilyBold,
        fontSize: 30
    }
    
})

export default InitialPage