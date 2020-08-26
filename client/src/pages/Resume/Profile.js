import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./forms.css"
export default function Profile(props) {
  return (
    <div className="flex flex-column signup-form">
    <Form onSubmit={event => event.preventDefault()} autoComplete="off">
  <Form.Row>
  <Form.Group as={Col} controlId="first_name">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your First Name" /*value={} onChange={}*//>
    </Form.Group>

    <Form.Group as={Col} controlId="last_name">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Last Name" /*value={} onChange={}*/ />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Email" /*value={} onChange={}*//>
    </Form.Group>

    <Form.Group as={Col} controlId="phone_number">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="number" placeholder="Enter Your Phone Number like 2227771990" /*value={} onChange={}*/ />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="1234 Main St" /*value={} onChange={}*//>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Enter Your city like Montreal" /*value={} onChange={}*/ />
    </Form.Group>

    <Form.Group as={Col} controlId="province">
      <Form.Label>Province</Form.Label>
      <Form.Control type="text" placeholder="Enter Your province like Quebec" /*value={} onChange={}*/ />
    </Form.Group>

    <Form.Group as={Col} controlId="postal_code">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="text" placeholder="Enter Your postal code like K2J5Y3" /*value={} onChange={}*/ />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}