import { GetIngredientById, GetIngredients, AddIngredient, RemoveIngredient } from '../services/IngredientServices'
import {
    LOAD_INGREDIENTS_SUCCESS, LOAD_INGREDIENTS_FAIL,
    LOAD_INGREDIENT_SUCCESS, LOAD_INGREDIENT_FAIL,
    UPLOAD_INGREDIENT_SUCCESS, UPLOAD_INGREDIENT_FAIL,
    DESTROY_INGREDIENT_SUCCESS, DESTROY_INGREDIENT_FAIL
} from '../types'
export const load_ingredients = (recipe_id) => async dispatch => {
    try{
        const res = await GetIngredients(recipe_id)
        if(res.status === 200){
            dispatch({
                type: LOAD_INGREDIENTS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_INGREDIENTS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_INGREDIENTS_FAIL
        })
    }
}

export const load_ingredient_by_id = (id) => async dispatch => {
    try{
        const res = await GetIngredientById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_INGREDIENT_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_INGREDIENT_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_INGREDIENT_FAIL
        })
    }
}

export const upload_ingredient = (recipe_id, ingredient) => async dispatch => {
    try{
        const res = await AddIngredient(recipe_id, ingredient)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_INGREDIENT_SUCCESS,
                payload: res.data
            })
        
        }else{
            dispatch({
                type: UPLOAD_INGREDIENT_FAIL
            })
        
        }
    }catch(err){
        dispatch({
            type: UPLOAD_INGREDIENT_FAIL
        })
        
    }
}
export const destory_ingredient = (id) => async dispatch => {
    try{
        const res = await RemoveIngredient(id)
        if(res.status === 204 || res.statusText === "Not Found"){
            dispatch({
                type: DESTROY_INGREDIENT_SUCCESS
            })
        }else{
            dispatch({
                type: DESTROY_INGREDIENT_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: DESTROY_INGREDIENT_FAIL
        })
    }
}