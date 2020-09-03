import React from 'react';
import Qualification from "./Qualification";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function QualificationList(props) {
  const { resumeState, setResumeState, userId, isResumeCompleted} = props;
  const history = useHistory();
  //const [show, setShow] = useState(true);
  
  // console.log('successful',Object.values(resumeState.profile))
  //   //if (resumeState.profile !== '' || resumeState.summary !== '' || resumeState.educations !== '' || resumeState.achievement !== '' || resumeState.experiences !== '' || resumeState.core_competencies !== '') {
  //     if (Object.keys(resumeState.profile).length > 9) {
  //     setShow(false);
  //the function saves the new resume to DB 
  const saveResume=() => {
    if (isResumeCompleted(resumeState)) {
      const resumeData = {
        profile: resumeState.profile,
        summary: resumeState.summary,
        educations: resumeState.educations,
        achievement: resumeState.achievement,
        experiences: resumeState.experiences,
        core_competencies: resumeState.core_competencies
      } 
      axios.post('/resume', {resume_data: resumeData, user_id: userId })
        .then(
          history.push("/download"),
          console.log('posting')) 
        .catch(error => console.log('Error:', error));
      } else {
      console.log('please enter data');
    }
  }

  //the function adds new empty education object to the resumeState and shows a new education form
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
        educations={resumeState.educations}
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
      <br/>
  {/* <Alert show={show} variant="success">
    <Alert.Heading>Please enter data in all fields first!</Alert.Heading>
      </Alert> */}
      <Button type="submit" onClick= {saveResume} >Save All</Button>
    </div>
    )
}