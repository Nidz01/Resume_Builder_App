import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cookies from 'universal-cookie';

import useApplicationData from './hooks/useApplicationData';
import './App.css';
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Resume from './pages/Resume';


function App() {
  
  const cookies = new Cookies();

  return (
    <div className="App">
      <Router>
        <ul className = "nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guidelines">Resume Guidelines</Link></li>
          <li><Link to="templates">Templates</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul> 
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/guidelines">
              <Guidelines/>
            </Route>
            <Route path="/templates">
              <Templates/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
