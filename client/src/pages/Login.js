import "./style.css";
import axios from 'axios';
import React, { useState } from "react";


export default function Login(props) {
  
  const [state, setState] = useState({
    userName: "",
    password: ""
  })
  
  const [error, setError] = useState({
    userError:"",
    passwordError:"",
    userpassError:""
  })
  
  const Change = (event) => {
    const { name, value } = event.target
      setState(prev => ({
        ...prev,
        [name]: value
      }))
  }

  const login = (event) => {
    event.preventDefault()
    setError('');
    let anyError = false;
    if (state.userName === '') {
      setError(prev => ({
        ...prev,
        userError:"Username is required" 
        }) 
      );
      anyError = true;
    }

    if (state.password === '') {
      setError(prev => ({
        ...prev,
        passwordError:"Password is required" 
        }) 
      );
      anyError = true;
    } 
    console.log(error)
    if(anyError === false) {
      event.preventDefault()
      axios.post('/users/login', { userName: state.userName, password:state.password, withCredentials: true})
      .then(response => {
        //it doesn't work since Login.js component doesn't receive anything from the backend to identify if the password is correct
        if(response.data === false){
          setError(prev => ({...prev, userpassError: "Wrong username or password"}))
        }
      })
      .catch(error => console.log(error))
    }
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
              <section className="userValidation">{error.userError}</section>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                
                onChange={Change}
              />
              <section className="userValidation">{error.passwordError}</section>
              <section className="userValidation">{error.userpassError}</section>
              <span
                className="full float-right"
                aria-label="toggle password visibility"
              >
              </span>

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