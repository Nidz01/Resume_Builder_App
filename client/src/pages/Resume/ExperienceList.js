import React from 'react';
import Qualification from "./Experience";
import Button from 'react-bootstrap/Button';


export default function ExperienceList(props) {
  const { resumeState, setResumeState } = props;

  const addExperience = () => {
    setResumeState(prev => ({...prev, 
      experiences:[...prev.experiences,
        {id:resumeState.experiences.length + 1, 
          job_title: '',
          employer_name: '',
          employer_description: '',
          city: '',
          country: '',
          start_date: [],
          end_date: [],
          responsibilities: []
        }
      ]
    }))
  }
  const renderExperience =() => {
    
    const experienceData = resumeState.experiences.map((experience, experienceIndex) => {
      
    if (!experience) {
      return (
      <Qualification
        key={experience.id}
        index = {experienceIndex}
        resumeState={{}}
        setResumeState={setResumeState}/> 
      )

    } else {
    return ( 
     <Qualification
        key={experience.id}
        index = {experienceIndex}
        resumeState={experience}
        setResumeState={setResumeState}/> 
    )
    }
    })
    
    return experienceData
  }
 
  return (
    <div>
      <div>
          {renderExperience()} 
      </div> 
       <Button variant="primary" type="submit" onClick= {addExperience} >
        Add more Experience
      </Button> 
    </div>
    )
}
