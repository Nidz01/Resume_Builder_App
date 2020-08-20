import React, { useState } from "react";
import "./style.css";
import axios from 'axios';

export default function Register(props) {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState("");

  const Change = (event) => { 
  const { name, value } = event.target
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const save = (event) => {
    event.preventDefault();
    if (state.name === '' && state.email === '' && state.password === '') {
      setError("Required field");
      return
    }
    if (state.userName === '') {
      setError("Required field");
      return
    }
    if (state.email === '') {
      setError("Required field");
      return
    }
    setError('');
    
    alert('save')
   // axios.post('/users', { email: state.email, password: state.password, name: state.userName }
  //  ).catch(error => setError(error));
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
            <section className="userValidation">{error}</section>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your username"
                name="userName"
                onChange={Change}
              />
          
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="someone@email.com"
                name="email"
                onChange={Change}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={Change}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={Change}
              />
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