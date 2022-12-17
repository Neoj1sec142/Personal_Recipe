import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {load_recipes} from '../store/actions/recipe'
import RecipeForm from '../components/forms/RecipeForm'
import RecipeCard from '../components/cards/RecipeCard'
import { useNavigate } from 'react-router-dom'

const NewRecipe = ({load_recipes, recipes}) => {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {load_recipes()}, [])
    
    const proceed = e => {
        e.preventDefault()
        const recipe_id = recipes.length - 1
        if(recipe_id){
            navigate(`/add-ingredients/${recipe_id}`)
        }
    }
    
    useEffect(() => {
        if(submitted){
            window.location.reload(false)
            window.scroll(0,0)
        }
    },[submitted])
    
    if(recipes){
        return (
            <div className='w-full'>
                <h1 className='text-center mt-2'>Add a New Recipe</h1>
                <RecipeForm />
                <hr className='divider' />
                {recipes.length > 1 ? recipes.map((item, index) => (
                <div key={index}>
                    <RecipeCard recipe={item} setSubmitted={setSubmitted} />
                </div>)) : null}
                <div className='row d-flex justify-content-center'>
                    <button onClick={e=>proceed(e)} 
                        className='btn btn-outline-secondary m-3 w-75'>
                        Proceed to Add Ingredients</button>
                </div>
            </div>
        )
    }else{
        return(
            <div>Loading.....</div>
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.recipe.recipes
})

export default connect(mapStateToProps, {load_recipes})(NewRecipe)