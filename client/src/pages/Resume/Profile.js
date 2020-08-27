import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Profile(props) {
  return (
    <Form 
    style={{padding:  "50px"}}
    onSubmit={event => event.preventDefault()} 
    autoComplete="off">

  <Form.Group controlId="first_name">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your First Name" /*value={} onChange={}*//>
    </Form.Group>

    <Form.Group  controlId="last_name">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Last Name" /*value={} onChange={}*/ />
    </Form.Group>



  <Form.Group controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Email" /*value={} onChange={}*//>
    </Form.Group>

    <Form.Group  controlId="phone_number">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="number" placeholder="e.g  2227771990" /*value={} onChange={}*/ />
    </Form.Group>


  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="e.g 1234 Main St" /*value={} onChange={}*//>
  </Form.Group>


    <Form.Group controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="e.g Montreal" /*value={} onChange={}*/ />
      </Form.Group>

    <Form.Group controlId="province">
      <Form.Label>Province</Form.Label>
      <Form.Control type="text" placeholder="e.g  Quebec" /*value={} onChange={}*/ />
    </Form.Group>

    <Form.Group controlId="postal_code">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="text" placeholder="e.g K2J5Y3" /*value={} onChange={}*/ />
    </Form.Group>


  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
  )
}