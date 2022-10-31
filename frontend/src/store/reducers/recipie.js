/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_RECIPIES_SUCCESS, LOAD_RECIPIE_SUCCESS, 
    LOAD_RECIPIES_FAIL, LOAD_RECIPIE_FAIL, 
    POST_RECIPIE_FAIL, POST_RECIPIE_SUCCESS
} from '../types'

const initialState = {
    recipies: [],
    recipie: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
    case POST_RECIPIE_SUCCESS:
    case LOAD_RECIPIES_SUCCESS:
        return{
            ...state,
            recipies: payload
        }
    case LOAD_RECIPIE_SUCCESS:
        return{
            ...state,
            recipie: payload
        }
    case POST_RECIPIE_FAIL:
    case LOAD_RECIPIE_FAIL:
    case LOAD_RECIPIES_FAIL:
        return {...state}
    default:
        return state
    }
}