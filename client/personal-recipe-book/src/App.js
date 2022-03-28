import './App.css';
import Footer from './components/Footer';
import Main from './components/Main'
import { Route, Routes, } from 'react-router-dom';
import About from './components/About.js'
import React, { useState, useEffect } from 'react'
import Recipe from './components/Recipe'
import Nav from './components/Nav'

function App() {
  const [ pageState, setPageState ] = useState({})
  


  return (
    <div className="App">
    <Nav className ="Nav"/>
    <div className='AppMain'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} setPageState={setPageState} />
        <Route path='/recipes/:id' element={
          <Recipe //recipe={recipe} 
          />}
          setPageState={setPageState}
        />
      </Routes> 
      </div>
    <Footer />
    </div>
  );
}

export default App;
