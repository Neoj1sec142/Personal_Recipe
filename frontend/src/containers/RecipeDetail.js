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
            <div className='d-flex justify-content-center'>
                <ul className='list-group w-75'>
                    {ingredients.length ? ingredients.map((item, index) => (
                    <li className='list-group-item text-center' key={index}>
                        <p className='fs-2'>{item.name} : {item.amount}</p>
                    </li>)):null}
                </ul>
            </div>
            <p className='text-center fs-3 mt-2'>Steps:</p>
            <div className='d-flex justify-content-center'>
                <ul className='list-group w-75'>
                    {steps.length ? steps.map((item, index) => (
                    <li className='list-group-item' key={index}>
                        <p className='fs-2'>{item.label}</p>
                        <p className='text-muted text-1 text-center'>{item.description}</p>
                    </li>)):null}
                </ul>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <a className='btn btn-secondary m-2' href={`/add-ingredients/${id}`}>Edit Ingredients</a>
                </div>
                <div className='col d-flex justify-content-center'>
                    <a className='btn btn-secondary m-2' href={`/add-steps/${id}`}>Edit Steps</a>
                </div>
                <div className='col d-flex justify-content-center'>
                    <a className='btn btn-secondary m-2' href='/'>Back Home</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    recipe: state.recipe.recipe,
    steps: state.step.steps,
    ingredients: state.ingredient.ingredients
})

export default connect(mapStateToProps, {load_recipe_by_id, load_steps, load_ingredients})(RecipeDetail)