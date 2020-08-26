import React, { useState, useEffect } from "react";
import "./forms.css"


export default function Summary(props) {

  const { resumeState, setResumeState } = props;
  const [state, setState] = useState(resumeState.summary || null);

  console.log(resumeState)

  useEffect(() => {
    setResumeState((prev => ({...prev, summary: state})));
  }, [state]);

  const Change = (event) => {
    setState(prev => ({...prev, [event.target.name]: event.target.value }))
  }

  const Next = () => {
  console.log('from next function')
  }  

//// function save resume to the db
   /* if (state === undefined) {
      setError("Required field")
      anyError = true;
    }
    if (anyError === false) {
      axios.post('/resume', {resume_data: state})
      .then(response => {console.log(response)
      }) 
      .catch(error => setError(error));
    }*/


 
  return (
    <form
    className="flex signup-form"
    style={{ paddingLeft: "0px" }}
  >
    <div className="content flex flex-column justify-center items-center">
      <div className="text">
        <h1>Your profile summary of qualifications</h1>
      </div>
      <div className="form-group">
        <textarea style={{padding: "10px", border: "1px solid #888", width: "100%", resize: "none"}}
          placeholder="Enter your achievements"
          rows={20}
          cols={5}
          name="body"
          value ={(state==null) ? "" : state.body} onChange={Change}
          onChange={Change}
        />
      </div>
      <div className="form-group">
        <button type="submit" onClick={Next} value="Save and Next" />
      </div>
    </div>
  </form>
  )
}