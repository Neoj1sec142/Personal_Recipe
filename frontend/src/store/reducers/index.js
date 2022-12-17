import { combineReducers } from "redux";
import ingredient from './ingredient'
import alert from './alert'
import recipe from './recipe'
import step from './step'

export default combineReducers({
    alert,
    recipe,
    ingredient,
    step
})