import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Summary(props) {
  const history = useHistory();
  
  const Change = (event) => {
    const { id, value } = event.target;
    props.setResumeState(prev => ({...prev, summary: {[id]: value } }))
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/competencies");
    }
    setValidated(true);
  };

   return (
      <Form noValidate validated={validated}
        style={{padding:  "50px"}}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="body">
          <Form.Label>Write a profile summary that explains your professional persona, skills and qualifications.</Form.Label>
          <Form.Control as="textarea" rows="20" required defaultValue ={(props.summaryState.body === null) ? "" : props.summaryState.body} onChange={Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a profile summary.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
        Save and Next
        </Button>
      </Form>
    )
  }
