import React, {useState, useEffect} from 'react';

export default function useResumeContext(props) {
  const [state, setState] = useState({summary: {}});


  const setSummary = body => {
 
   setState(prev => ({...prev, summary: body}))
  }

  return {
    state, 
    setSummary
  }
}