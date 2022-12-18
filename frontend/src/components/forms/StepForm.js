import React, {useState} from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {upload_step} from '../../store/actions/step'

const StepForm = ({upload_step, setSubmitted}) => {
    const {id} = useParams()
    const [formData, setFormData] = useState({
        recipe: '',
        label: '',
        description: ''
    })
    const {recipe, label, description} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        upload_step(id, formData)
        setSubmitted(true)
    }
    return (
        <div className='card shadow m-3'>
            <form className='form-group' onSubmit={e=>onSubmit(e)}>
                <input type='text' name='recipe' value={recipe} hidden />
                <div className='row d-flex justify-content-center'>
                    <input className='form-control m-2 w-75 p-3'
                        type='text' name='label' value={label} 
                        placeholder="Step Title"
                        onChange={e=>onChange(e)}/>
                </div>
                <div className='row d-flex justify-content-center'>
                    <input className='form-control m-2 w-75 p-3'
                        type='text' name='description' value={description} 
                        placeholder="Step Procedure"
                        onChange={e=>onChange(e)} />
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-success m-2' type='submit'>Submit</button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-danger m-2' type='cancel'>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {upload_step})(StepForm)