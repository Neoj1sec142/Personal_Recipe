import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import {upload_recipe} from '../store/actions/recipie'

const RecipieForm = ({upload_recipe}) => {
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
    }
    return (
        <div className='card m-3 shadow'>
            <form className='form-group' onSubmit={e=>onSubmit(e)}>
                <input className='form-control m-2' 
                    type='text' name='title' value={title} 
                    placeholder="Title"
                    onChange={e=>onChange(e)} />
                <textarea className='form-control m-2' 
                    type='text' name='description' value={description} 
                    placeholder="Description"
                    onChange={e=>onChange(e)} />
                <input className='form-control m-2' 
                    type='text' name='oven_preheat' value={oven_preheat} 
                    placeholder="Oven Preheat?"
                    onChange={e=>onChange(e)} />
                <select className='form-control m-2' 
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
                <input className='form-control m-2' 
                    type='number' name='time_cook' value={time_cook} 
                    placeholder="Time to Cook"
                    onChange={e=>onChange(e)} />
                <input className='form-control m-2' 
                    type='number' name='serves' value={serves} 
                    placeholder="Serves ? Ppl"
                    onChange={e=>onChange(e)} />
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

export default connect(null, {upload_recipe})(RecipieForm)