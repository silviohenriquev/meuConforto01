import React, {Component, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions
} from 'react-native'
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
                        console.log(roomSelectedId)
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
                    <View style={styles.header}>
                        <Text style={styles.titulo}>Bem-vindo à sua casa, Silvio!</Text>
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
        backgroundColor: commonStyles.colors.laranja,
    },
    containerRoomList:{
        flex: 0.4,
        flexDirection: "column",
        backgroundColor: commonStyles.colors.branco,
        marginHorizontal: larguraTela*0.05,
        borderRadius: 20
    },
    containerEquipamentList:{
        flex: 0.6,
        backgroundColor: commonStyles.colors.branco,
        margin: larguraTela*0.1,
        marginTop: larguraTela*0.05,
        marginBottom: alturaTela*0.02,
        marginLeft: larguraTela*0.05,
        padding: 0,
        flex: 1,
        flexDirection: "column",
        width: larguraTela*0.9,
        height: alturaTela*1,
        borderRadius: 20
    },
    header:{
        flex:0.2,
        margin:10,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems:'center'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 20
    }
    
})

export default InitialPage