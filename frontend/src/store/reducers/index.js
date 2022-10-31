import { combineReducers } from "redux";
import auth from './auth'
import alert from './alert'
import recipie from './recipie'

export default combineReducers({
    auth,
    alert,
    recipie
})