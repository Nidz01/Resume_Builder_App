import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Summary(props) {
  const history = useHistory();
  
  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  //if experience object exist then fill up fields with information 
  const [state, setState] = useState(resumeState.summary || null);

  //Update setResumeState if state changes
  useEffect(() => {
    setResumeState((prev => ({...prev, summary: state})));
  }, [state]);

  //Update state when any field changes. The 'id' variable is the key of the item of summary object
  const Change = (event) => {
    console.log('event.target', event.target)
    setState(prev => ({...prev, [event.target.id]: event.target.value }))
  }

  const Next = () => {
    history.push("/competencies")
  }  

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
        autoComplete="off"
      >
        <Form.Group controlId="body">
          <Form.Label>Write a profile summary that explains your professional persona, skills and qualifications.</Form.Label>
          <Form.Control as="textarea" rows="20" value ={(state==null) ? "" : state.body} onChange={Change}/>
        </Form.Group>
        <Button onClick={Next} variant="primary" type="submit">
          Next
        </Button>
      </Form>
    )
  }
