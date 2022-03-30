import React, {useState, useEffect} from "react";
import Search from '../components/Search'

import axios from "axios"
import Recipe from './Recipe'
import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";


const Main = () => {
    const [recipeResults, setRecipeResults] = useState([])


    
   
    // use effect to make the axios call
    useEffect(() => {
    const getRecipeResults = async () => {
        const recipes = await axios.get("http://localhost:3001/api/recipes", { mode: 'cors' } )
        for(let i=0; i<=recipes.data.recipes.length; i++){
        setRecipeResults(recipes.data.recipes[i])
        
        
        }
    }
    
    getRecipeResults()
    },[])
    // const navigate = useNavigate()
    console.log(recipeResults)
    // const showRecipe = () => {
    //     navigate(recipes.data._id)
    // }

    // const allRecipes = [...recipes.data.recipes]
    // console.log(allRecipes)

    // for(let i=0; i<recipeArray.length; i++){
    //     allRecipes[i].map((recipe) => ( ))}
    return (
        <div>
            <div className="searchBar">
            <Search />
            <div className="recipeSearch">
                <h3>Recipe List</h3>
                   {recipeResults.map((recipe) => (
                    <Recipe 
                        name={recipe.data.recipes}
                        key={recipe.key}
                        ingredients={recipe.ingredients}
                    />
                    ))}
            </div>
            </div>
        </div>
           
                
  
       
    )
}

export default Main