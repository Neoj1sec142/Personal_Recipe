/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_INGREDIENTS_SUCCESS, LOAD_INGREDIENT_SUCCESS, 
    LOAD_INGREDIENTS_FAIL, LOAD_INGREDIENT_FAIL, 
    UPLOAD_INGREDIENT_FAIL, UPLOAD_INGREDIENT_SUCCESS
} from '../types'

const initialState = {
    ingredients: [],
    ingredient: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case UPLOAD_INGREDIENT_SUCCESS:
        case LOAD_INGREDIENTS_SUCCESS:
            return{
                ...state,
                ingredients: payload
            }
        case LOAD_INGREDIENT_SUCCESS:
            return{
                ...state,
                ingredient: payload
            }
        case UPLOAD_INGREDIENT_FAIL:
        case LOAD_INGREDIENT_FAIL:
        case LOAD_INGREDIENTS_FAIL:
            return {...state}
        default:
            return state
    }
}