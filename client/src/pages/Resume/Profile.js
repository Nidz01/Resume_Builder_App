import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./forms.css"
export default function Profile(props) {

  const { resumeState, setResumeState } = props;
  const [state, setState] = useState(resumeState.profile || null);

  useEffect(() => {
    setResumeState((prev => ({...prev, profile: state})));
  }, [state]);

  const Change = (event) => { 
    const { name, value } = event.target
    setState(prev => ({
      ...prev,
     [name]: value
    }))
  }

  return (
    <div className="flex flex-column signup-form">
    <Form onSubmit={event => event.preventDefault()} autoComplete="off">
  <Form.Row>
    <Form.Group as={Col} controlId="prof-title">
      <Form.Label>Profile Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Profile Title" name = "prof_title" value ={(state==null) ? "" : state.prof_title} onChange={Change}/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="first-name">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Profile Title" name = "first_name" value ={(state==null) ? "" : state.first_name} onChange={Change}/>
    </Form.Group>

    <Form.Group as={Col} controlId="last_name">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Last Name" name = "last_name" value ={(state==null) ? "" : state.last_name} onChange={Change}/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Email" name = "email" value ={(state==null) ? "" : state.email} onChange={Change}/>
  </Form.Group>

    <Form.Group as={Col} controlId="phone_number">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="phone_number" placeholder="Enter Your Phone Number like 2227771990" name = "phone_number" value ={(state==null) ? "" : state.phone_number} onChange={Change} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="1234 Main St"name = "address" value ={(state==null) ? "" : state.address} onChange={Change}/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Enter Your city like Montreal" name = "city" value ={(state==null) ? "" : state.city} onChange={Change} />
    </Form.Group>

    <Form.Group as={Col} controlId="province">
      <Form.Label>Province</Form.Label>
      <Form.Control type="text" placeholder="Enter Your province like Quebec" name = "province" value ={(state==null) ? "" : state.province} onChange={Change} />
    </Form.Group>

    <Form.Group as={Col} controlId="postal_code">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="text" placeholder="Enter Your postal code like K2J5Y3" name = "postal_code" value ={(state==null) ? "" : state.postal_code} onChange={Change} />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}