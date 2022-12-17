import React from 'react'
// Models : Recipe Ingredient Step

const RecipeCard = ({step}) => {
    const {recipe, label, description, date_created} = step;
    return(
        <div className='card mt-2 mb-1'>
            <p className='card-header'>{label}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;{date_created.slice(1,10)}</p>
            <p className='fs-2'>Recipe: {recipe}</p>
            <p className='text-center text-muted'>{description}</p>
        </div>
    )
}
export default RecipeCard