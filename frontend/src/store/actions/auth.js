import Cookies from 'js-cookie'
import axios from 'axios'
import { setAlert } from './alert'
import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_FAIL, 
    LOGIN_SUCCESS,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS, 
    LOGOUT_FAIL, 
    LOGOUT_SUCCESS,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../types'

export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/accounts/authenticated`, config)
        if(res.data.error || res.data.isAuthenticated === 'error'){
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            })
        }else if (res.data.isAuthenticated === 'success'){
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: true
            })
        }else{
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
            })
        }
    }catch(err){
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: false
        })
    }
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({ username, password})
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/login`, body, config)
        if(res.data.success){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: true
            })
            dispatch(setAlert('Authenticated successfully', 'success'))
        }else{
            dispatch({
                type: LOGIN_FAIL
            })
            dispatch(setAlert('Error Authenticating', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(setAlert('Error Authenticating', 'error'))
    }
}

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({
        'withCredentials': true
    })
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/logout`, body, config)
        if(res.data.success){
            dispatch({
                type: LOGOUT_SUCCESS
            })
            dispatch(setAlert('You Have Logged Out Successfully', 'success'))
        }else{
            dispatch({
                type: LOGOUT_FAIL
            })
            dispatch(setAlert('Error Logging Out', 'error'))
        }
    }catch(err){
        dispatch({
            type: LOGOUT_FAIL
        })
        dispatch(setAlert('Error Logging Out', 'error'))
    }
}

export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({ username, password, re_password })
    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/accounts/register`, body, config)
        if (res.data.error){
            dispatch({
                type: REGISTER_FAIL
            })
            dispatch(setAlert('Error Creating Account', 'error'))
        }else{
            dispatch({
                type: REGISTER_SUCCESS
            })
            dispatch(setAlert('Account Created Successfully', 'success'))
        }
    }catch(err){
        dispatch({
            type: REGISTER_FAIL
        })
        dispatch(setAlert('Error Creating Account', 'error'))
    }
} 

export const delete_account = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    const body = JSON.stringify({
        'withCredentials': true
    })
    try{
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/accounts/delete`, config, body)
        if(res.data.success){
            dispatch({
                type: DELETE_USER_SUCCESS
            })
        }else{
            dispatch({
                type: DELETE_USER_FAIL
            }) 
        }
    }catch(err){
        dispatch({
            type: DELETE_USER_FAIL
        })
    }
}