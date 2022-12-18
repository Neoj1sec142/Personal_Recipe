import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {load_steps} from '../store/actions/step'
import {load_recipe_by_id} from '../store/actions/recipe'
import { useParams } from 'react-router-dom'
import RecipeCard from '../components/cards/RecipeCard'
import StepForm from '../components/forms/StepForm'
import StepCard from '../components/cards/StepCard'

const AddSteps = ({load_steps, load_recipe_by_id, recipe, steps}) => {
    const [submitted, setSubmitted] = useState(false)
    const {id} = useParams()
    useEffect(() => { if(id){ load_recipe_by_id(id) }},[])
    useEffect(() => { if(id){ load_steps(id) }},[])
    
    return (
        <div className='w-full'>
            <h1 className='text-center mt-2'>Add Steps</h1>
            <RecipeCard recipe={recipe} setSubmitted={setSubmitted}/>
            <p className='fs-3 text-center'>Steps:</p>
            <hr className='divider' />
            {steps.length ? steps.map((item, index) => (
            <div key={index}>
                <StepCard step={item} />
            </div>)) : null}
            <hr className='divider' />
            <StepForm  />
            <div className='d-flex justify-content-center'>
                <a href='/' className='btn btn-success' type="proceed" >Finished</a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    recipe: state.recipe.recipe,
    steps: state.step.steps
})

export default connect(mapStateToProps, {load_steps, load_recipe_by_id})(AddSteps)