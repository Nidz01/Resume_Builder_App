import { useState } from 'react';

export default function useResumeContext(props) {

  const [resumeState, setResumeState] = useState({
    summary: {body: ''},
    core_competencies: {body: ''},
    achievements: {body: ''},
    educations: [
      {id:1, 
        institution:'', 
        type_degree:'', 
        graduat_date:'', 
        country:''
      }
    ],
    profile: {
        prof_title: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        province: '',
        postal_code: ''
    },
    experiences: [
      {
      id: 1,
      job_title: '',
      employer_name: '',
      employer_description: '',
      city: '',
      country: '',
      start_date: '',
      end_date: '',
      responsibilities: ''
      }
    ]
  });

  // const { state } = Autorization();
  // if (state.userId) {
  //   console.log(state.userId)
  // axios.post('/resume/resume', { userId: state.userId })
  //       .then(response => {console.log(response)
  //       })
  //       .catch(error => console.log('Error:', error));
  // }

  const isResumeCompleted = (props) => {
    let profileCount = 0;

    for (let key in props.profile) {
            if (props.profile[key] !== "") {
                profileCount++ }       
    }
    let educationCount = 0;

    props.educations.map((education) => {
        for (let key in education) {
            if (education[key] !== "" && key !== "id") {
                educationCount++ 
            }
        }
        return education;
    });

    let experienceCount = 0;
    props.experiences.map((experience) => {
        for (let key in experience) {
            if (experience[key] !== "" && key !== "id") {
                experienceCount++ 
            }
        }
        return experienceCount;
    });

    if (props.summary.body === "" || 
    props.core_competencies.body === "" ||
    props.achievements.body === "" || profileCount === 0 ||
    (educationCount < 4) || (experienceCount < 8)) {
        return false;
    }
    else {
        return true;
    }
  }

  return {
    resumeState, 
    setResumeState,
    isResumeCompleted
  }
}