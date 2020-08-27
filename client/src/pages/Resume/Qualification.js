import React, { useState, useEffect } from "react";
import "./forms.css"

export default function Qualification(props) {
  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  //if educations object exist then fill up fields with information 
  const [state, setState] = useState(resumeState.educations || null);
  
  //Update setResumeState if state changes
  useEffect(() => {
    setResumeState((prev => ({...prev, educations: state})));
  }, [state]);
  
  //Update state when any field changes. The 'name' variable is the key of the item of experiences object
  const Change = (event) => { 
    const { name, value } = event.target
    setState(prev => ({
      ...prev,
     [name]: value
    }))
  }

  return (
        <form
          className="flex signup-form"
          style={{ paddingLeft: "0px" }}
        >
          <div className="content flex flex-column justify-center items-center">
            <div className="text">
              <h1>List all the relevant educational credentials you have earned.</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter credential title. e.g Master in Business Administration"
                name="type_degree"
                value ={(state==null) ? "" : state.type_degree} 
                onChange= {Change}
              />
           <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter name of the credential awarding institute."
                name="institution"
                value ={(state==null) ? "" : state.institution} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the name of the country for the above mentioned institute"
                name="country"
                value ={(state==null) ? "" : state.country} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="number"
                min="1900" max="9999"
                placeholder="YYYY - Enter the year in which you completed the above mentioned credential"
                name="graduat_date"
                value ={(state==null) ? "" : state.graduat_date} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input  type="submit" value="SIGNUP" />
            </div>
          </div>
        </form>
  )
}