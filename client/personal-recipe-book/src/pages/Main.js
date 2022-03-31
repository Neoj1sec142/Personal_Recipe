import React, {useState, useEffect} from "react";


import axios from "axios"
import MainCard from "../components/MainCard";
//import Recipe from './Recipe'
//import { useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";


const Main = () => {
    //const [recipeResults, setRecipeResults] = useState([])
    const [nameResults, setNameResults] = useState([])
    //const navigate = useNavigate()
    // use effect to make the axios call
    useEffect(() => {
    const getNameResults = async () => {
        const names = await axios.get("http://localhost:3001/api/recipes/", { mode: 'cors' } )
        const data = [...names.data.recipes]
        setNameResults(data)
        
      
        
    }
    getNameResults()
    },[])
    console.log(nameResults)

    return (
        <div>
            <div className="searchBar">
                {/* <input type='text' placeholder="Search Recipes" onChange={handleSearchChange} /> */}
                <div className="name-results">
                    <h3>Recipes:</h3>
                    <ul>
                        <MainCard>
                            {
                            nameResults.map((name) => (
                            <li>
                                <h4>Name: {name.name}</h4>
                                key={name.key}
                            </li>
                            ))
                            }
                        </MainCard>
                    </ul>
                </div>
            </div>
        </div>
           
               
    
       
    )
}

export default Main