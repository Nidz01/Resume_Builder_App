import React, { useState } from 'react';

export default function useResumeContext(props) {

  const [resumeState, setResumeState] = useState({
    summary: {},
    core_competencies: {},
    achievements: {},
    educations: [{id:'1', institution:'', type_degree:'', graduat_date:'', country:''}],
    profile: {},
    experiences: {}
  });

  return {
    resumeState, 
    setResumeState
  }
}