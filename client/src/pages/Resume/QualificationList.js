import React from 'react';
import Qualification from "./Qualification";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function QualificationList(props) {
  const { resumeState, setResumeState, userId } = props;
  
  //the function save new resume to DB 
  const saveResume=() => {
    const resumeData = {
      profile: resumeState.profile,
      summary: resumeState.summary,
      educations: resumeState.educations,
      achievement: resumeState.achievement,
      experiences: resumeState.experiences,
      core_competencies: resumeState.core_competencies
    } 
    axios.post('/resume', {resume_data: resumeData, user_id: userId })
      .then(response => {console.log(response)
      }) 
      .catch(error => console.log('Error:', error));
  }

  //the function adds new empty education object to the resumeState and shows new education form
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
  
  //the function goes through educations array and pusses one education object and index of current object to the Qualification.js 
  const renderEducation =() => {
    
    const educationData = resumeState.educations.map((education, educationIndex) => {

    return ( 
     <Qualification
        key={education.id}
        index = {educationIndex}
        resumeState={education}
        setResumeState={setResumeState}/> 
    )
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
      <Button variant="primary" type="submit" onClick= {saveResume} >
        Save
      </Button>  
    </div>



    )
}