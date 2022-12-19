import React from 'react'
import { connect } from 'react-redux';
import {destory_ingredient} from '../../store/actions/ingredient'

const IngredientCard = ({destory_ingredient, ingredient}) => {
    const {recipe, name, description, amount, date_created, id} = ingredient;
    const destroy = e => {
        e.preventDefault()
        destory_ingredient(id)
    }

    return(
        <div className='d-flex justify-content-center'>
            <div className='card mt-2 mb-1 w-75 p-3'>
                <p className='card-header'>{name}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;{date_created}</p>
                <p className='fs-2'>Amount: {amount} &nbsp;|&nbsp; Recipe: {recipe}</p>
                <p className='text-center text-muted'>{description}</p>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-danger' onClick={e=>destroy(e)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect(null, {destory_ingredient})(IngredientCard)
