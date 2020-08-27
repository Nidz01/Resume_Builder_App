import React, { useState, useEffect } from "react";
import "./forms.css"

export default function Experience(props) {
  //get data from useResumeContext function
  const { resumeState, setResumeState } = props;

  //if experience object exist then fill up fields with information 
  const [state, setState] = useState(resumeState.experiences || null);
  
  //Update setResumeState if state changes
  useEffect(() => {
    setResumeState((prev => ({...prev, experiences: state})));
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
              <h1>Your histrory of professional experience</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your job title"
                name="job_title"
                value ={(state==null) ? "" : state.job_title} 
                onChange= {Change}
              />
            <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the institute or organization that you worked for under the above job title"
                name="employer_name"
                value ={(state==null) ? "" : state.employer_name} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the city of above mentioned organization"
                name="city"
                value ={(state==null) ? "" : state.city} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the country of above mentioned organization"
                name="country"
                value ={(state==null) ? "" : state.country} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="month"
                placeholder="Enter the start date"
                name="start_date"
                value ={(state==null) ? "" : state.start_date} 
                onChange= {Change}
              />
              <input
                type="month"
                placeholder="Enter the end date"
                name="end_date"
                value ={(state==null) ? "" : state.end_date} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter one or two sentences to describe the nature of company"
                name="employer_description"
                value ={(state==null) ? "" : state.employer_description} 
                onChange= {Change}
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your responsibilities"
                name="responsibilities"
                value ={(state==null) ? "" : state.responsibilities} 
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