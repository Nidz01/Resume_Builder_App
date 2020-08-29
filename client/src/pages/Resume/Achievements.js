import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Achievements(props) { 
  const history = useHistory();

  //Update state when any field changes. The 'id' variable is the key of the item of achievements object
  const Change = (event) => {
    const { id, value } = event.target;
      props.setResumeState(prev => ({...prev, achievements: {[id]: value } }))
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/experience")
    }
    setValidated(true);
  };
  
  return (
    <Form noValidate validated={validated}
      style={{padding:  "50px"}}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="body">
        <Form.Label>List your major achievements</Form.Label>
        <Form.Control as="textarea" rows="20" required defaultValue ={(props.achievementsState.body === null) ? "" : props.achievementsState.body} onChange={Change}/>
        <Form.Control.Feedback type="invalid">
            Please provide an achievements.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
      Save and Next
      </Button>
    </Form>
  )
}