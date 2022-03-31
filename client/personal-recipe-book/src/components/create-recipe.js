import React, { useState, useEffect } from "react"
import axios from 'axios'
import RecipeForm from "./RecipeForm"

const CreateRecipe = () => {
    const [formValues, setFormValues] = 
      useState({ name: '', type: '', ingredients: '', servings: '', 
      time_cook: '', temp: '', caution: '', steps: '' })
    // onSubmit handler
    const onSubmit = recipeObject => {
      axios.post(
        "http://localhost:3001/api/savedata/", 
      recipeObject)
        .then(res => {
          if (res.status === 200)
            alert('Recipe successfully created')
          else
            Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }
      
    // Return student form
    return(
      <RecipeForm initialValues={formValues} 
        onSubmit={onSubmit} 
        enableReinitialize>
        Create Student
      </RecipeForm>
    )
  }
    
  // Export CreateStudent Component
  export default CreateRecipe