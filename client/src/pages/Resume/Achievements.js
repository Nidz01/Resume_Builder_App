import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Achievements(props) { 

  const { resumeState, setResumeState } = props;
  const [state, setState] = useState(resumeState.achievements || null);

  console.log(resumeState)

  useEffect(() => {
    setResumeState((prev => ({...prev, achievements: state})));
  }, [state]);

  const Change = (event) => {
    setState(prev => ({...prev, [event.target.name]: event.target.value }))
  }

  const Next = () => {
   
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
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}