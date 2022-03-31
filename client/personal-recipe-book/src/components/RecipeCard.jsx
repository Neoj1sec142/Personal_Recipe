

const RecipeCard = (props) => {

    return (
        <div className="right">
          <h1>Recipes:</h1>
          {props.children}
        </div>
      )
}

export default RecipeCard