import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewCard from '../components/NewCard'
//import { useNavigate } from 'react-router-dom'

const ToDo = (props) => {
    const [call, setCall] = useState([])
    const [task, setTask] = useState({
        rating: '',
        comment: ''
    })
    const [queryRate, setQueryRate] = useState('')
    const [queryComm, setQueryComm] = useState('')

    useEffect(() => {
        const getComments = async () => {
            const comments = await axios.get("http://localhost:3001/todo", { mode: 'cors' } )
            const data = [...comments.data]
            setCall(data)
            console.log(call)
        }
        getComments()
        },[])
  
    const handleClick = (e) => {
        setTask({
            rating: {queryRate},
            comment: {queryComm},
        })
      
      axios.post('http://localhost:3001/todo', {data: task})
                     .then(response => {
                            console.log("Status: ", response.status);
                            console.log("Data: ", response.data);
                     }).catch((error) => {
                            console.error('Something went wrong', error) 
                     })
                     e.preventDefault()
    //   setQueryRate('')
    //   setQueryComm('')
    }
    
    const removeClick = (e) => {
        console.log(e.target)
        axios.delete(`http://localhost:3001/todo/${task._id.value}`, { data:  task })
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
            <div>
            <NewCard>
                <ul>
                    {call.map((com)=>( 
                    <li>
                        <button type='delete' onClick={(e) => {removeClick(e)}} />
                        <h2>{com.comment}{com.rating}</h2>
                    </li>
                    ))}
                </ul>
            </NewCard>
            </div>
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