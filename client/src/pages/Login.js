import "./style.css";
import axios from 'axios';
import React, { useState } from "react";
const bcrypt = require('bcryptjs');

export default function Login(props) {
  const [state, setState] = useState({
    userName: "",
    password: ""
  })
  const [error, setError] = useState();
  
  
    const Change = (event) => { 
    const { name, value } = event.target
      setState(prev => ({
        ...prev,
        [name]: value
      }))
    }

  
  const login = (event) => {event.preventDefault() 
    axios.post('/users/login', { userName: state.userName, password:state.password, withCredentials: true})
    .then(response => {
      console.log(response.data)
      if(response.data === ""){
        setError("ERROR: Wrong username or password")
      }
    })
    .catch(error => console.log(error))
  }

  
  return (
    <header>
      <main className="container flex flex-column items-center justify-center login">
        <form
         onSubmit={login}
          className="flex justify-between login-form"
          style={{ paddingRight: "0px" }}
        >
          <div className="content flex flex-column justify-center items-center">
            <div className="text flex flex-column justify-center items-center">
              <h1>user login</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="enter your username"
                name="userName"
                onChange={Change}
                
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                
                onChange={Change}
              />
              <span
                className="full float-right"
                aria-label="toggle password visibility"
              >
              </span>
              <section className="userValidation">{error}</section>
            </div>
            <div className="form-group">
              <input type="submit" value="LOGIN" />
            </div>
          </div>
          <aside className="flex flex-column justify-center items-center">
            <h1>welcome, back!</h1>
            <h2>
              by creating your account your agree to our privacy and policy.
            </h2>
            <button type="button">
              <a href="/register" className="text-white">
                SIGNUP
              </a>
            </button>
          </aside>
        </form>
      </main>
    </header>
  );
}