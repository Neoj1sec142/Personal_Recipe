import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewCard from '../components/NewCard'
//import { useNavigate } from 'react-router-dom'

const ToDo = (props) => {
    const [call, setCall] = useState([])
    const [queryRate, setQueryRate] = useState('')
    const [queryComm, setQueryComm] = useState('')
    const [queryUpInput, setQueryUpInput] = useState('')
    const [queryUpComm, setQueryUpComm] = useState('')
    const [addy, setAddy] = useState('')
    const [update, setUpdate] = useState({comment: queryUpComm})
    const [task, setTask] = useState({
        rating: queryRate,
        comment: queryComm,
    })
    
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
    //  useEffect(() => {
    //     // PUT request using axios inside useEffect React hook
    //     //const article = { title: 'React Hooks PUT Request Example' };
        
    //     handleUpdateClick()
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    const handleUpdateClick = async (e) => {
        setUpdate({
            comment: queryUpComm,
    })
    await axios.put(`http://localhost:3001/update-comment/${addy.value}`,  update)
        .then(response => console.log(response.data.updatedAt));
    }
    
      
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
    const handleUpdate = (e) => {
        setQueryUpInput(e.target.value)
    }
    const handleUpdateAddy = (e) => {
        setAddy(e.target.value)
    }
      
    return(
        <div className="todo">
            <input type='idQuery' onChange={(e) => {handleId(e)}}></input>
            <button type='submit' onClick={(e) => {removeClick(e)}} />
            <div>
            <NewCard>
                <ul>
                    {call.map((com)=>( 
                    <li>
                        
                        <h2>{com.comment}{com.rating}{com._id}</h2>
                        <div>
                            <input className="rate-input"
                                    type="text"
                                    placeholder="possible id slot"
                                    value={queryRate.value}
                                    onChange={(e) => handleRate(e)}/>
                        <br />
                            <input className="comm-input"
                                    type="text"
                                    placeholder="Task Update:"
                                    value={queryComm.value}
                                    onChange={(e) => handleUpdate(e)}/>
                        <br />
                            <button className="btn"
                                    type="submit"
                                    onClick={(e) => {handleUpdateClick(e)}}>Update</button>
                        <br />
                        <br />
                            <button className="btn"
                                    type="submit"
                                    onClick={(e) => {handleUpdateAddy(e)}}>ID</button>
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