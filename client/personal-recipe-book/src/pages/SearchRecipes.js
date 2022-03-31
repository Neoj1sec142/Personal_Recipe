import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchCard from '../components/SearchCard'

const SearchRecipes = (props) => {
  const [searchResults, setSearchResults] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

    const navigate = useNavigate()
    
    useEffect(() => {
      const getSearchResults = async () => {
            const recipe = await axios.get(`http://localhost:3001/recipes/:id`, { mode: 'cors' } )
            setSearchResults(recipe)
      }
      getSearchResults()
      },[])

      const handleClick = () => {
        navigate(searchResults._id)
        setSearchQuery('')
        }

  return (
    <div className="search-recipes-grid">
       <input type="text" 
                value={searchQuery} 
                placeholder="Search by ID"
                onChange={(e) => setSearchQuery(e.target.value)}></input>
         <button type="submit" 
                  onClick={(e) => handleClick}></button>
            <SearchCard>
                <ul>
                    
                    <li>
                        <h4>Name: {searchResults.name}</h4>
                        <h6>Type: {searchResults.type}</h6>
                        <h6>Servings: {searchResults.servings}</h6>
                        <h6>Time Cook: {searchResults.time_cook}</h6>
                        <h6>Temp: {searchResults.temp}</h6>
                        <h6>Caution: {searchResults.caution}</h6>
                        <h6>Directions: {searchResults.steps}</h6>
                        
                    </li>
                    
                </ul>
            </SearchCard>
        </div>
  )
}

export default SearchRecipes
