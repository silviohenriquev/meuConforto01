import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native'
import Equipament from './Equipament'
import commonStyles from '../commonStyles'

export default class EquipamentList extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Devices</Text>
                <View style={styles.equipamentList}>
                    <FlatList 
                        data={this.props.equipaments}
                        renderItem={({item}) => <Equipament
                            togglePower={this.props.togglePower}
                            {...item}/>}/>
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
    },
    title:{
        marginLeft: larguraTela*0.03,
        fontFamily: commonStyles.fontFamilyBold,
        fontSize: 15,
    },
    equipamentList: {
        flex: 1,
        margin: larguraTela*0.02,
        marginTop: 0
    }
})

