import React, {useState, useEffect} from "react";


import axios from "axios"
import MainCard from "../components/MainCard";



const Main = () => {
    
    const [nameResults, setNameResults] = useState([])
    
    // use effect to make the axios call
    useEffect(() => {
    const getNameResults = async () => {
        const recipes = await axios.get("http://localhost:3001/api/recipes/", { mode: 'cors' } )
        const data = [...recipes.data]
        console.log(data)
        setNameResults(data)  
    }
    getNameResults()
    },[])
    

    return (
        <div>
            <div className="searchBar">
                <div className="name-results">
                        <MainCard>
                        <ul>
                            {nameResults.map((rec) => (
                                <li>
                                    <h4>Name:{rec}</h4>
                                </li>
                            ))
                            }
                        </ul>
                        </MainCard>
                </div>
            </div>
        </div>
    )
}

export default Main