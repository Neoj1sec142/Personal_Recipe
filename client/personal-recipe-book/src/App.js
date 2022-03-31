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
import ViewRecipes from './pages/ViewRecipes'


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
          <Route path='./pages/ViewRecipes' element={<ViewRecipes />} />
        </Routes> 
      </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
