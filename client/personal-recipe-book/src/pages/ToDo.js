import React, { useState } from 'react'
import axios from 'axios'

const ToDo = (props) => {

    let [task, setTask] = useState({
        rating: '',
        comment: ''
    })
    let [queryRate, setQueryRate] = useState('')
    let [queryComm, setQueryComm] = useState('')
  
    const handleClick = (e) => {
      e.preventDefault()
      if (!task) {
        console.log('Enter Task')
      } else {
        setTask({
            rating: queryRate,
            comment: queryComm
        })
      }
      axios.post('http://localhost:3001/todo', {task})
                     .then(response => {
                            console.log("Status: ", response.status);
                            console.log("Data: ", response.data);
                     }).catch(error => {
                            console.error('Something went wrong', error) 
                     })
      setQueryRate('')
      setQueryComm('')
    }
    
    const removeClick = (e) => {
        axios.delete('http://localhost:3001/todo:id', {task})
                     .then(response => {
                            console.log("Status: ", response.status);
                            console.log("Data: ", response.data);
                     }).catch(error => {
                            console.error('Something went wrong', error) 
                     })
        e.preventDefault()
      
      
    }
    
  

    return(
        <div className="todo">

            <h2>{props.comment}{props.comment}<button type="delete" 
                            onClick={(e) => {removeClick(e)}}>X</button></h2>
            
            <br />
            <div>
                <input
                    className="rate-input"
                    type="text"
                    placeholder="rate"
                    value={queryRate.value}
                    onChange={(e) => setQueryRate(e.target.value)}
                />
            <br />
                <input
                    className="comm-input"
                    type="text"
                    placeholder="Task:"
                    value={queryComm.value}
                    onChange={(e) => setQueryComm(e.target.value)}
                />
            <br />
                <button
                    className="btn"
                    type="submit"
                    onClick={(e) => {handleClick(e)}}
                />
      </div>
    </div>
    )
}

export default ToDo