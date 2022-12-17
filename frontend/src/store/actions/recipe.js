import { CreateRecipe, GetRecipeById, GetRecipes, RemoveRecipe } from '../services/RecipeServices'
import { setAlert } from "./alert";
import {
    LOAD_RECIPES_SUCCESS, LOAD_RECIPES_FAIL, 
    LOAD_RECIPE_SUCCESS, LOAD_RECIPE_FAIL, 
    UPLOAD_RECIPE_SUCCESS, UPLOAD_RECIPE_FAIL,
    DESTROY_RECIPE_SUCCESS, DESTROY_RECIPE_FAIL
} from '../types'


export const upload_recipe = (recipe) => async dispatch => {
    try{
        const res = await CreateRecipe(recipe)
        if(res.status === 201 || res.statusText === 'Created'){
            dispatch({
                type: UPLOAD_RECIPE_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Recipie Posted Successfully', 'success'))
        }else{
            dispatch({
                type: UPLOAD_RECIPE_FAIL
            })
            dispatch(setAlert('Recipie Posting Error', 'error'))
        }
    }catch(err){
        dispatch({
            type: UPLOAD_RECIPE_FAIL
        })
        dispatch(setAlert('Recipie Posting Error', 'error'))
    }
}
export const load_recipes = () => async dispatch => {
    
    try{
        const res = await GetRecipes()
        if(res.status === 200){
            dispatch({
                type: LOAD_RECIPES_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_RECIPES_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_RECIPES_FAIL
        })
    }
}
export const load_recipe_by_id = (id) => async dispatch => {
    
    try{
        const res = await GetRecipeById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_RECIPE_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_RECIPE_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_RECIPE_FAIL
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