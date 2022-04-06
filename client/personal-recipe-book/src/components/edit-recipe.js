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
          "http://localhost:4000/students/update-student/" +
            props.match.params.id,
          recipeObject
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Student successfully updated");
            props.history.push("/student-list");
          } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };
    
    // Load data from server and reinitialize student form
    useEffect(() => {
      axios
        .get(
          "http://localhost:4000/students/update-student/" 
          + props.match.params.id
        )
        .then((res) => {
          const { name, email, rollno } = res.data;
          setFormValues({ name, email, rollno });
        })
        .catch((err) => console.log(err));
    }, []);
    
    // Return student form
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