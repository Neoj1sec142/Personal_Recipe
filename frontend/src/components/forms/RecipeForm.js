import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import {upload_recipe} from '../../store/actions/recipe'

const RecipeForm = ({upload_recipe, setSubmitted}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        oven_preheat: '',
        meal_type: '',
        time_cook: 0,
        serves: 2
    })
    const {title, description, oven_preheat, meal_type, time_cook, serves} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        upload_recipe(formData)
        setSubmitted(true)
    }
    return (
        <div className='card m-3 shadow'>
            <form className='form-group' onSubmit={e=>onSubmit(e)}>
                <div className='row d-flex justify-content-center'>
                    <input className='form-control m-2 w-75'
                        type='text' name='title' value={title} 
                        placeholder="Title"
                        onChange={e=>onChange(e)} />
                </div>
                <div className='row d-flex justify-content-center'>
                    <textarea className='form-control m-2 w-75 p-3'
                        type='text' name='description' value={description} 
                        placeholder="Description"
                        onChange={e=>onChange(e)} />
                </div>
                <div className='row d-flex justify-content-center'>
                    <input className='form-control m-2 w-75 p-3'
                        type='text' name='oven_preheat' value={oven_preheat} 
                        placeholder="Oven Preheat?"
                        onChange={e=>onChange(e)} />
                </div>
                <div className='row d-flex justify-content-center'>
                    <select className='form-control m-2 w-75 p-3'
                        type='text' name='meal_type' value={meal_type} 
                        onChange={e=>onChange(e)}>
                            <option defaultChecked>Select a Meal Type</option>
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snack</option>
                            <option>Drink</option>
                            <option>Alcohol</option>
                    </select>
                </div>
                <div className='row d-flex justify-content-center'>
                    <input className='form-control m-2 w-75 p-3' 
                        type='number' name='time_cook' value={time_cook} 
                        placeholder="Time to Cook"
                        onChange={e=>onChange(e)} />
                </div>
                <div className='row d-flex justify-content-center'>
                    <input className='form-control m-2 w-75 p-3'
                        type='number' name='serves' value={serves} 
                        placeholder="Serves ? Ppl"
                        onChange={e=>onChange(e)} />
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-success m-3' type='submit'>Submit</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-success m-3' onClick={()=>{}}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {upload_recipe})(RecipeForm)