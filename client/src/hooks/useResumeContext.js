import React, { useState } from 'react';

export default function useResumeContext(props) {

  const [resumeState, setResumeState] = useState({
    summary: {},
    core_competencies: {},
    achievements: {},
    educations: [
      {id:1, 
        institution:'', 
        type_degree:'', 
        graduat_date:'', 
        country:''
      }
    ],
    profile: {},
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