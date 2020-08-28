import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Qualification(props) {
  const history = useHistory();
  console.log(props.resumeState.id)
  // const { resumeState, setResumeState } = props;
  // const [state, setState] = useState(resumeState);
  
  //Update setResumeState if state changes
  // useEffect(() => {
  //   setResumeState((prev => ({...prev, educations: [state]})));
  // }, [state]);
  
  const Change = (event) => { 
     const { id, value } = event.target;

    //  const array1 = [5, 12, 8, 130, 44];
    //   const isLargeNumber = (element) => element > 13;
    //   console.log(array1.findIndex(isLargeNumber));
// expected output: 3

    // props.setResumeState(prev => ({
    //   ...prev,
    //  [id]: value
    // }))
    props.setResumeState(prev => ({...prev, 
      educations:[...prev.educations,{[id]:value}]}))
  }

  //test
  /*const [test, setTest] = useState({
    educations: {},
  });
  const [education, setEd] = useState();

  useEffect(() => {
  setTest((prev => ({...prev, educations: education})));
 // console.log(test)
}, [education]);

  useEffect(() => {
    setEd((prev => ({...prev, education: [state]})));
  }, [state]);*/

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
    <Form 
      style={{padding:  "50px"}}
      onSubmit={event => event.preventDefault()} 
      autoComplete="off">

  <Form.Group controlId="institution">
      <Form.Label>Institution Name: </Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter Name of Institute" 
        defaultValue = {props.resumeState.institution} 
        onChange= {Change}
      />
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


  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
  )
}