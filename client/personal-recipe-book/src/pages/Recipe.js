import React from 'react'
import { useNavigate } from "react-router-dom"


const Recipe = (props) => {
    let navigate = useNavigate()
    
    const showRecipe = (props) => {
        navigate(`${props._id}`)
    }
    return (
        <div className="recipe-card" >
            <div onClick={showRecipe}>
                <h3>Name: {props.name}</h3>
                <div className='info' >
                    <p>
                        Time Cook: {`${props.time_cook}`}
                        Ingredients: {`${props.ingredients}`}
                        Directions: {`${props.steps}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recipe

