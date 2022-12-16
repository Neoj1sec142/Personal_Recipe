import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {upload_ingredient} from '../store/actions/ingredient'
const IngredientForm = ({upload_ingredient}) => {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        recipe: '',
        name: '',
        description: '',
        amount: ''
    })
    const {recipe, name, description, amount} = formData;
    useEffect(() => setFormData({...formData, recipe: id}),[])
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        upload_ingredient(id, formData)
    }
    return (
        <div className='card m-3 shadow'>
            <form className='form-group' onSubmi={e=>onSubmit(e)}>
                <input type='text' name='recipe' value={recipe} hidden />
                <input className='form-control' 
                    type='text' name='name' 
                    placeholder='Name of Ingredient'
                    value={name} onChange={e=>onChange(e)} />
                <input className='form-control' 
                    type='text' name='description' 
                    placeholder='Description of Ingredient'
                    value={description} onChange={e=>onChange(e)} />
                <input className='form-control' 
                    type='text' name='amount' 
                    placeholder='Amount of Ingredient'
                    value={amount} onChange={e=>onChange(e)} />
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-success m-2' type='submit'>Submit</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-danger' type='cancel' onClick={()=>{}}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {upload_ingredient})(IngredientForm)