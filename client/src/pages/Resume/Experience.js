import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Experience(props) {
  const history = useHistory();

  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  //if experience object exist then fill up fields with information 
  const [state, setState] = useState(resumeState.experiences || null);
    
  //Update setResumeState if state changes
  useEffect(() => {
    setResumeState((prev => ({...prev, experiences: state})));
  }, [state]);
    
  //Update state when any field changes. The 'id' variable is the key of the item of experiences object
  const Change = (event) => { 
  const { id, value } = event.target
    setState(prev => ({
       ...prev,
      [id]: value
    }))
  }
  const Next = () => {
    history.push("/qualification")
  }  

  return (
    <Form 
    style={{padding:  "50px"}}
    onSubmit={event => event.preventDefault()} 
    autoComplete="off">
      <Form.Group controlId="job_title">
        <Form.Label>Job Title/Designation: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Your job title or role" 
          value ={(state==null) ? "" : state.job_title} 
          onChange= {Change}/>
      </Form.Group>

      <Form.Group  controlId="employer_name">
        <Form.Label>Employer Name: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name of employer for the above mentioned job" 
          value ={(state==null) ? "" : state.employer_name} 
          onChange= {Change}/>
      </Form.Group>

      <Form.Group controlId="employer_description">
        <Form.Label>Company/Employer Description: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Describe employer/company profile" 
          value ={(state==null) ? "" : state.employer_description} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City of Company/Employer:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g Montreal" 
          value ={(state==null) ? "" : state.city} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country of Company/Employer:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g Canada" 
          value ={(state==null) ? "" : state.country} 
          onChange= {Change}
        />
      </Form.Group>
  
  
      <Form.Group controlId="start_date">
        <Form.Label>Job Start Date:</Form.Label>
        <Form.Control 
          type="month" 
          placeholder="YYYY-MM" 
          value ={(state==null) ? "" : state.start_date} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group controlId="end_date">
        <Form.Label>Job End Date: </Form.Label>
        <Form.Control 
          type="month" 
          placeholder="YYYY-MM" 
          value ={(state==null) ? "" : state.end_date} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group className="align-self-end" id="checkbox" controlId="present">
        <Form.Check type="checkbox"
          label="Present"
        />
      </Form.Group>

      <Form.Group controlId="responsibilties">
        <Form.Label>Job Duties/Responsibilties:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="List the variety of tasks yuo performed on job"
          value ={(state==null) ? "" : state.responsibilities} 
          onChange= {Change}
        />
      </Form.Group>

      <Button onClick={Next} variant="primary" type="submit">
        Next
      </Button>
    </Form>
  )
  }
