import React from 'react'
import { connect } from 'react-redux';
import { destroy_step } from '../../store/actions/step';


const RecipeCard = ({destroy_step, step}) => {
    const {recipe, label, description, date_created, id} = step;
    const destroy = e => {
        e.preventDefault()
        destroy_step(id)
    }
    
    return(
        <div className='d-flex justify-content-center'>
            <div className='card mt-2 mb-1 w-75 p-3'>
                <p className='card-header'>{label}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;{date_created.slice(1,10)}</p>
                <p className='fs-2'>Recipe: {recipe}</p>
                <p className='text-center text-muted'>{description}</p>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-danger m-2' onClick={e=>destroy(e)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect(null, {destroy_step})(RecipeCard)