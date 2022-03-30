import './App.css';
// import for main page
import Footer from './components/Footer';
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
          <Route path='/' element={<Main />} />
          <Route path='./main' element={<Main />} />
          <Route path='/about' element={<About />}  />
          <Route path='/recipes/:id' element={<Recipe  />} />
          <Route path='/pages/ViewRecipes.js' element={<ViewRecipes />} />
        </Routes> 
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
