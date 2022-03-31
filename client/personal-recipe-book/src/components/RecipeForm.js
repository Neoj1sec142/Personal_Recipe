
import React, { useEffect, useState } from "react";


const RecipeForm = (props) => {
  const [searchNameState, setSearchNameState] = useState('')
  const [searchTypeState, setSearchTypeState] = useState('')
  const [searchIngState, setSearchIngState] = useState('')
  const [searchTimeState, setSearchTimeState] = useState('')
  const [searchTempState, setSearchTempState] = useState('')
  const [searchCauState, setSearchCauState] = useState('')
  const [searchSerState, setSearchSerState] = useState('')
  const [searchStepState, setSearchStepState] = useState('')
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
        "name": searchNameState,
        "type": searchTypeState,
        "ingredients": searchIngState,
        "time_cook": searchTimeState,
        "temp": searchTempState,
        "caution": searchCauState,
        "servings": searchSerState,
        "steps": searchStepState
      })
    }

  useEffect(() => {
    const handleSubmit = (e) => {
       handleChange()
    }
      setSearchNameState('')
      setSearchTypeState('')
      setSearchIngState('')
      setSearchTimeState('')
      setSearchTempState('')
      setSearchCauState('')
      setSearchSerState('')
      setSearchStepState('')
  },[]) 
   
    return (
      <div className="form-wrapper">
       <form type='input'>
         <input type="text" 
                value={searchNameState} 
                placeholder="New Recipe Name"
                onChange={setSearchNameState}></input>
         <input type="text" 
                value={searchTypeState} 
                placeholder="Type"
                onChange={setSearchTypeState}></input>
         <input type='text' 
                value={searchIngState} 
                placeholder="Ingredients"
                onChange={setSearchIngState}></input>
         <input type="text" 
                value={searchTimeState} 
                placeholder="Time Cook"
                onChange={setSearchTimeState}></input>
         <input type="text" 
                value={searchTempState} 
                placeholder="Temp"
                onChange={setSearchTempState}></input>
         <input type="text" 
                value={searchCauState} 
                placeholder="Caution"
                onChange={setSearchCauState}></input>
         <input type="text" 
                value={searchSerState}
                placeholder="Servings"
                onChange={setSearchSerState}></input>
         <input type="text" 
                value={searchStepState} 
                placeholder="Directions"
                onChange={setSearchStepState}></input>
         <button type="submit" onClick={handleChange}></button>
       </form>
      </div>
    );
  };
    
  export default RecipeForm