import React, {useState, useEffect} from 'react';

export default function useResumeContext(props) {

  const [resumeState, setResumeState] = useState({
    summary: {},
    competencies: {},
    achievements: {}
  });

  // const setSummary = body => {
 
  //  setState(prev => ({...prev, summary: body}))
  // }

  return {
    resumeState, 
    setResumeState
  }
}