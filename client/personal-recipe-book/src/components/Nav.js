import { Link } from 'react-router-dom'


const Nav = () => {

  return (
    <header>
      <nav>
        <Link to='../pages/Main.js'>Home</Link>
        <Link to='../pages/About.js'>About</Link>
        <Link to='../pages/Recipe.js'>Recipes</Link>
        <Link to='../pages/NewRecipe.js'>New Recipe</Link>
      </nav>
    </header>
  )
}

export default Nav