import React from 'react';
import Qualification from "./Qualification";
import Button from 'react-bootstrap/Button';

export default function QualificationList(props) {
  const { resumeState, setResumeState } = props;

  const addQualification = () => {
    setResumeState(prev => ({...prev, 
      educations:[...prev.educations,
        {id:resumeState.educations.length + 1, 
          institution:'', 
          type_degree:'', 
          graduat_date:'', 
          country:''
        }
      ]
    }))
  }

  const renderEducation =() => {
    
    const educationData = resumeState.educations.map((education, educationIndex) => {
      
    if (!education) {
      return (
      <Qualification
        key={education.id}
        index = {educationIndex}
        resumeState={{}}
        setResumeState={setResumeState}/> 
      )

    } else {
    return ( 
     <Qualification
        key={education.id}
        index = {educationIndex}
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
          {renderEducation()} 
      </div> 
       <Button variant="primary" type="submit" onClick= {addQualification} >
        Add more Qualification
      </Button> 
    </div>
    )
}