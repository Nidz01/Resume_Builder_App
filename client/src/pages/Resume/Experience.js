import React, { useContext } from 'react';
import "./forms.css"
export default function Experience(props) {
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
                name="job_Title"
              />
           <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the institute or organization that you worked for under the above job title"
                name="organization"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the address of above mentioned organization"
                name="job_location"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="month"
                placeholder="Enter the start date"
                name="job_start"
              />
              <input
                type="month"
                placeholder="Enter the end date"
                name="job_end"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter one or two sentences to describe the nature of company"
                name="company_Profile"
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