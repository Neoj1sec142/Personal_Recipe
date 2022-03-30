import React, {useState, useEffect} from "react";
import Search from '../components/Search'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Recipe from './Recipe'


const Main = () => {



    
    
    // use effect to make the axios call
    useEffect(() => {
    const getRecipeResults = async () => {
      const recipes = await axios.get("http://localhost:3001/api/recipes", { mode: 'cors' } )
      const recipeArray = [...recipes]
      console.log(recipeArray)
       // setRecipeResult(recipes.data)
    }
    getRecipeResults()
    },[])

    

    return (
        <div>
            <div className="display">
            
            </div>
                <Search 
                    
                />
                <h2>Search Results</h2>
                
            </div>
    )
}

export default Main