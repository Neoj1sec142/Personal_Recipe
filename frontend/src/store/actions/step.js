import { GetSteps, GetStepById, AddStep, RemoveStep } from '../services/StepServices'
import {
    LOAD_STEPS_SUCCESS, LOAD_STEPS_FAIL,
    LOAD_STEP_SUCCESS, LOAD_STEP_FAIL,
    UPLOAD_STEP_SUCCESS, UPLOAD_STEP_FAIL,
    DESTROY_STEP_SUCCESS, DESTROY_STEP_FAIL
} from '../types'
export const load_steps = (recipe_id) => async dispatch => {
    try{
        const res = await GetSteps(recipe_id)
        if(res.status === 200){
            dispatch({
                type: LOAD_STEPS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_STEPS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_STEPS_FAIL
        })
    }
}

export const load_step_by_id = (id) => async dispatch => {
    try{
        const res = await GetStepById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_STEP_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_STEP_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_STEP_FAIL
        })
    }
}

export const upload_step = (recipe_id, step) => async dispatch => {
    try{
        const res = await AddStep(recipe_id, step)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_STEP_SUCCESS,
                payload: res.data
            })
        
        }else{
            dispatch({
                type: UPLOAD_STEP_FAIL
            })
        
        }
    }catch(err){
        dispatch({
            type: UPLOAD_STEP_FAIL
        })
        
    }
}
export const destroy_step = (id) => async dispatch => {
    try{
        const res = await RemoveStep(id)
        if(res.status === 204 || res.statusText === "Not Found"){
            dispatch({
                type: DESTROY_STEP_SUCCESS
            })
        }else{
            dispatch({
                type: DESTROY_STEP_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: DESTROY_STEP_FAIL
        })
    }
}