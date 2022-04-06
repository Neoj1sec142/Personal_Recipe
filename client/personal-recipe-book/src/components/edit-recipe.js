import React, { useState, useEffect } from "react"
import axios from "axios"
import RecipeForm from "./RecipeForm"

const EditRecipe = (props) => {
    const [formValues, setFormValues] = useState({
      name: '', type: '', ingredients: '', servings: '', 
      time_cook: '', temp: '', caution: '', steps: ''
    });
      
    //onSubmit handler
    const onSubmit = (recipeObject) => {
      axios
        .put(
          "http://localhost:3001/recipes/:id/" +
            props.match.params.id,
          recipeObject
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Recipe successfully updated");
            props.history.push("/recipe-list");
          } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };
    
    // Load data from server and reinitialize student form
    useEffect(() => {
      axios
        .get(
          "http://localhost:3001/recipes/update-recipe/:id" 
          + props.match.params.id
        )
        .then((res) => {
          const { name, type, servings, ingredients, time_cook, temp, caution,  steps } = res.data;
          setFormValues({ name, type, servings, ingredients, time_cook, temp, caution,  steps });
        })
        .catch((err) => console.log(err));
    }, []);
    
    // Return recipe form
    return (
      <RecipeForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Update Recipe
      </RecipeForm>
    );
  };
    
  
  export default EditRecipe