import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import Equipament from './Equipament'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'

export default class EquipamentList extends Component {

    render() {
        return(
            <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    equipamentList: {
        flex: 1,
    },
    addEquip: {
        backgroundColor: commonStyles.colors.grafite,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        // flex: 1,
        alignItems: 'flex-end',
        margin: 20
    }
})

