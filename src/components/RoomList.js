import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native'
import Room from './Room'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles'

export default class RoomList extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Environments</Text>
                <View style={styles.roomList}>
                    <FlatList 
                        horizontal={true}
                        data={this.props.rooms}
                        renderItem={({item}) => <Room
                            toggleRoom={this.props.toggleRoom}
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
    roomList: {
        flex: 1,
        margin: larguraTela*0.02,
    }
})

