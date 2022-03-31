

const MainCard = (props) => {

    return (
        <div className="right">
          <h1>Recipes:</h1>
          {props.name}
          {props.key}
        </div>
      )
}

export default MainCard