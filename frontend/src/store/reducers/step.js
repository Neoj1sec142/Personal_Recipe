/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_STEPS_SUCCESS, LOAD_STEP_SUCCESS, 
    LOAD_STEPS_FAIL, LOAD_STEP_FAIL, 
    UPLOAD_STEP_FAIL, UPLOAD_STEP_SUCCESS
} from '../types'

const initialState = {
    steps: [],
    step: {}
}

export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case UPLOAD_STEP_SUCCESS:
        case LOAD_STEPS_SUCCESS:
            return{
                ...state,
                steps: payload
            }
        case LOAD_STEP_SUCCESS:
            return{
                ...state,
                step: payload
            }
        case UPLOAD_STEP_FAIL:
        case LOAD_STEP_FAIL:
        case LOAD_STEPS_FAIL:
            return {...state}
        default:
            return state
    }
}