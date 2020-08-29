import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

// export default function Achievements(props) { 
//   const history = useHistory();

//   //get data from useResumeContext function
//   const { resumeState, setResumeState } = props;

//   //if experience object exist then fill up fields with information 
//   const [state, setState] = useState(resumeState.achievements || null);

//   //Update setResumeState if state changes
//   useEffect(() => {
//     setResumeState((prev => ({...prev, achievements: state})));
//   }, [state]);

//   //Update state when any field changes. The 'id' variable is the key of the item of achievements object
//   const Change = (event) => {
//     console.log("does this event break the route?!?", event);
//     setState(prev => ({...prev, [event.target.id]: event.target.value }))
//   }

//   const Next = () => {
//     history.push("/experience")
//   }  
//   return (
//     <Form 
//       style={{padding:  "50px"}}
//       onSubmit={event => event.preventDefault()} 
//       autoComplete="off"
//     >
//       <Form.Group controlId="body">
//         <Form.Label>List your major achievements</Form.Label>
//         <Form.Control as="textarea" rows="20" value ={(state==null) ? "" : state.body} onChange={Change}/>
//       </Form.Group>
//       <Button onClick={Next} variant="primary" type="submit">
//         Next
//       </Button>
//     </Form>
//   )
// }



export default function Achievements(props) { 
  const history = useHistory();

  //get data from useResumeContext function
  //const { resumeState, setResumeState } = props;

  //let state = resumeState.achievements;
  console.log('prop achievement', props.achievementsState)

  console.log('setresumeState', props.setResumeState)
  // //if experience object exist then fill up fields with information 
  // const [state, setState] = useState(resumeState.achievements || null);

  // //Update setResumeState if state changes
  // useEffect(() => {
  //   setResumeState((prev => ({...prev, achievements: state})));
  // }, [state]);

  //Update state when any field changes. The 'id' variable is the key of the item of achievements object
  const Change = (event) => {
    const { id, value } = event.target;
    console.log('event.target.id = ', event.target.id)
    console.log('event.target.value = ', event.target.value)
    // setState(prev => ({...prev, [event.target.id]: event.target.value }))
    props.setResumeState(prev => ({...prev, [event.target.id]: event.target.value }));
  }

  const Next = () => {
    history.push("/experience")
  }  
  return (
    <Form 
      style={{padding:  "50px"}}
      onSubmit={event => event.preventDefault()} 
      autoComplete="off"
    >
      <Form.Group controlId="body">
        <Form.Label>List your major achievements</Form.Label>
        <Form.Control as="textarea" rows="20" value ={(props.achievementsState === null) ? "" : props.achievementsState.body} onChange={Change}/>
      </Form.Group>
      <Button onClick={Next} variant="primary" type="submit">
        Next
      </Button>
    </Form>
  )
}