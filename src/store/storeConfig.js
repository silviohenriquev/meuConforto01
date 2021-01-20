import { 
    createStore,
    applyMiddleware,
    combineReducers 
} from 'redux'
import userReducer from './reducers/user'
import equipamentsReducer from "./reducers/equipaments";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
    equipaments: equipamentsReducer
})

const storeConfig = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig
