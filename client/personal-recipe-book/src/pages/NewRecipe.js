//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import NewCard from '../components/NewCard'


const NewRecipe = (props) => {

    let [newBody, setNewBody] = useState({
        'name': '',
        'type': '',
        'ingredients': '',
        'servings': '',
        'time_cook': '',
        'temp': '',
        'caution': '',
        'steps': ''
    })
    let [search, setSearch] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        if (!newBody) {
          alert('Entry Needed')
        } else {
          setNewBody(e.target.value)
        }
        setSearch('')
    }




    // const navigate = useNavigate();
    // const showRecipe = () => {
    //     navigate(recipeResults.data._id)
    // }
    // u2w1ThurLessConRendering for info
    const handleChange = () => {}
    const handleSubmit = () => {
        let databody = {
            'name': search.state.nameIn,
            'type': search.state.typeIn,
            'ingredients': search.state.ingredientsIn,
            'servings': search.state.servingsIn,
            'time_cook': search.state.time_cookIn,
            'temp': search.state.tempIn,
            'caution': search.state.cautionIn,
            'steps': search.state.stepsIn
        }
        return axios.post("http://localhost:3001/api/recipes/", {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type' : 'application/json'
            },
        } , { mode: 'cors' })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return(
        // <div className='new'>
        //     <form value='input'>
        //         <input name='new_name' value='name' placeholder='name' onChange={handleChange} />
        //         <input name='new_type' value='type' placeholder='name' />
        //         <input name='new_ingredients' value='ingredients' placeholder='ingredients' />
        //         <input name='new_servings' value='servings' placeholder='servings' />
        //         <input name='new_time_cook' value='time_cook' placeholder='time_cook' />
        //         <input name='new_temp' value='temp' placeholder='temp' />
        //         <input name='new_caution' value='caution' placeholder='caution' />
        //         <input name='new_steps' value='steps' placeholder='steps' />
        //         <div>
                //  <form onSubmit={this.handleSubmit()}>
                //     <label>
                //         Name
                //         <input type="text" name="name" value={this.nameIn} onChange={this.handleNameChange}/>
                //     </label>
                //     <label>
                //         quote
                //         <input type="text" name="quote" value={this.quoteIn} onChange={this.handleQuoteChange}/>
                //     </label>
                //         <input type="submit" value="Add to DB" />
                // </form>  
        //         </div>
        //     </form>
        // </div>
        <div className="new">
            <h2>Add a Recipe:</h2>
            <br />
            <div>
                <NewCard>
                <ul>
                    <li>
                <input
                    className="input"
                    id='name'
                    type="text"
                    placeholder="name"
                    value={props.name}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='type'
                    type="text"
                    placeholder="type"
                    value={props.type}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='ingredients'
                    type="text"
                    placeholder="ingredients"
                    value={props.ingredients}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='servings'
                    type="text"
                    placeholder="servings"
                    value={props.servings}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='time_cook'
                    type="text"
                    placeholder="time_cook"
                    value={props.time_cook}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='temp'
                    type="text"
                    placeholder="temp"
                    value={props.temp}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='caution'
                    type="text"
                    placeholder="caution"
                    value={props.caution}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    className="input"
                    id='steps'
                    type="text"
                    placeholder="steps"
                    value={props.steps}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="btn"
                    type="submit"
                    value="Add"
                    onClick={handleSubmit}
                />
                {/* <input
                    className="btn"
                    type="submit"
                    value="Withdraw"
                    onClick={removeClick}
                /> */}
                </li>
                ))}
                </ul>
                </NewCard>
            </div>
        </div>
    )
}

export default NewRecipe

    // name: "",
    // type: '',
    // ingredients: "",
    // servings: "",
    // time_cook: "",
    // temp: "",
    // caution: "",
    // steps: ""