
const SearchCard = (props) => {

    return (
        <div className="recipe-header">
            
          <h1> Search Recipes:</h1>
          {props.children}
        </div>
      )
}

export default SearchCard