import React, { useContext } from 'react';
import "./forms.css"
export default function Profile(props) {
  return (
<<<<<<< HEAD
    <form
    className="flex signup-form"
    style={{ paddingLeft: "0px" }}
  >
    <div className="content flex flex-column justify-center items-center">
      <div className="text">
        <h1>Information about you that highlights on top of resume</h1>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your job role or professional title. e.g Full Stack Developer"
          name="prof_title"
        />
     <section className="userValidation">error</section>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your first name."
          name="first_name"
        />
        <section className="userValidation">error</section>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your last name"
          name="last_name"
        />
        <section className="userValidation">error</section>
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <section className="userValidation">error</section>
      </div>
      <div className="form-group">
        <input
          type="number"
          placeholder="Enter your phone number"
          name="phone_number"
        />
        <section className="userValidation">error</section>
      </div>
      <div className="form-group">
        <input  type="submit" value="SIGNUP" />
      </div>
    </div>
  </form>
=======
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
>>>>>>> 077f0eece8e9be0f2539ee2a11a92c485b15eaa7
  )
}