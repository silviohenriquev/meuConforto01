import React, {Component} from 'react'
import { 
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    View,
} from 'react-native'
import { color } from 'react-native-reanimated'
import WelcomePageImg from '../../assets/imgs/welcomepage.jpg'
import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'



class WelcomePage extends Component {
    render(){
        return(
            <SafeAreaView
                style={styles.container}>
                <ImageBackground
                    source={WelcomePageImg}
                    style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titulo}>Welcome!</Text>
                        <Text style={styles.subTitle}>Let's make your home</Text>
                        <Text style={styles.subTitle}>confortable</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} 
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: commonStyles.fontFamilyBold,
                                color: '#ff8c00',
                                marginBottom: 5}}>Next
                            </Text>
                            <Icon name='chevron-right' 
                                style={{
                                    color: '#ff8c00',
                                    opacity: 0.6,
                                    marginLeft: 7}}
                                size={15}/>
                            <Icon name='chevron-right'
                                style={{color: '#ff8c00',
                                }}
                            size={20}/>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textContainer: {
        flex: 0.3,
        marginTop: '20%',
        marginLeft: '05%'
    },
    buttonContainer: {
        flex:0.7,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    titulo: {
        fontFamily: commonStyles.fontFamilyBold,
        fontSize: 45,
        color: 'white'
    },
    subTitle:{
        fontFamily: commonStyles.fontFamilyLight,
        fontSize: 20,
        color: 'white'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        width: 120,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:40,
        marginBottom: 100,
    }
})

export default WelcomePage