/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_RECIPES_SUCCESS, LOAD_RECIPE_SUCCESS, 
    LOAD_RECIPES_FAIL, LOAD_RECIPE_FAIL, 
    UPLOAD_RECIPE_FAIL, UPLOAD_RECIPE_SUCCESS,
    DESTROY_RECIPE_SUCCESS, DESTROY_RECIPE_FAIL
} from '../types'

const initialState = {
    recipes: [],
    recipe: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case UPLOAD_RECIPE_SUCCESS:
        case LOAD_RECIPES_SUCCESS:
            return{
                ...state,
                recipes: payload
            }
        case LOAD_RECIPE_SUCCESS:
            return{
                ...state,
                recipe: payload
            }
        case DESTROY_RECIPE_SUCCESS:
        case DESTROY_RECIPE_FAIL:
        case UPLOAD_RECIPE_FAIL:
        case LOAD_RECIPE_FAIL:
        case LOAD_RECIPES_FAIL:
            return {...state}
        default:
            return state
    }
}