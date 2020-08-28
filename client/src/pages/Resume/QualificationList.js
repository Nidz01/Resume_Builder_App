import React from 'react';
import Qualification from "./Qualification";
import Button from 'react-bootstrap/Button';

export default function QualificationList(props) {
  const { resumeState, setResumeState } = props;

  const addQualification = () => {
    setResumeState(prev => ({...prev, educations:[...prev.educations,{id:resumeState.educations.length + 1, institution:'', type_degree:'', graduat_date:'', country:''}]}))

  }

  const data =() => {
    
    const educationData = resumeState.educations.map((education) => {
    if (!education) {
      return (
      <Qualification
        key={education.id}
        resumeState={{}}
        setResumeState={setResumeState}/> 
      )

    } else {
    return ( 
     <Qualification
        key={education.id}
        resumeState={education}
        setResumeState={setResumeState}/> 
    )
    }
    })
    
    return educationData
  }
 
  return (
    <div>
      <div>
          {data()} 
      </div> 
       <Button variant="primary" type="submit" onClick= {addQualification} >
        Add more Qualification
      </Button> 
    </div>
    )
}