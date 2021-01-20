import React, {Component} from 'react'

import { connect } from 'react-redux'
import { login } from '../store/actions/user'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'
import commonStyles from '../commonStyles'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-reanimated'
import googleIcon from '../../assets/imgs/google.png'


class Login extends Component{
    state = {
        name: 'Temporário',
        email: '',
        password: '',
    }

    login = () => {
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('InitialPage')
        //this.props.navigation.reset({
        //    index: 0,
        //    routes:[{
        //        name: 'InitialPage'
        //    }]
        //})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.titulo}>Welcome back!</Text>
                        <Text style={styles.subTitle}>Sign in to your account</Text>
                </View>
                <View style={styles.containerEntries}>
                    <TextInput placeholder='Email' style={styles.input}
                        autoFocus={true} keyboardType='email-address'
                        textAlign='left'
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}/>
                    <TextInput placeholder='Senha' style={styles.input}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}/>
                    <TouchableOpacity onPress={this.login} style={styles.buttom}>
                        <Text style={styles.buttomText}>Sign in with Email ID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}} style={styles.buttomGoogle}>
                        <Image source={googleIcon} style={styles.googleIcon}/>
                        <Text style={styles.buttomText}>Sign in with Google</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>Don't have an account? </Text>
                            <TouchableOpacity>
                                <Text style={styles.signUpButtom}>Sign Up</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }, 
    header:{
        flex:0.5,
        marginTop: -70,
        justifyContent: 'flex-end',
        backgroundColor: '#FF8C00',
        borderRadius: 40
    },
    containerEntries:{
        flex:0.75,
        marginTop:0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttom:{
        flexDirection:'row',
        marginTop: 30,
        marginBottom: -15,
        padding: 10,
        height: 50,
        width: '90%',
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },buttomGoogle:{
        flexDirection:'row',
        marginTop: 30,
        marginBottom: -15,
        padding: 10,
        height: 50,
        width: '90%',
        backgroundColor: '#a9a9a9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomText:{
        fontSize: 20,
        color: '#fff',
    },
    input:{
        marginTop: 20,
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 10,
    },titulo:{
        fontFamily: commonStyles.fontFamilyBold,
        
        fontSize: 25,
        marginLeft: 20,
    },
    subTitle:{
        marginTop: 5,
        marginLeft: 23,
        fontFamily: commonStyles.fontFamilyLight,
        fontSize: 15,
        marginBottom: 30,
    },
    googleIcon:{
        width: 25,
        height: 25,
        marginRight: 10
    },
    signUpContainer:{
        flexDirection:'row',
        marginTop: 40,
    },
    signUpText:{
        color: 'black',
        fontFamily: commonStyles.fontFamilyLight
    },
    signUpButtom:{
        color: 'black',
        fontFamily: commonStyles.fontFamilyBold,
        textDecorationLine: 'underline'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

//export default Login

export default connect(null, mapDispatchToProps)(Login)