import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'
import RecipeCard from '../components/cards/RecipeCard'
import IngredientForm from '../components/forms/IngredientForm'
import IngredientCard from '../components/cards/IngredientCard'
import { load_recipe_by_id } from '../store/actions/recipe'
import {load_ingredients} from '../store/actions/ingredient'

const AddIngredients = ({recipe, ingredients, load_recipe_by_id, load_ingredients}) => {
    const {id} = useParams()
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {
        if(id){
            load_recipe_by_id(id)
            setSubmitted(true)
        }
    }, [])
    useEffect(() => {
        if(submitted){ load_ingredients(id) } 
    },[submitted])
    

    return (
        <div className='w-full'>
            <h1 className='text-center mt-2'>Add Ingredients</h1>
            <RecipeCard recipe={recipe} setSubmitted={setSubmitted}/>
            <hr className='divider' />
            <p className='fs-3 text-center'>Ingredients:</p>
            {ingredients.length ? ingredients.map((item, index) => (
            <div key={index}>
                <IngredientCard ingredient={item} />
            </div>)) : null}
            <hr className='divider' />
            <IngredientForm  />
            <div className='d-flex justify-content-center'>
                <a href={`/add-steps/${id}`} className='btn btn-secondary' type="proceed" >Proceed to Steps</a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    recipe: state.recipe.recipe,
    ingredients: state.ingredient.ingredients
})

export default connect(mapStateToProps, {load_recipe_by_id, load_ingredients})(AddIngredients)