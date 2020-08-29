import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Profile(props) {
  const history = useHistory();
  
  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  let state = resumeState.profile || null;
  //if experience object exist then fill up fields with information 
  //const [state, setState] = useState(resumeState.profile || null);

  //Update setResumeState if state changes
  // useEffect(() => {
  //   setResumeState((prev => ({...prev, profile: state})));
  // }, [state]);

  //Update state when any field changes. The 'id' variable is the key of the item of profile object
  const Change = (event) => { 
  
    // const { id, value } = event.target
    // setState(prev => ({
    //   ...prev,
    //  [id]: value
    // }))

    setResumeState(prev => ({...prev, 
        [event.target.id]: event.target.value }));
  }

  const Next = (event) => { 
    history.push("/summary")
  }

  return (
    <Form 
    style={{padding:  "50px"}}
    onSubmit={event => event.preventDefault()} 
    autoComplete="off">

<Form.Row>
    <Form.Group controlId="prof_title">
      <Form.Label>Profile Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Profile Title" value ={(state==null) ? "" : state.prof_title} onChange={Change}/>
    </Form.Group>
  </Form.Row>

<Form.Row>
    <Form.Group controlId="first_name">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Profile Title" value ={(state==null) ? "" : state.first_name} onChange={Change}/>
    </Form.Group>

    <Form.Group controlId="last_name">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Last Name" value ={(state==null) ? "" : state.last_name} onChange={Change}/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Email" value ={(state==null) ? "" : state.email} onChange={Change}/>
  </Form.Group>

    <Form.Group controlId="phone_number">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="phone_number" placeholder="Enter Your Phone Number like 2227771990"  value ={(state==null) ? "" : state.phone_number} onChange={Change} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="1234 Main St" value ={(state==null) ? "" : state.address} onChange={Change}/>
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Enter Your city like Montreal"  value ={(state==null) ? "" : state.city} onChange={Change} />
    </Form.Group>

    <Form.Group controlId="province">
      <Form.Label>Province</Form.Label>
      <Form.Control type="text" placeholder="Enter Your province like Quebec"  value ={(state==null) ? "" : state.province} onChange={Change} />
    </Form.Group>

    <Form.Group controlId="postal_code">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="text" placeholder="Enter Your postal code like K2J5Y3"  value ={(state==null) ? "" : state.postal_code} onChange={Change} />
    </Form.Group>
  </Form.Row>

  <Button onClick={Next} variant="primary" type="submit">
    Next
  </Button>
</Form>
  )
}