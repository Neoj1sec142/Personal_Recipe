import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { load_recipe_by_id } from '../store/actions/recipe'
import { load_steps } from '../store/actions/step'
import { load_ingredients } from '../store/actions/ingredient'
import { useParams } from 'react-router-dom'
import RecipeCard from '../components/cards/RecipeCard'

const RecipeDetail = ({
    load_recipe_by_id, load_steps, load_ingredients,
    recipe, steps, ingredients
}) => {
    const {id} = useParams()
    useEffect(() => {if(id){ load_recipe_by_id(id) }},[])
    useEffect(() => {if(id){ load_steps(id) }},[])
    useEffect(() => {if(id){ load_ingredients(id) }},[])

    return (
        <div>
            <RecipeCard recipe={recipe} />
            <hr className='divider' />
            <p className='text-center fs-3 mt-2'>Ingredients:</p>
            <ul className='list-group'>
                {ingredients.length ? ingredients.map((item, index) => (
                <li className='list-group-item' key={index}>
                    <p className='fs-2'>{item.name} : {item.amount}</p>
                </li>)):null}
            </ul>
            <p className='text-center fs-3 mt-2'>Steps:</p>
            <ul className='list-group'>
                {steps.length ? steps.map((item, index) => (
                <li className='list-group-item' key={index}>
                    <p className='fs-2'>{item.label}</p>
                    <p className='text-muted text-1'>{item.description}</p>
                </li>)):null}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    recipe: state.recipe.recipe,
    steps: state.step.steps,
    ingredients: state.ingredient.ingredients
})

export default connect(mapStateToProps, {load_recipe_by_id, load_steps, load_ingredients})(RecipeDetail)