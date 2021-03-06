import { Link } from 'react-router-dom'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Nav = () => {

  return (
    <header>
      <div className='nav-bar'>
        <Link to='/' style={{ color: '#FFFFFF' }} className='link'>Home</Link>
        <Link to='/About' style={{ color: '#FFFFFF' }} className='link'>About</Link>
        <Link to='/Recipe' style={{ color: '#FFFFFF' }} className='link'>Recipes</Link>
        <Link to='/SearchRecipes' style={{ color: '#FFFFFF' }} className='link'>Search Recipe</Link>
        <Link to='/NewRecipe' style={{ color: '#FFFFFF' }} className='link'>Create Recipe</Link>
        <Link to='/ToDo' style={{ color: '#FFFFFF' }} className='link'>Tasks</Link>
        <div className="Footer">
          <a href="https://www.linkedin.com/in/mark-harmon-805aa3232/" 
            className="linkedin"
            target="_blank" 
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Nav