import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { DataContext } from '../components/DataContext'


const Recipe = () => {
    const [recipeResults, setRecipeResults] = useState([])
    const [removeId, setRemoveId] = useState('')
    
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
    
    const removeClick = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:3001/recipes/${removeId}`)
                     
        //window.location.reload(); 
    }
    const handleRemove = (e) => {
        setRemoveId(e.target.value)
    }

    return(
        <div className='recipe-grid'>
            <header>
            <input type="text" 
                    value={removeId.value}
                    placeholder="Remove ID"        
                    onChange={(e) => {handleRemove(e)}} /><br/>
            <button type='delete' onClick={(e) => {removeClick(e)}} />
            </header>
            <DataContext.Provider value={{ recipeResults, setRecipeResults }}>
            <RecipeCard>
                <ul>
                    {recipeResults.map((recipe) => (
                    <li>
                        <h4>Name: {recipe.name}</h4>
                        <h6>Type: {recipe.type}</h6>
                        <h6>Servings: {recipe.servings}</h6>
                        <h6>Time Cook: {recipe.time_cook}</h6>
                        <h6>Temp: {recipe.temp}</h6>
                        <h6>Caution: {recipe.caution}</h6>
                        <h6>Directions: {recipe.steps}</h6>
                        <h6>ID: {recipe._id}</h6>
                        
                    </li>
                    ))}
                </ul>
            </RecipeCard>
            </DataContext.Provider>
        </div>
    )
}
export default Recipe