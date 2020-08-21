import React, { useState } from "react";
import "./style.css";
import axios from 'axios';
const bcrypt = require('bcryptjs');

export default function Register(props) {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
 
  const [error, setError] = useState({
    userError: "",
    emailError: "",
    passwordError: "",
    confirmError: ""
  })

  const Change = (event) => { 
  const { name, value } = event.target
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const save = (event) => {
    event.preventDefault();
    setError('')
    let anyError = false;

    if (state.userName === '') {
     setError(prev => ({
       ...prev,
       userError:"Required field" 
     })
    )
    anyError = true;
    }

    if (state.email=== '') {
      setError(prev => ({
        ...prev,
        emailError:"Required field" 
      }) 
    )
    anyError = true;
    }

    if (state.password=== '') {
      setError(prev => ({
        ...prev,
        passwordError:"Required field" 
      }) 
    )
    anyError = true;
    }

    if (state.confirmPassword=== '') {
      setError(prev => ({
        ...prev,
        confirmError:"Required field" 
      }) 
    )
    anyError = true;
    }

    if (state.password != state.confirmPassword){
      setError(prev => ({
        ...prev,
        confirmError:"Passwords do not match" 
      }) 
    )
    anyError = true;
    }

    if (state.password.length < 6) {
      setError(prev => ({
        ...prev,
        passwordError:"Passwords must consist of at least 6 characters." 
      }) 
    )
    anyError = true;
    }

    if (anyError === false) {
      axios.post('/users/register', { userName: state.userName, email: state.email})
      .then(response => {
        if(response.data !== ""){
          setError(prev => ({
            ...prev,
          confirmError: "Username or email already exists !" 
          }) 
        );
          return
        }
      })
      .catch(error => console.log(error))
      //use bcrypt for password  to save it in DB
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(state.password, salt, function(err, hash) {
          axios.post('/users', { email: state.email, password: hash, name: state.userName,withCredentials: true  })
          .then(user => setState(user))
          .catch(error => setError(error));
        });
      });
    }
  }
  
  return (
    <header>
      <main className="container flex flex-column items-center justify-center signup">
        <form
          onSubmit={save}
          className="flex signup-form"
          style={{ paddingLeft: "0px" }}
        >
          <aside className="flex flex-column justify-center items-center">
            <h1>hello, friend!</h1>
            <h2>
              by creating your account your agree to our privacy and policy.
            </h2>
            <button  type="button">
              <a href="/login" className="text-white">
                LOGIN
              </a>
            </button>
          </aside>
          <div className="content flex flex-column justify-center items-center">
            <div className="text">
              <h1>create account</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your username"
                name="userName"
                onChange={Change}
              />
           <section className="userValidation">{error.userError}</section>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="someone@email.com"
                name="email"
                onChange={Change}
              />
              <section className="userValidation">{error.emailError}</section>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={Change}
              />
              <section className="userValidation">{error.passwordError}</section>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={Change}
              />
              <section className="userValidation">{error.confirmError}</section>
            </div>
            <div className="form-group">
              <input  type="submit" value="SIGNUP" />
            </div>
          </div>

        </form>
      </main>
    </header>
  );
}