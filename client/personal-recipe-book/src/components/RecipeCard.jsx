

const RecipeCard = (props) => {

    return (
        <div className="recipe-header">
          <h1>Recipes:</h1>
          {props.children}
        </div>
      )
}

export default RecipeCard