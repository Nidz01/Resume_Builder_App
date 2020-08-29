import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Experience(props) {
  const history = useHistory();
    
  //Update state when any field changes. The 'id' variable is the key of the item of experiences object
  const Change = (event) => { 
  const { id, value } = event.target

  props.setResumeState(prev => {

    let newExperiences = prev.experiences.map((exp, index) => {
      if (index === props.index) {
        return {...exp, [id]: value};
      } else {
        return exp;
      }
    })
    return({...prev, experiences: newExperiences});
  });
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
          defaultValue = {props.resumeState.job_title} 
          onChange= {Change}/>
      </Form.Group>

      <Form.Group  controlId="employer_name">
        <Form.Label>Employer Name: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name of employer for the above mentioned job" 
          defaultValue = {props.resumeState.employer_name} 
          onChange= {Change}/>
      </Form.Group>

      <Form.Group controlId="employer_description">
        <Form.Label>Company/Employer Description: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Describe employer/company profile" 
          defaultValue = {props.resumeState.employer_description} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City of Company/Employer:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g Montreal" 
          defaultValue = {props.resumeState.city} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country of Company/Employer:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g Canada" 
          defaultValue = {props.resumeState.country} 
          onChange= {Change}
        />
      </Form.Group>
  
  
      <Form.Group controlId="start_date">
        <Form.Label>Job Start Date:</Form.Label>
        <Form.Control 
          type="month" 
          placeholder="YYYY-MM" 
          defaultValue = {props.resumeState.start_date} 
          onChange= {Change}
        />
      </Form.Group>

      <Form.Group controlId="end_date">
        <Form.Label>Job End Date: </Form.Label>
        <Form.Control 
          type="month" 
          placeholder="YYYY-MM" 
          defaultValue = {props.resumeState.end_date} 
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
          defaultValue = {props.resumeState.responsibilities} 
          onChange= {Change}
        />
      </Form.Group>

      <Button onClick={Next} variant="primary" type="submit">
      Save and Next
      </Button>
    </Form>
  )
  }
