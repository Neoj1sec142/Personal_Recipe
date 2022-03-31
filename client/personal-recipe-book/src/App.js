import './App.css';
// import for main page

import Nav from './components/Nav'
import Main from './pages/Main'
// imports for react hooks and axios
import React from 'react'
import { Route, Routes, } from 'react-router-dom';

// imports for components and pages
import About from './pages/About.js'
import Recipe from './pages/Recipe'
import NewRecipe from './pages/NewRecipe.js'
import SearchRecipes from './pages/SearchRecipes'
import RecipeForm from './components/RecipeForm'


function App() {

  return (
    <div className="App">
      <header>
        <Nav className ="Nav"/>
      </header>
      <main>
      <div className='AppMain'>
        
        <Routes>
          <Route index element={<Main />} />
          <Route path='/About' element={<About />}  />
          <Route path='/Recipe/' element={<Recipe  />} />
          <Route path='/SearchRecipes/' element={<SearchRecipes  />} />
          <Route path='/NewRecipe' element={<NewRecipe />} />
          <Route path='/RecipeForm' element={<RecipeForm />} />
        </Routes> 
      </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
