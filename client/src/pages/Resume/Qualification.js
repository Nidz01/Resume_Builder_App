import React, { useContext } from 'react';
import "./forms.css"
export default function Qualification(props) {
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
                name="degree_title"
              />
           <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter name of the credential awarding institute."
                name="institute"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter the name of the country for the above mentioned institute"
                name="country"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="number"
                min="1900" max="9999"
                placeholder="YYYY - Enter the year in which you completed the above mentioned credential"
                name="completion_year"
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