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
              <h1>Create Achievements</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your username"
                name="userName"
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
                type="password"
                placeholder="Password"
                name="password"
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