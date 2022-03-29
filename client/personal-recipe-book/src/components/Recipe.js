import React from 'react'
import { useNavigate } from "react-router-dom"


const Recipe = (props) => {
    let navigate = useNavigate()
    
    const showRecipe = () => {
        navigate(`${props.key}`)
    }
    return (
        <div className="recipe-card" >
            <div onClick={showRecipe}>
                <h3>{props.name}</h3>
                <div className='info' >
                    <p>
                        {`${props.time_cook}
                        ${props.ingredients}
                        ${props.steps}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recipe

