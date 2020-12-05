import React, {Component, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions
} from 'react-native'
import EquipamentList from '../components/EquipamentList'
import axios from 'axios'
import api from '../services/api'

import Header from '../components/Header'

const initialStatee = {
    equipaments: [{
            name: 'Luz 1',
            id: Math.random(),
            power: 'on'
        },{
            name: 'Luz 2',
            id: Math.random(),
            power: 'off'
        },{
            name: 'Luz 3',
            id: Math.random(),
            power: 'on'
        },{
            name: 'Luz 4',
            id: Math.random(),
            power: 'on'
        },{
            name: 'Luz 5',
            id: Math.random(),
            power: 'off'
        },{
            name: 'Luz 6',
            id: Math.random(),
            power: 'on'
        }
    ]
}

class InitialPage extends Component {

    componentDidMount = () => {
        api.get("/equipaments.json")
            .catch(err=> console.log(err))
            .then(res => {
                const rawEquipaments = res.data
                const equipaments = []
                for (let key in rawEquipaments){
                    equipaments.push({
                        ...rawEquipaments[key],
                        id: key
                    })
                }
                this.setState({equipaments})
            })
        
    }

    togglePower = equipamentId => {
        api.get(`/equipaments/${equipamentId}.json`)
            .catch(err => console.log(err))
            .then(res=>{
                let power = res.data.power
                console.log(power) 
                if(power == 'off') power='on'
                else power='off'
                api.patch(`/equipaments/${equipamentId}.json`, {power})
                    .catch(err=>console.log(err))
                    .then(res=>{
                        this.componentDidMount()
                    })
            })
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/imgs/textura01.jpg')}
                    style={styles.image} resizeMode="stretch" >
                    <View style={styles.header}>
                        <Text style={styles.titulo}>meuConforto</Text>
                    </View> 
                    <EquipamentList
                        {...this.state}
                        style={styles.equipamentList}
                        togglePower = {this.togglePower}/>
            </ImageBackground>
            </View>
        )
    }
}

function renderEquipamentList(){
    const [equipaments, setEquipaments] = React.useState([])

    React.useEffect(() => {
        api.get("/equipaments.json")
        .then(res=>{
            const rawEquipaments = res.data
            const equipaments = []
            for(let key in rawEquipaments){
            equipaments.push({
                ...rawEquipaments[key],
                id: key
            })
        }
        setEquipaments(equipaments)
        return equipaments
        })
    }, [])
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 50
    },
    equipamentList: {
        flex: 1
    },
    header:{
        flex:0.4,
        margin:50,
        marginBottom: -15,
        justifyContent: 'center',
        alignItems:'center'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 30
    }
    
})

export default InitialPage