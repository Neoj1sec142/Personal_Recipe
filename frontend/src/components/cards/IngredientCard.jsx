import React from 'react'
// Models : Recipe Ingredient Step

const IngredientCard = ({ingredient}) => {
    const {recipe, name, description, amount, date_created} = ingredient;
    return(
        <div className='d-flex justify-content-center'>
            <div className='card mt-2 mb-1 w-75 p-3'>
                <p className='card-header'>{name}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;{date_created}</p>
                <p className='fs-2'>Amount: {amount} &nbsp;|&nbsp; Recipe: {recipe}</p>
                <p className='text-center text-muted'>{description}</p>
            </div>
        </div>
    )
}
export default IngredientCard
