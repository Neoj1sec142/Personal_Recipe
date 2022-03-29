import './App.css';
import Footer from './components/Footer';
import Main from './pages/Main'
import { Route, Routes, } from 'react-router-dom';
import About from './pages/About.js'
import React, { useState, useEffect } from 'react'
import Recipe from './components/Recipe'
import Nav from './components/Nav'
import axios from 'axios'


function App() {
  const [ recipeResult, setRecipeResult ] = useState({})

  useEffect(() => {
    const getRecipeResults = async () => {
      const recipe = await axios.get("http://localhost:3001/recipes")
        setRecipeResult(recipe.data)
    }
    getRecipeResults()
  },[])


  return (
    <div className="App">
      <Nav className ="Nav"/>
      <div className='AppMain'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='about' element={<About />}  />
          <Route path='/recipes/:id' element={<Recipe  />} />
        </Routes> 
      </div>
    <Footer />
    </div>
  );
}

export default App;
