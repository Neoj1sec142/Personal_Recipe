import { Link } from 'react-router-dom'


const Nav = () => {

  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='../pages/About.js'>About</Link>
        <Link to='../pages/ViewRecipes.js'>Recipes</Link>
        <Link to='../pages/NewRecipe.js'>New Recipe</Link>
      </nav>
    </header>
  )
}

export default Nav