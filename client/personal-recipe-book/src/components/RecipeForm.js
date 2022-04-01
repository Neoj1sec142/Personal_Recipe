import React, { Component } from 'react';
import styled from "@emotion/styled";
import axios from "axios"; 

import NewRecipe from '../pages/NewRecipe'

const Container = styled.div`
  margin-top: 150px;
`;
class SubmitForm extends Component {
  state = {
    name: '',
    type: '',
    ingredients: '',
    time_cook: '',
    temp: '',
    caution: '',
    servings: '',
    steps: ''

  }
  handleSubmit = event => {
    event.preventDefault();
    const recipe = {
      name: this.state.name,
      type: this.state.type,
      ingredients: this.state.ingredients,
      time_cook: this.state.time_cook,
      temp: this.state.temp,
      caution: this.state.caution,
      servings: this.state.servings,
      steps: this.state.steps
    }
    axios.post('http://localhost:3001/recipes', { recipe })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
  return (
    <Container>
      <NewRecipe/>
      <form onSubmit = { this.handleSubmit }>
        <label> Person Name:
          <input type = "text" name = "name" onChange= {this.handleChange}/>
          <input type = "text" name = "type" onChange= {this.handleChange}/>
          <input type = "text" name = "ingredients" onChange= {this.handleChange}/>
          <input type = "text" name = "time_cook" onChange= {this.handleChange}/>
          <input type = "text" name = "temp" onChange= {this.handleChange}/>
          <input type = "text" name = "caution" onChange= {this.handleChange}/>
          <input type = "text" name = "servings" onChange= {this.handleChange}/>
          <input type = "text" name = "steps" onChange= {this.handleChange}/>
        </label>
        <button type = "submit"> Add </button>
      </form>
  </Container>
  );
}
}
export default SubmitForm;