import React from 'react';


const NewCard = (props) => {
    


    return (
        <div className="comment-header">
          <h1>Task List:</h1>
          {props.children}
        </div>
      )
}



export default NewCard

