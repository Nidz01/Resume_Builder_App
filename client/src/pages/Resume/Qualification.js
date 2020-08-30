import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Qualification(props) {
  const history = useHistory();
  
  const Change = (event) => { 
     const { id, value } = event.target;

    props.setResumeState(prev => {

      let newEducations = prev.educations.map((educ, index) => {
        if (index === props.index) {
          return {...educ, [id]: value};
        } else {
          return educ;
        }
      })
      return({...prev, educations: newEducations});
    });
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form.prof_title.value);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/summary");
    }
    setValidated(true);
  };
  
  //// function save resume to the db
   /* if (state === undefined) {
      setError("Required field")
      anyError = true;
    }
    if (anyError === false) {
      axios.post('/resume', {resume_data: state})
      .then(response => {console.log(response)
      }) 
      .catch(error => setError(error));
    }*/
    
  return (
    <Form noValidate validated={validated}
      style={{padding:  "50px"}}
      onSubmit={handleSubmit}
    >

  <Form.Group controlId="institution">
      <Form.Label>Institution Name: </Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter Name of Institute" 
        required
        defaultValue = {props.resumeState.institution} 
        onChange= {Change}
      />
      <Form.Control.Feedback type="invalid">
            Please provide a Institution Name.
          </Form.Control.Feedback>
    </Form.Group>

    <Form.Group  controlId="type_degree">
      <Form.Label>Credential or Degree Title: </Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter Your title of teh degree earned" 
        defaultValue ={props.resumeState.type_degree} 
        onChange= {Change}
      />
    </Form.Group>
  <Form.Row>
  <Form.Group controlId="graduat_date">
      <Form.Label>Completion Year: </Form.Label>
      <Form.Control 
        type="number" 
        placeholder="Enter year in which completed" 
        defaultValue ={props.resumeState.graduat_date} 
        onChange= {Change}
      />
    </Form.Group>

    <Form.Group controlId="country">
      <Form.Label>Country of Institute</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="e.g Canada" 
        defaultValue ={props.resumeState.country} 
        onChange= {Change}
      />
    </Form.Group>
    </Form.Row>
    
    <Button variant="primary" type="submit" >
        Save Qualification
      </Button>

      <Button variant="primary" type="submit" >
        Delete Qualification
      </Button>

</Form>
  )
}