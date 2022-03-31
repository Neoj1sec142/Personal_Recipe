import React from "react"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { FormGroup, FormControl, Button } from "react-bootstrap"

const RecipeForm = (props) => {
    const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    type: Yup.string()
        .type("You have enter an invalid name")
        .required("Rquired"),
    ingredients: Yup.string()
        .ingredients("You have entered invalid ingredients")
        .required("Rquired"),
    steps: Yup.string()
        .steps("You have entered invaild steps")
        .required("Rquired"),
    caution: Yup.string()
        .caution("You have entered invaild warnings")
        .required("Rquired"),
    time_cook: Yup.number()
        .positive("Invalid amount")
        .integer("Invalid amount")
        .required("Rquired"),
    temp: Yup.number()
        .positive("Invalid temp")
        .integer("Invalid temp")
        .required("Rquired"),
    servings: Yup.string()
        .positive("Invalid servings")
        .integer("Invalid servings")
        .required("Rquired"),
    });
    console.log(props);
    return (
      <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
          <Form>
            <FormGroup>
              <Field name="name" type="text" 
                  className="form-control" />
              <ErrorMessage
                name="name"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="type" type="text" 
                  className="form-control" />
              <ErrorMessage
                name="type"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="ingredients" type="text" 
                  className="form-control" />
              <ErrorMessage
                name="ingredients"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="steps" type="text" 
                  className="form-control" />
              <ErrorMessage
                name="steps"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="caution" type="text" 
                  className="form-control" />
              <ErrorMessage
                name="caution"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="time_cook" type="number" 
                  className="form-control" />
              <ErrorMessage
                name="rollno"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="temp" type="text" 
                  className="form-control" />
              <ErrorMessage
                name="email"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup>
              <Field name="servings" type="number" 
                  className="form-control" />
              <ErrorMessage
                name="rollno"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <Button variant="danger" size="lg" 
              block="block" type="submit">
              {props.children}
            </Button>
          </Form>
        </Formik>
      </div>
    );
  };
    
  export default RecipeForm