import { 
    GET_DATA,
    SET_EQPS
} from "../actions/actionTypes";

const initialState = {
    rooms: [],
    equipaments: [],
    roomSelectedId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EQPS:
            return {
                ...state,
                rooms: action.payload.rooms,
                equipaments: action.payload.equipaments,
                roomSelectedId: action.payload.roomSelectedId,
            }
        default: 
            return state
    }
}

export default reducer