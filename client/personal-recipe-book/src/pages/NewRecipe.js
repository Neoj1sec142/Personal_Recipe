
import React, { useEffect, useState } from "react";
//import ReactDOM from 'react-dom';
//import axios from 'axios'


const RecipeForm = (props) => {
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
       let [newBody, setNewBody] = useState({
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
       //enter by user in form
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
       const handleClick= (e) => {
              setNewBody({
                     name: {searchTypeState},
                     type: {searchTypeState},
                     ingredients: {searchIngState},
                     time_cook: {searchTimeState},
                     temp: {searchTempState},
                     caution: {searchCauState},
                     servings: {searchSerState},
                     steps: {searchStepState},
              });
              console.log(newBody)
              e.preventDefault();  
       }
       
//     
//   useEffect(() => {
//       // POST request using axios inside useEffect hook
//       const recipe = { newBody };
//       axios.post('http://localhost:3001/recipes', recipe)
//           .then(response => setRecipeId(response.data.id));
  
//   }, []);
  
  // useEffect(() => {
  //   const handleSubmit = async () => {
  //     axios.post('', recipes)
  //       .then(response => this.setState({ recipeId: response.data.id }));
      
      
  //     setRecipeResults(data)
  //   const  = (e) => {
  //      handleChange()
  //   }
  //     handleSubmit()
  //     setSearchNameState('')
  //     setSearchTypeState('')
  //     setSearchIngState('')
  //     setSearchTimeState('')
  //     setSearchTempState('')
  //     setSearchCauState('')
  //     setSearchSerState('')
  //     setSearchStepState('')
  // },[]) 
//   onSubmit={(e) => {handleSubmit(e)}}
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
                            required
                            onChange={(e) => {handleChange(e)}} /><br/>
                      <label >
                            Type:
                     </label><br/>
                     <input type="text" 
                            value={searchTypeState.value} 
                            placeholder="Type"
                            required
                            onChange={(e) => {handleTypeChange(e)}} /><br/>
                      <label >
                            Ingredients:
                     </label><br/>
                     <input type='text' 
                            value={searchIngState.value}
                            placeholder="Ingredients"
                            required
                            onChange={(e) => {handleIngChange(e)}} /><br/>
                     <label >
                            Time Cook:
                     </label><br/>
                     <input type="text" 
                            value={searchTimeState.value}
                            placeholder="Time Cook"
                            required
                            onChange={(e) => {handleTimeChange(e)}} /><br/>
                     <label >
                            Temp:
                     </label><br/>
                     <input type="text" 
                            value={searchTempState.value}
                            placeholder="Temp"
                            required
                            onChange={(e) => {handleTempChange(e)}} /><br/>
                     <label >
                            Caution:
                     </label><br/>
                     <input type="text" 
                            value={searchCauState.value}
                            placeholder="Caution"
                            required
                            onChange={(e) => {handleCauChange(e)}} /><br/>
                      <label >
                            Caution:
                     </label><br/>
                     <input type="text" 
                            value={searchSerState.value}
                            placeholder="Servings"
                            required
                            onChange={(e) => {handleSerChange(e)}} /><br/>
                      <label >
                            Caution:
                     </label><br/>
                     <input type="text" 
                            value={searchStepState.value}
                            placeholder="Directions"
                            required
                            onChange={(e) => {handleStepChange(e)}} /><br/>
                     <button type="submit" 
                            onClick={(e) => {handleClick(e)}}></button>
       </form>
       </header>
      </div>
    );
  };
    
  export default RecipeForm