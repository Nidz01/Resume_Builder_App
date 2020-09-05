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
        <Button style={{ flexBasis: "auto", height: "30px", border: "transparent", borderRadius: "20px", textAlign: "center", backgroundImage: "linear-gradient(to right, #bc4e9c, #f80759)", color: "#fff", fontFamily: "Montserrat, sans-serif", fontSize: "1rem", textTransform: "capitalize", cursor: "pointer"}} variant="primary" type="submit">
        Save and Next
        </Button>
      </Form>
    )
  }
