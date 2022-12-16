import { CreateRecipe, GetRecipeById, GetRecipes, RemoveRecipe } from '../services/RecipeServices'
import { setAlert } from "./alert";
import {
    LOAD_RECIPIES_SUCCESS, LOAD_RECIPIES_FAIL, 
    LOAD_RECIPIE_SUCCESS, LOAD_RECIPIE_FAIL, 
    UPLOAD_RECIPIE_SUCCESS, UPLOAD_RECIPIE_FAIL,
    DESTROY_RECIPE_SUCCESS, DESTROY_RECIPE_FAIL
} from '../types'


export const upload_recipie = (recipe) => async dispatch => {
    try{
        const res = await CreateRecipe(recipe)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_RECIPIE_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Recipie Posted Successfully', 'success'))
        }else{
            dispatch({
                type: UPLOAD_RECIPIE_FAIL
            })
            dispatch(setAlert('Recipie Posting Error', 'error'))
        }
    }catch(err){
        dispatch({
            type: UPLOAD_RECIPIE_FAIL
        })
        dispatch(setAlert('Recipie Posting Error', 'error'))
    }
}
export const load_recipies = () => async dispatch => {
    
    try{
        const res = await GetRecipes()
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
    
    try{
        const res = await GetRecipeById(id)
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

export const destroy_recipe = (id) => async dispatch => {
    try{
        const res = await RemoveRecipe(id)
        if(res.status === 204 || res.statusText === "Not Found"){
            dispatch({
                type: DESTROY_RECIPE_SUCCESS
            })
        }else{
            dispatch({
                type: DESTROY_RECIPE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: DESTROY_RECIPE_FAIL
        })
    }
}