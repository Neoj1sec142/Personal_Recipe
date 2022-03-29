import React, {useState, useEffect} from "react";
import Search from '../components/Search'
import { Link } from "react-router-dom";
import axios from "axios"
import Recipe from './Recipe'

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    //const [searchValue, setSearchValue] = useState()
    const [searching, setSearching] = useState(false)

    // const getSearchResults = async (e) => {
    //     setSearching(true)
    //     e.preventDefault()
    //     const recipes = await axios.get("http://localhost:3001/recipes", { mode: 'cors' })
    //     console.log(recipes.data)
    //     setSearchResults(recipes.data)
    //     setSearchQuery('')
    // }

    const getRecipeResults = async (e) => {
        setSearching(false)
        e.preventDefault()
        setSearchResults(e.target)
        //setSearchValue('')
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const getRecipeResults = async () => {
            const recipes = await axios.get("http://localhost:3001/api/recipes/", { mode: 'cors' })
            console.log(recipes.data)
            setSearchResults(recipes.data)
        }
        getRecipeResults()
    },[])
    
    const handleValue = (e) => {
       // setSearchValue(parseInt(e.target.value))
    }

    return (
        <div>
            <div className="display">
            {searchResults.map((res) => (
                <Recipe 
                    key={res.key} 
                    name={res.name} 
                    time_cook={res.time_cook} 
                    ingredients={res.ingredients}
                    steps={res.steps}
                />
            ))}
            </div>
            <Search 
                onSubmit1={getRecipeResults}
                onChange={handleChange}
                onCheck={handleValue}
                value1={searchQuery}
            />
            <h2>Search Results</h2>
            <section className="searchResults">
                {searching && searchResults.map((result) => (
                    <Link to={`recipes/${result.id}`}>
                    
                    </Link>
                ))}
                {!searching && searchResults.map((result) => (
                    <Recipe key={result.key} name={result.name} time_cook={result.time_cook} ingredients={result.ingredients} steps={result.steps}/>
                ))}
            </section>
            </div>
    )
}

export default Main