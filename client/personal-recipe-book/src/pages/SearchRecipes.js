import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchCard from '../components/SearchCard'
import { DataContext } from '../components/DataContext'

const SearchRecipes = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [search, setSearch] = useState({})
  
  const [final, setFinal] = useState({})
  
    const navigate = useNavigate()
    const handleClick = () => {
      setSearch(searchQuery)
      setFinal(searchResults[search])
      navigate(searchResults)
      setSearchQuery('')
    }
    
    useEffect(() => {
      const getSearchResults = async () => {
            const recipe = await axios.get(`http://localhost:3001/api/recipes/`, { mode: 'cors' } )
            setSearchResults(recipe.data.recipes)
            
      }
        getSearchResults()
        
      },[])
      //console.log(search)
      // const handleClicks = () => {
      //   navigate(searchResults.index)
      //   setSearch(searchResults.index)
      //   console.log(searchResults)
      //   setSearchQuery('')
      // }
      
      console.log(final)
      
  return (
    <div className="search-recipes-grid">
       <input type="text" 
                value={searchQuery} 
                placeholder="Search by ID"
                onChange={(e) => setSearchQuery(e.target.value)}></input>
         <button type="submit" 
                  onClick={(e) => handleClick(e)}></button>
            <SearchCard>
                <ul>
                    
                    <li>
                        <h4>Name: {final.name}</h4>
                        <h6>Type: {final.type}</h6>
                        <h6>Servings: {final.servings}</h6>
                        <h6>Time Cook: {final.time_cook}</h6>
                        <h6>Temp: {final.temp}</h6>
                        <h6>Caution: {final.caution}</h6>
                        <h6>Directions: {final.steps}</h6>
                        
                    </li>
                    
                </ul>
            </SearchCard>
        </div>
  )
}

export default SearchRecipes
