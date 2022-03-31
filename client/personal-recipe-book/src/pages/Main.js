import React, {useState, useEffect} from "react";


import axios from "axios"
//import Recipe from './Recipe'
//import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";


const Main = () => {
    const [recipeResults, setRecipeResults] = useState([])
    //const navigate = useNavigate()
    // use effect to make the axios call
    useEffect(() => {
    const getRecipeResults = async () => {
        const recipes = await axios.get("http://localhost:3001/api/recipes/", { mode: 'cors' } )
        const data = [...recipes.data.recipes]
        setRecipeResults(data)
        
      
        
    }
    getRecipeResults()
    },[])
    console.log(recipeResults)
    // const showRecipe = () => {
    //     navigate(recipeResults.data._id)
    // }
    // u2w1ThurLessConRendering for info
    //const handleSearchChange = () => showRecipe(recipeResults)

    // for(let i=0; i<recipeResults.length; i++){
    //     allRecipes[i].map((recipe) => ( ))}
    return (
        <div>
            <div className="searchBar">
                {/* <input type='text' placeholder="Search Recipes" onChange={handleSearchChange} /> */}
            <div className="recipeResults">
                <h3>Recipes:</h3>
                {/* <Recipe />   */}
                    {/* {recipeResults.map((recipe) => (
                        
                        
                    ))} */}
            </div>
            </div>
        </div>
           
               
    
       
    )
}

export default Main