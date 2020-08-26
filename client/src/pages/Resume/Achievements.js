import React, { useState, useEffect } from "react";
import "./forms.css"


export default function Achievements(props) { 

  const { resumeState, setResumeState } = props;
  const [state, setState] = useState(resumeState.achievements || null);

  console.log(resumeState)

  useEffect(() => {
    setResumeState((prev => ({...prev, achievements: state})));
  }, [state]);

  const Change = (event) => {
    setState(prev => ({...prev, [event.target.name]: event.target.value }))
  }

  const Next = () => {
   
  }  

  return (
        <form
          className="flex signup-form"
          style={{ paddingLeft: "0px" }}
        >
          <div className="content flex flex-column justify-center items-center">
            <div className="text">
              <h1>Create Achievements</h1>
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
              <input  type="submit" value="Save and Next" />
            </div>
          </div>
        </form>
  )
}