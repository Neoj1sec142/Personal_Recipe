import './App.css';
// import for main page
import Footer from './components/Footer';
import Nav from './components/Nav'
import Search from './components/Search';
import Main from './pages/Main'
// imports for react hooks and axios
import React, { useState, useEffect } from 'react'
import { Route, Routes, } from 'react-router-dom';
import axios from 'axios'
// imports for components and pages
import About from './pages/About.js'
import Recipe from './pages/Recipe'
import ViewRecipes from './pages/ViewRecipes'






function App() {
  // use start to search/set through axios call
  const [ recipeResult, setRecipeResult ] = useState({})
  // use effect to make the axios call
  useEffect(() => {
    const getRecipeResults = async () => {
      const recipe = await axios.get("http://localhost:3001/api/recipes", { mode: 'cors' } )
      console.log(recipe.data)
        setRecipeResult(recipe.data)
    }
    getRecipeResults()
  },[])


  return (
    <div className="App">
      <Nav className ="Nav"/>
      <Search />
      <div className='search-res'>
        {`${recipeResult.value}`}
      </div>
      <div className='AppMain'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />}  />
          <Route path='/recipes/:id' element={<Recipe  />} />
          <Route path='/pages/ViewRecipes.js' element={<ViewRecipes />} />
        </Routes> 
      </div>
    <Footer />
    </div>
  );
}

export default App;
