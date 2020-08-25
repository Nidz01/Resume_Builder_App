import React, { useContext } from 'react';
import "./forms.css"
export default function Profile(props) {
  return (
        <form
          className="flex signup-form"
          style={{ paddingLeft: "0px" }}
        >
          <div className="content flex flex-column justify-center items-center">
            <div className="text">
              <h1>Create Profile</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Job Title"
                name="firstName"
              />
             <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your First Name"
                name="firstName"
              />
             <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your Last Name"
                name="lastName"
              />
             <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="someone@email.com"
                name="email"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="phone"
                placeholder="(416) 285-3455"
                name="phone_number"
              />
              <section className="userValidation">error</section>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
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