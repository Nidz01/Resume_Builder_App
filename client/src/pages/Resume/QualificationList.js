import React from 'react';
import Qualification from "./Qualification";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function QualificationList(props) {
  const { resumeState, setResumeState } = props;
  const history = useHistory();



  const addQualification = (event) => {
    return (
      <Qualification resumeState={resumeState} setResumeState={setResumeState}/>
    )
  }

  return (
    <div>
          <Qualification resumeState={resumeState} setResumeState={setResumeState}/>
          
      <Button variant="primary" type="submit" onClick={addQualification} >
        Add more Qualification
      </Button>
    </div>
    )
}