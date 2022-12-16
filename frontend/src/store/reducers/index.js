import { combineReducers } from "redux";
import ingredient from './ingredient'
import alert from './alert'
import recipie from './recipie'
import step from './step'

export default combineReducers({
    alert,
    recipie,
    ingredient,
    step
})