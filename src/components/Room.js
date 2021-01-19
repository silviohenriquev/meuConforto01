import React from 'react'
import {
    Text, 
    View, 
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
} from 'react-native'
import commonStyles from '../commonStyles'
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default props => {
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {props.toggleRoom(props.id)}}>
                    <View style={styles.iconContainer}>
                        {renderRoomSelectedIcon(props.roomSelected)}
                    </View>
                </TouchableWithoutFeedback>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

function renderRoomSelectedIcon(roomSelected){
    if(roomSelected){
        return(
            <View style={styles.roomSelected}>
                <FontAwesome5 name="door-open" size={alturaTela*0.04} color="#FF8C00" />    
            </View>
        )
    } else{
        return(
            <View style={styles.roomNotSelected}>
                <FontAwesome5 name="door-closed" size={alturaTela*0.04} color="black" />
            </View>
        )
    }
}
const larguraTela = Dimensions.get('window').width
const alturaTela = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text:{
        fontFamily: commonStyles.fontFamily,
        color: 'black',
        fontSize: 15,
    },
    roomSelected: {
        width: alturaTela*0.09,
        height: alturaTela*0.09,
        borderRadius: (alturaTela*0.09)/2,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: 'center',
        margin: 10,
        marginBottom: 0
    },
    roomNotSelected:{
        width: alturaTela*0.09,
        height: alturaTela*0.09,
        borderRadius: (alturaTela*0.09)/2,
        backgroundColor: "#FF8C00",
        alignItems: "center",
        justifyContent: 'center',
        margin: 10,
        marginBottom: 0
    }

})