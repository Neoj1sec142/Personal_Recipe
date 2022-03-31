

const MainCard = (props) => {

    return (
        <div className="right">
          <h1>Personal Recipe Book:</h1>
          {props.name}
          {props.key}
        </div>
      )
}

export default MainCard