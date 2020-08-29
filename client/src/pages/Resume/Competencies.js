import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Competencies(props) {
  const history = useHistory();

  const Change = (event) => {
    const { id, value } = event.target;
    props.setResumeState(prev => ({...prev, core_competencies: {[id]: value } }))
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/achievement");
    }
    setValidated(true);
  };
  
  return (
    <Form noValidate validated={validated}
      style={{padding:  "50px"}}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="body">
        <Form.Label>Your core competencies</Form.Label>
        <Form.Control as="textarea" rows="20" required defaultValue ={(props.competenciesState.body === null) ? "" : props.competenciesState.body} onChange={Change}/>
        <Form.Control.Feedback type="invalid">
            Please provide a core competencies.
          </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
      Save and Next
      </Button>
    </Form>
  )
}