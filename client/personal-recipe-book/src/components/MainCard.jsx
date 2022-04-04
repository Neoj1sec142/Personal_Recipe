import React from 'react'

const MainCard = (props) => {

    return (
        <div className="right">
          <h1>Personal Recipe Book:</h1>
              {props.children}
        </div>
      )
}

export default MainCard