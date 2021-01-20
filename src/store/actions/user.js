import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from './actionTypes'
import api from '../../services/api'

const authBaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyB90Q9nRRsvrz_iHisWNozvN5C-Hi7vUwI'


export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}
export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
    }
}

export const creatUser = user => {
    return dispatch => {
        api.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err=>console.log(err))
            .then(res=>{
                if(res.data.localId){
                    api.put(`/users/${res.data.localId}.json`,{
                        name: user.name
                    })
                        .catch(err=>console.log(err))
                        .then(res=>{
                            console.log('Usuário criado com sucesso')
                        })
                }
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}
export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        api.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err=>console.log(err))
            .then(response=>{
                if(response.data.localId){
                    api.get(`/users/${response.data.localId}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            user.password = null,
                            user.name = res.data.name
                            user.id = response.data.localId
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}