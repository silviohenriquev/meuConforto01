import { GET_DATA, SET_EQPS } from "./actionTypes";
import api from '../../services/api'

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

export const fetchData = () => {
    return dispatch => {
        //console.log("oi")
        api.get("/rooms.json")
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