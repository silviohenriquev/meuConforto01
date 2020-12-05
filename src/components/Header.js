import React, {Component} from 'react'
import{
    StyleSheet, 
    View, 
    Text,
    Image
} from 'react-native'
import commonStyles from '../commonStyles'

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Sítio do papai</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:2,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    texto:{
        fontFamily: commonStyles.fontFamily,
        alignContent: 'center'
        
    }

})


