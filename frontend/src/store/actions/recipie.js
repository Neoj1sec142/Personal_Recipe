import Cookies from "js-cookie";
import { setAlert } from "./alert";
import {
    LOAD_RECIPIES_SUCCESS, LOAD_RECIPIES_FAIL, 
    LOAD_RECIPIE_SUCCESS, LOAD_RECIPIE_FAIL, 
    POST_RECIPIE_SUCCESS, POST_RECIPIE_FAIL
} from '../types'
import axios from 'axios'

export const post_recipie = ({
    title, from_kitchen_of, prep_time, 
    cook_time, meal_type, description
}) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({
        'withCredentials': true,
        title, from_kitchen_of, prep_time, 
        cook_time, meal_type, description
    })
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/recipies`, config, body)
        if(res.status === 200){
            dispatch({
                type: POST_RECIPIE_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Recipie Posted Successfully', 'success'))
        }else{
            dispatch({
                type: POST_RECIPIE_FAIL
            })
            dispatch(setAlert('Recipie Posting Error', 'error'))
        }
    }catch(err){
        dispatch({
            type: POST_RECIPIE_FAIL
        })
        dispatch(setAlert('Recipie Posting Error', 'error'))
    }
}
export const load_recipies = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/recipies/`, config)
        if(res.status === 200){
            dispatch({
                type: LOAD_RECIPIES_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_RECIPIES_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_RECIPIES_FAIL
        })
    }
}
export const load_recipie_by_id = (id) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/recipies/${id}`, config)
        if(res.status === 200){
            dispatch({
                type: LOAD_RECIPIE_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_RECIPIE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_RECIPIE_FAIL
        })
    }
}