import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component{
    state = {
        email: '',
        password: '',
    }

    login = () => {
        this.props.navigation.navigate('InitialPage')
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}/>
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Página Inicial')} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar nova conta...</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: 'orange'
    },
    buttomText:{
        fontSize: 20,
        color: '#fff'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

export default Login