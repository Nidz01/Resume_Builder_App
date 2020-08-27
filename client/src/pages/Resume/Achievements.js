import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Achievements(props) { 
  const history = useHistory();

  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  //if experience object exist then fill up fields with information 
  const [state, setState] = useState(resumeState.achievements || null);

  //Update setResumeState if state changes
  useEffect(() => {
    setResumeState((prev => ({...prev, achievements: state})));
  }, [state]);

  //Update state when any field changes. The 'id' variable is the key of the item of achievements object
  const Change = (event) => {
    setState(prev => ({...prev, [event.target.id]: event.target.value }))
  }

  const Next = () => {
    history.push("/experience")
  }  
  return (
    <Form 
    style={{padding:  "50px"}}
    onSubmit={event => event.preventDefault()} 
    autoComplete="off"
    onClick={Next}>
      <Form.Group controlId="body">
        <Form.Label>List your major achievements</Form.Label>
        <Form.Control as="textarea" rows="20" value ={(state==null) ? "" : state.body} onChange={Change}/>
      </Form.Group>
      <Button onClick={Next} variant="primary" type="submit">
        Next
      </Button>
    </Form>
  )
}