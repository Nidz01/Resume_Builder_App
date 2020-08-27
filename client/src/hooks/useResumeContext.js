import React, { useState } from 'react';

export default function useResumeContext(props) {

  const [resumeState, setResumeState] = useState({
    summary: {},
    core_competencies: {},
    achievements: {},
    educations: {},
    profile: {},
    experiences: {}
  });

  return {
    resumeState, 
    setResumeState
  }
}