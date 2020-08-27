import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Qualification(props) {
  const history = useHistory();

  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  //if experience object exist then fill up fields with information 
  const [state, setState] = useState(resumeState.educations || null);
  
  //Update setResumeState if state changes
  useEffect(() => {
    setResumeState((prev => ({...prev, educations: state})));
  }, [state]);


  //test
  const [test, setTest] = useState({
    educations: {},
  });
  const [education, setEd] = useState();

  useEffect(() => {
  setTest((prev => ({...prev, educations: education})));
  console.log(test)
}, [education]);

  useEffect(() => {
    setEd((prev => ({...prev, education: [state]})));
  }, [state]);

/*
 "educations": {
		"education": [
			{
				"institution": "GOETHE-INSTITUT",
				"type_degree": "Bachelor of Science in Software Development",
				"graduat_date": "2006",
				"country": "Canada"
			}
		]
	}
*/
  
  //Update state when any field changes. The 'id' variable is the key of the item of educations object
  const Change = (event) => { 
    const { id, value } = event.target
    setState(prev => ({
      ...prev,
     [id]: value
    }))
  }
  
  const Save = (event) => { 
  }
    
  return (
    <Form 
      style={{padding:  "50px"}}
      onSubmit={event => event.preventDefault()} 
      autoComplete="off">

  <Form.Group controlId="institution">
      <Form.Label>Institution Name: </Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter Name of Institute" 
        value ={(state==null) ? "" : state.institution} 
        onChange= {Change}
      />
    </Form.Group>

    <Form.Group  controlId="type_degree">
      <Form.Label>Credential or Degree Title: </Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter Your title of teh degree earned" 
        value ={(state==null) ? "" : state.type_degree} 
        onChange= {Change}
      />
    </Form.Group>
  <Form.Row>
  <Form.Group controlId="graduat_date">
      <Form.Label>Completion Year: </Form.Label>
      <Form.Control 
        type="number" 
        placeholder="Enter year in which completed" 
        value ={(state==null) ? "" : state.graduat_date} 
        onChange= {Change}
      />
    </Form.Group>

    <Form.Group controlId="country">
      <Form.Label>Country of Institute</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="e.g Canada" 
        value ={(state==null) ? "" : state.country} 
        onChange= {Change}
      />
    </Form.Group>
    </Form.Row>
    <Button variant="primary" type="submit" onClick={<Qualification resumeState={resumeState} setResumeState={setResumeState}/>}>
      Add more Qualification
    </Button>

  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
  )
}