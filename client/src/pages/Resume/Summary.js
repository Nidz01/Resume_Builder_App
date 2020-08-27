import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Summary(props) {

  const { resumeState, setResumeState } = props;
  const [state, setState] = useState(resumeState.summary || null);

  console.log(resumeState)

  useEffect(() => {
    setResumeState((prev => ({...prev, summary: state})));
  }, [state]);

  const Change = (event) => {
    setState(prev => ({...prev, [event.target.name]: event.target.value }))
  }

  const Next = () => {
  console.log('from next function')
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
      onClick={Next}>
        <Form.Group controlId="body">
          <Form.Label>Write a profile summary that explains your professional persona, skills and qualifications.</Form.Label>
          <Form.Control as="textarea" rows="20" value ={(state==null) ? "" : state.body} onChange={Change}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    )
  }