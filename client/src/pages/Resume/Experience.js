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

  //Deleting a specific element from expereinces array by clicking Delete button.
  const deleteExperience = () => {
    let newExperiences = [];
    if (props.experiences.length !== 1) {
       for (let index = 0; index < props.experiences.length; index++  ){
        if (index !== props.index) {
          newExperiences.push(props.experiences[index]);
        } 
      }
      props.setResumeState(prev => ({...prev, 
        experiences: newExperiences
      }))
    }
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      history.push("/qualification");
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated}
      style={{padding:  "50px"}}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="job_title">
        <Form.Label>Job Title/Designation: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Your job title or role" 
          required
          defaultValue = {props.resumeState.job_title} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a job title.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="employer_name">
        <Form.Label>Employer Name: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter name of employer for the above mentioned job" 
          required
          defaultValue = {props.resumeState.employer_name} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide an employer name.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="employer_description">
        <Form.Label>Company/Employer Description: </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Describe employer/company profile" 
          required
          defaultValue = {props.resumeState.employer_description} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a description.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City of Company/Employer:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g Montreal" 
          required
          defaultValue = {props.resumeState.city} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a city of Company.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country of Company/Employer:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="e.g Canada" 
          required
          defaultValue = {props.resumeState.country} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a country of Company.
          </Form.Control.Feedback>
      </Form.Group>
  
      <Form.Group controlId="start_date">
        <Form.Label>Job Start Date:</Form.Label>
        <Form.Control 
          type="month" 
          placeholder="YYYY-MM" 
          required
          defaultValue = {props.resumeState.start_date} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a job start date.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="end_date">
        <Form.Label>Job End Date: </Form.Label>
        <Form.Control 
          type="month" 
          placeholder="YYYY-MM" 
          required
          defaultValue = {props.resumeState.end_date} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a job end date.
          </Form.Control.Feedback>
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
          required
          defaultValue = {props.resumeState.responsibilities} 
          onChange= {Change}/>
          <Form.Control.Feedback type="invalid">
            Please provide a job dueties.
          </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
      Save Experience
      </Button>
      <Button variant="primary" onClick={deleteExperience} type="button">
        Delete Experience
      </Button>
    </Form>
  )
  }