import React, {useState, useEffect} from "react";
import Search from '../components/Search'
//import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Recipe from './Recipe'


const Main = () => {
    const [recipeResults, setRecipeResults] = useState([])


    
    
    // use effect to make the axios call
    
    const getRecipeResults = async () => {
        const recipes = await axios.get("http://localhost:3001/api/recipes", { mode: 'cors' } )
        // const data = await recipes.json()
        let allRecipes = [...recipes.data.recipes]
        //console.log(data)
        //   const allRecipes = [...recipes.data.recipes]
         setRecipeResults(allRecipes)
      
    }
    useEffect(() => {
    getRecipeResults()
    },[])

    // const allRecipes = [...recipes.data.recipes]
    // console.log(allRecipes)

    // for(let i=0; i<recipeArray.length; i++){
    //     allRecipes[i].map((recipe) => ( ))}
    return (
        <div>
            <div className="searchBar">
                <Search />
            </div>
            <div className="recipeSearch">
                <h3>Recipe List</h3>
                    
                    <Recipe 
                        // name={recipe[i].name}
                        // key={recipe[i].key}
                        // ingredients={recipe[i].ingredients}
                    />
                    
            </div>
        </div>
           
                
  
       
    )
}

export default Main