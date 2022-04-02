import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewCard from '../components/NewCard'
//import { useNavigate } from 'react-router-dom'

const ToDo = (props) => {
    const [call, setCall] = useState([])
    const [task, setTask] = useState({
        rating: '',
        comment: '',
    })
    const [queryRate, setQueryRate] = useState('')
    const [queryComm, setQueryComm] = useState('')
    const [idQuery, setIdQuery] = useState('')

    useEffect(() => {
        const getComments = async () => {
            const comments = await axios.get("http://localhost:3001/todo", { mode: 'cors' } )
            const data = [...comments.data]
            setCall(data)
            
        }
        getComments()
        },[])
        const handleClick = (e) => {
            setTask({
                   rating: queryRate,
                   comment: queryComm,
                   
            });
            axios.post('http://localhost:3001/todo',{data: task})
                   .then(response => {
                          console.log("Status: ", response.status);
                          console.log("Data: ", response.data);
                   }).catch(error => {
                          console.error('Something went wrong', error) 
                   })
            console.log(task)
            e.preventDefault();                
     }

    // const handleClick = (e) => {
    //     setTask({
    //         rating: {queryRate},
    //         comment: {queryComm},
    //     })
      
    //   axios.post('http://localhost:3001/todo', {data: task.data})
    //                  .then(response => {
    //                         console.log("Status: ", response.status);
    //                         console.log("Data: ", response.data);
    //                  }).catch((error) => {
    //                         console.error('Something went wrong', error) 
    //                  })
    //                  e.preventDefault()
    // //   setQueryRate('')
    // //   setQueryComm('')
    // }
    
    const removeClick = (e) => {
        console.log(e.target)
        axios.delete(`http://localhost:3001/todo/${idQuery}`, { data:  task })
                     .then(response => {
                            console.log("Status: ", response.status);
                            console.log("Data: ", response.data);
                     }).catch((error) => {
                            console.error('Something went wrong', error) 
                     })
        e.preventDefault()
    }
    const handleId = (e) => {
        setIdQuery(e.target.value)
    }
    const handleComm = (e) => {
        setQueryComm(e.target.value)
    }
    const handleRate = (e) => {
        setQueryRate(e.target.value)
        
    }
      
    return(
        <div className="todo">
            <input type='idQuery' onChange={(e) => {handleId(e)}}></input>
            <div>
            <NewCard>
                <ul>
                    {call.map((com)=>( 
                    <li>
                        <button type='submit' onClick={(e) => {removeClick(e)}} />
                        <h2>{com.comment}{com.rating}{com._id}</h2>
                        <div>
                            <input className="rate-input"
                                    type="text"
                                    placeholder="rate"
                                    value={queryRate.value}
                                    onChange={(e) => handleRate(e)}/>
                        <br />
                            <input className="comm-input"
                                    type="text"
                                    placeholder="Task:"
                                    value={queryComm.value}
                                    onChange={(e) => handleComm(e)}/>
                        <br />
                            <button className="btn"
                                    type="submit"
                                    onClick={(e) => {handleClick(e)}}/>
                        </div>
                    </li>
                    ))}
                </ul>
            </NewCard>
            <div>
                <input className="rate-input"
                        type="text"
                        placeholder="rate"
                        value={queryRate.value}
                        onChange={(e) => handleRate(e)}/>
                <br />
                <input className="comm-input"
                        type="text"
                        placeholder="Task:"
                        value={queryComm.value}
                        onChange={(e) => handleComm(e)}/>
                <br />
                <button className="btn"
                        type="submit"
                        onClick={(e) => {handleClick(e)}}/>
            </div>
            </div>
            <br />
            
    </div>
    )
}

export default ToDo