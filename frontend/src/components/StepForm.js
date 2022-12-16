import React, {useState} from 'react'
import { connect } from 'react-redux'
import {upload_step} from '../store/actions/step'

const StepForm = ({upload_step}) => {
    const [formData, setFormData] = useState({
        recipe: '',
        label: '',
        description: ''
    })
    const {recipe, label, description} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    return (
        <div className='card shadow m-3'>
            <form className='form-group'>
                <input type='text' name='recipe' value={recipe} hidden />
                <input className='form-control' 
                    type='text' name='label' value={label} 
                    placeholder="Step Title"
                    onChange={e=>onChange(e)}/>
                <input className='form-control' 
                    type='text' name='description' value={description} 
                    placeholder="Step Procedure"
                    onChange={e=>onChange(e)}/>
            </form>
        </div>
    )
}

export default connect(null, {upload_step})(StepForm)