import React from 'react'
// Models : Recipe Ingredient Step

const RecipeCard = () => {
    return(
        <div className='card mt-3 mb-1 text-center'>
            <h2 className='card-title'>title Posted By: chef @ post_at</h2>
            <p className='card-text'>meal_type prep_time cook_time</p>
            <p className='text-muted'>description</p>
            <h7 className='card-text'>from_kitchen_of</h7>
        </div>
    )
}
export default RecipeCard