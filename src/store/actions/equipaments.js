import { 
    GET_DATA,
    SET_EQPS,
    ADD_DEVICE
} from "./actionTypes";
import api from '../../services/api'
import { exp } from "react-native/Libraries/Animated/src/Easing";

export const getRooms = (rooms, roomSelectedId, equipaments) => {
    return {
        type: SET_EQPS,
        payload: {
            rooms: rooms,
            roomSelectedId: roomSelectedId,
            equipaments: equipaments
        }
    }
}

export const fetchData = userId => {
    return dispatch => {
        api.get(`/users/${userId}/rooms.json`)
            .catch(err=> console.log(err))
            .then(res => {
                const data = res.data
                const rooms = []

                for (let key in data){
                    rooms.push({
                        ...data[key],
                        id: key
                    })
                }
                rooms.forEach(room => {
                    if(room.roomSelected){
                        const equipaments = []
                        const roomSelectedId = room.id
                        for(let chave in room.equipaments){
                            equipaments.push({
                                ...room.equipaments[chave],
                                id: chave
                            })
                        }
                        dispatch(getRooms(rooms, roomSelectedId, equipaments))
                    }
                })
        })
    }
}