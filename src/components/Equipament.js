import React from 'react'
import {
    Text, 
    View, 
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'
import commonStyles from '../commonStyles'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

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

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: commonStyles.colors.cinza,
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 30,
        marginVertical: 5,
        backgroundColor: commonStyles.colors.branco,
        height: 100 
    },titleContainer: {
        flex:6,
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginHorizontal: 20,
        marginVertical:10,
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 25,
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