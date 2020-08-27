import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Experience(props) {
  return (
    <Form 
    style={{padding:  "50px"}}
    onSubmit={event => event.preventDefault()} 
    autoComplete="off">
      <Form.Group controlId="job_title">
        <Form.Label>Job Title/Designation: </Form.Label>
        <Form.Control type="text" placeholder="Enter Your job title or role" /*value={} onChange={}*//>
      </Form.Group>

      <Form.Group  controlId="employer_name">
        <Form.Label>Employer Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter name of employer for the above mentioned job" /*value={} onChange={}*/ />
      </Form.Group>

      <Form.Group controlId="employer_description">
        <Form.Label>Company/Employer Description: </Form.Label>
        <Form.Control type="text" placeholder="Describe employer/company profile" /*value={} onChange={}*//>
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City of Company/Employer:</Form.Label>
        <Form.Control type="text" placeholder="e.g Montreal" /*value={} onChange={}*/ />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country of Company/Employer:</Form.Label>
        <Form.Control type="text" placeholder="e.g Canada" /*value={} onChange={}*/ />
      </Form.Group>
  
  
      <Form.Group controlId="start_date">
        <Form.Label>Job Start Date:</Form.Label>
        <Form.Control type="month" placeholder="YYYY-MM" /*value={} onChange={}*/ />
      </Form.Group>

      <Form.Group controlId="end_date">
        <Form.Label>Job End Date: </Form.Label>
        <Form.Control type="month" placeholder="YYYY-MM" /*value={} onChange={}*/ />
      </Form.Group>

      <Form.Group className="align-self-end" id="checkbox" controlId="present">
        <Form.Check type="checkbox"
          label="Present"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
  }
