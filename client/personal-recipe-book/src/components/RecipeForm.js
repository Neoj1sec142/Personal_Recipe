
import React, { useEffect, useState } from "react";
import axios from 'axios'


const RecipeForm = (props) => {
  const [searchNameState, setSearchNameState] = useState('')
  const [searchTypeState, setSearchTypeState] = useState('')
  const [searchIngState, setSearchIngState] = useState('')
  const [searchTimeState, setSearchTimeState] = useState('')
  const [searchTempState, setSearchTempState] = useState('')
  const [searchCauState, setSearchCauState] = useState('')
  const [searchSerState, setSearchSerState] = useState('')
  const [searchStepState, setSearchStepState] = useState('')
  const [recipeId, setRecipeId] = useState('')
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

    const handleChange = (e) => {
      setNewBody({
        name: searchNameState,
        type: searchTypeState,
        ingredients: searchIngState,
        time_cook: searchTimeState,
        temp: searchTempState,
        caution: searchCauState,
        servings: searchSerState,
        steps: searchStepState
      })
      console.log(newBody)
    }
  
  useEffect(() => {
      // POST request using axios inside useEffect hook
      const recipe = { newBody };
      axios.post('http://localhost:3001/recipes', recipe)
          .then(response => setRecipeId(response.data.id));
  
  }, []);
  
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
   
    return (
      <div className="form-wrapper">
       <form type='input'>
         <input type="text" 
                value={searchNameState} 
                placeholder="New Recipe Name"
                onChange={(e) => setSearchNameState(e.target.value)}></input>
         <input type="text" 
                value={searchTypeState} 
                placeholder="Type"
                onChange={(e) => setSearchTypeState(e.target.value)}></input>
         <input type='text' 
                value={searchIngState} 
                placeholder="Ingredients"
                onChange={(e) => setSearchIngState(e.target.value)}></input>
         <input type="text" 
                value={searchTimeState} 
                placeholder="Time Cook"
                onChange={(e) => setSearchTimeState(e.target.value)}></input>
         <input type="text" 
                value={searchTempState} 
                placeholder="Temp"
                onChange={(e) => setSearchTempState(e.target.value)}></input>
         <input type="text" 
                value={searchCauState} 
                placeholder="Caution"
                onChange={(e) => setSearchCauState(e.target.value)}></input>
         <input type="text" 
                value={searchSerState}
                placeholder="Servings"
                onChange={(e) => setSearchSerState(e.target.value)}></input>
         <input type="text" 
                value={searchStepState} 
                placeholder="Directions"
                onChange={(e) => setSearchStepState(e.target.value)}></input>
         <button type="submit" 
                  onClick={(e) => {
                      handleChange()}}></button>
       </form>
      </div>
    );
  };
    
  export default RecipeForm