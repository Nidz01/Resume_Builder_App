import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Summary(props) {
  const history = useHistory();
  
  //get data from useResumeContext function
  // const { resumeState, setResumeState } = props;

  // let state = resumeState.summary || null;
  //if experience object exist then fill up fields with information 
  //const [state, setState] = useState(resumeState.summary || null);

  //Update setResumeState if state changes
  // useEffect(() => {
  //   setResumeState((prev => ({...prev, summary: state})));
  // }, [state]);

  //Update state when any field changes. The 'id' variable is the key of the item of summary object
  const Change = (event) => {
    //setState(prev => ({...prev, [event.target.id]: event.target.value }))
    const { id, value } = event.target;
    props.setResumeState(prev => ({...prev, summary: {[id]: value } }))
  }

  const Next = () => {
    history.push("/competencies")
  }  

   return (
      <Form 
        style={{padding:  "50px"}}
        onSubmit={event => event.preventDefault()} 
        autoComplete="off"
      >
        <Form.Group controlId="body">
          <Form.Label>Write a profile summary that explains your professional persona, skills and qualifications.</Form.Label>
          <Form.Control as="textarea" rows="20" defaultValue ={(props.summaryState.body === null) ? "" : props.summaryState.body} onChange={Change}/>
        </Form.Group>
        <Button onClick={Next} variant="primary" type="submit">
          Next
        </Button>
      </Form>
    )
  }
