import React from 'react'



const Recipe = (props) => {
    console.log(props.data)
    

    return(
        <div className='recipe-search-grid'>
            {
                props.recipes.map((recipe) =>(
                    <div key={recipe.id} className="card">
                        <h3>{recipe.name}</h3>
                        <ul>
                            <li>Type: {recipe.type}</li>
                            <li>Ingredients: {recipe.ingredients}</li>
                            <li>Servings{recipe.servings}</li>
                            <li>Time Cook:{recipe.time_cook}</li>
                            <li>Temp: {recipe.temp}</li>
                            <li>Caution: {recipe.caution}</li>
                            <li>Directions: {recipe.steps}</li>
                        </ul>
                    </div>
                ))

            }
        </div>
    )
}
export default Recipe