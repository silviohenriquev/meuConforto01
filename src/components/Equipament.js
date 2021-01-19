import React, {Component} from 'react'
import {
    Text, 
    View, 
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
} from 'react-native'
import commonStyles from '../commonStyles'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { render } from 'react-dom'

export default props => {

    
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableWithoutFeedback
                    onPress={() => {props.togglePower(props.id)}}>
                    {renderPowerIcon(props.power)}
                </TouchableWithoutFeedback>
            </View>
            
        </View>
    )
}

function renderPowerIcon(power){
    if(power == 'on'){
        return(
            <FontAwesome name="toggle-on" size={40} color="#FF8C00" />
        )
    } if(power=='off'){
        return(
            <FontAwesome name="toggle-off" size={40} color="#FF8C00" />
        )
    }
}
const larguraTela = Dimensions.get('window').width
const alturaTela = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#eee',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 0,
        marginTop: larguraTela*0.02,
        marginBottom: 0,
        backgroundColor: '#eee',
        height: alturaTela*0.15,
        width: larguraTela*0.86,
    },titleContainer: {
        flex:6,
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginHorizontal: 20,
        marginVertical:10,
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: "black"
    },
    iconContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 10,
    }
})