import React, {useState, useEffect} from "react";
import Search from '../components/Search'
import { Link } from "react-router-dom";
//import axios from "axios"
import Recipe from '../components/Recipe'

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState()
    const [searching, setSearching] = useState(false)

    const getSearchResults = async (e) => {
        setSearching(true)
        e.preventDefault()
        //const recipes = await axios.get("http://localhost:3001/recipes")
        setSearchResults(recipes.data)
        setSearchQuery('')
    }

    const getRecipeResults = async (e) => {
        setSearching(false)
        e.preventDefault()
        setSearchResults(e.target)
        setSearchValue('')
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const getRecipeResults = async () => {
            //const recipes = await axios.get("http://localhost:3001/recipes")
            setSearchResults(recipes.data)
        }
        getRecipeResults()
    },[])
    
    const handleValue = (e) => {
        setSearchValue(parseInt(e.target.value))
    }

    return (
        <div>
            <div className="dDisplay">
            {Recipe.map((res) => (
                <Recipe key={res._id} name={res.title} desc={res.description} />
            ))}
            </div>
            <Search 
                onSubmit1={getSearchResults}
                onSubmit2={getRecipeResults}
                onChange={handleChange}
                onCheck={handleValue}
                value1={searchQuery}
                value2={searchValue}
            />
            <h2>Search Results</h2>
            <section className="searchResults">
                {searching && searchResults.map((result) => (
                    <Link to={`recipes/${result._id}`}>
                    
                    </Link>
                ))}
                {!searching && searchResults.map((result) => (
                    <Recipe key={result.id} name={result.name} time_cook={result.time_cook} ingredients={result.ingredients} steps={result.steps}/>
                ))}
            </section>
            </div>
    )
}

export default Main