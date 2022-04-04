
import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import axios from 'axios'


const NewRecipe = () => {
       // use state for input bars
       const [searchNameState, setSearchNameState] = useState('')
       const [searchTypeState, setSearchTypeState] = useState('')
       const [searchIngState, setSearchIngState] = useState('')
       const [searchTimeState, setSearchTimeState] = useState('')
       const [searchTempState, setSearchTempState] = useState('')
       const [searchCauState, setSearchCauState] = useState('')
       const [searchSerState, setSearchSerState] = useState('')
       const [searchStepState, setSearchStepState] = useState('')
       //use state for axios post
       const [recipe, setNewBody] = useState({
              name: '',
              type: '',
              ingredients: '',
              time_cook: '',
              temp: '',
              caution: '',
              servings: '',
              steps: ''
       })
       //functions to update state of newBody
       //enter by user input
       const handleChange = (e) => {
              setSearchNameState(e.target.value);
       }
       const handleTypeChange = (e) => {
              setSearchTypeState(e.target.value);
       }
       const handleIngChange = (e) => {
              setSearchIngState(e.target.value);
       }
       const handleTimeChange = (e) => {
              setSearchTimeState(e.target.value);
       }
       const handleTempChange = (e) => {
              setSearchTempState(e.target.value);
       }
       const handleCauChange = (e) => {
              setSearchCauState(e.target.value);
       }
       const handleSerChange = (e) => {
              setSearchSerState(e.target.value);
       }
       const handleStepChange = (e) => {
              setSearchStepState(e.target.value);
       }
       const handleClick = (e) => {
              setNewBody({
                     name: searchTypeState,
                     type: searchTypeState,
                     ingredients: searchIngState,
                     time_cook: searchTimeState,
                     temp: searchTempState,
                     caution: searchCauState,
                     servings: searchSerState,
                     steps: searchStepState,
              });
              axios.post('http://localhost:3001/recipes',{data: recipe})
                     .then(response => {
                            console.log("Status: ", response.status);
                            console.log("Data: ", response.data);
                     }).catch(error => {
                            console.error('Something went wrong', error) 
                     })
              console.log(recipe)
              e.preventDefault();                
       }

    return (
       <div className="form-wrapper">
              <header className="New-header">
              <h4>Enter your new recipe:</h4>
              <form >
                     <label >
                            Name:
                     </label><br/>
                     <input type="text" 
                            value={searchNameState.value}
                            placeholder="New Recipe Name"
                            path="name"
                            
                            onChange={(e) => {handleChange(e)}} /><br/>
                      <label >
                            Type:
                     </label><br/>
                     <input type="text" 
                            value={searchTypeState.value} 
                            path="type"
                            placeholder="Type"
                            
                            onChange={(e) => {handleTypeChange(e)}} /><br/>
                      <label >
                            Ingredients:
                     </label><br/>
                     <input type='text' 
                            value={searchIngState.value}
                            path="ingredients"
                            placeholder="Ingredients"
                            
                            onChange={(e) => {handleIngChange(e)}} /><br/>
                     <label >
                            Time Cook:
                     </label><br/>
                     <input type="text" 
                            value={searchTimeState.value}
                            path="time_cook"
                            placeholder="Time Cook"
                            
                            onChange={(e) => {handleTimeChange(e)}} /><br/>
                     <label >
                            Temp:
                     </label><br/>
                     <input type="text" 
                            value={searchTempState.value}
                            path="temp"
                            placeholder="Temp"
                            
                            onChange={(e) => {handleTempChange(e)}} /><br/>
                     <label >
                            Caution:
                     </label><br/>
                     <input type="text" 
                            value={searchCauState.value}
                            path="caution"
                            placeholder="Caution"
                            
                            onChange={(e) => {handleCauChange(e)}} /><br/>
                      <label >
                            Caution:
                     </label><br/>
                     <input type="text" 
                            value={searchSerState.value}
                            path="servings"
                            placeholder="Servings"
                            
                            onChange={(e) => {handleSerChange(e)}} /><br/>
                      <label >
                            Caution:
                     </label><br/>
                     <input type="text" 
                            value={searchStepState.value}
                            path="steps"
                            placeholder="Directions"
                            
                            onChange={(e) => {handleStepChange(e)}} /><br/>
                     <button type="submit" 
                            onClick={(e) => {handleClick(e)}}>Create</button>
       </form>
       </header>
      </div>
    );
  };
    
  export default NewRecipe