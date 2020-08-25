import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cookies from 'universal-cookie';


//import useApplicationData from './hooks/useApplicationData';
import Autorization from './hooks/authorization';
import './App.css';
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Resume from './pages/Resume';


function App(props) {
  
  const { state, remove, setState, setUsername } = Autorization();
  return (
    <div className="App">
      <Router>
        <ul className = "nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guidelines">Resume Guidelines</Link></li>
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">{state.userName ? `Logged as: ${state.userName}` : "Login"}</Link></li>
         <li style={{color: "rgba(88, 27, 152, 0.67)"}}onClick={remove}>{state.userName ? 'Logout' : null}</li>
         </ul> 
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/guidelines">
              <Guidelines/>
            </Route>
            <Route path="/templates">
              <Templates setUsername={setUsername}/>
            </Route>
            <Route path="/login">
              <Login setUsername={setUsername}/>
            </Route>
            <Route path="/register">
              <Register setUsername={setUsername}/>
            </Route>
            <Route path="/resume">
              {state.userName ? <Resume /> : <Login setUsername={setUsername}/>}
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
