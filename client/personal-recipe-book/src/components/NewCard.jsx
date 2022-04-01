// import React from 'react';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import axios from 'axios'
// import NewCard from '../components/NewCard'

const NewCard = (props) => {
    


    return (
        <div className="comment-header">
          <h1>Task List:</h1>
          {props.children}
        </div>
      )
}



export default NewCard

