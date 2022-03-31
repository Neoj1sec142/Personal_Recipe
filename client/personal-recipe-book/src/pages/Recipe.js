import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'


const Recipe = () => {
    const [recipeResults, setRecipeResults] = useState([])
    
    // use effect to make the axios call
    useEffect(() => {
    const getRecipeResults = async () => {
        const recipes = await axios.get("http://localhost:3001/api/recipes", { mode: 'cors' } )
        const data = [...recipes.data.recipes]
        setRecipeResults(data)
        
      
        
    }
    getRecipeResults()
    },[])
    // const navigate = useNavigate()
    // const showRecipe = () => {
    //     navigate(recipeResults)
    // }
    // u2w1ThurLessConRendering for info
    // const handleSearchChange = () => showRecipe()

    // for(let i=0; i<recipeResults.length; i++){
    //     allRecipes[i].map((recipe) => ( ))}
    //console.log(props.data)
    
    console.log(recipeResults)
    return(
        <div className='recipe-grid'>
            <h2>Recipes:</h2>
            <RecipeCard>

                <ul>
                    {recipeResults.map((recipe) => (
                    <li>
                        <h3>Name: {recipe.name}</h3>
                        <h5>Ingredints: {recipe.ingredints}</h5>
                    </li>
                    ))}
                </ul>
            
            </RecipeCard>
        </div>
    )
}
export default Recipe