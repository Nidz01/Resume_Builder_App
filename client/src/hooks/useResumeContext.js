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
      start_date: [],
      end_date: [],
      responsibilities: []
      }
    ]
  });

  return {
    resumeState, 
    setResumeState
  }
}