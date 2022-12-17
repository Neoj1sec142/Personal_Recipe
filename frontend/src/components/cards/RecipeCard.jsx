import React from 'react'
// Models : Recipe Ingredient Step

const RecipeCard = ({recipe}) => {
    const {title, description, oven_preheat, meal_type, time_cook, serves, date_created} = recipe;
    return(
        <div className='d-flex justify-content-center'>
            <div className='card mt-2 mb-1 w-75 p-3'>
                <p className='card-header'>{title ? title : null}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;{date_created}</p>
                <p className='fs-2'>Oven Preheat? {oven_preheat} &nbsp;|&nbsp; Type: {meal_type}</p>
                <p className='text-center text-muted'>{description}</p>
                <p className='fs-4'>Time Cook: {time_cook} &nbsp;|&nbsp; Serves: {serves}</p>
                <h7 className='card-text'>from_kitchen_of</h7>
            </div>
        </div>
    )
}
export default RecipeCard
