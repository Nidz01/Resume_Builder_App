import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import useApplicationData from './hooks/useApplicationData';
import './App.css';
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
//import { checkout } from '../../backend/app';

const cookies = new Cookies();

function App(props) {
const [state, setState]  = useState();
//const userList = state.users.map(user => <li>{user.name} {user.email}</li>)
  //setState("test");
    
  useEffect (() => {
    axios.post('/users/redirect')
      .then(response => {
        console.log()
        if(response.data.loggedUser){
          console.log(response.data.loggedUser)
          setState(true)
          
        } else {
          setState(false)          
        }
      })
  })
  
console.log(cookies.get('userName'))
  return (
    <div className="App">
      <Router>
        <ul className = "nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guidelines">Resume Guidelines</Link></li>
          <li><Link to={"/templates"}>Templates</Link></li>
          <li><Link to="/login">{state ? `Logged as: ${cookies.get('userName')}` : "Login"}</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul> 
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/guidelines">
              <Guidelines/>
            </Route>
            <Route path="/templates"> {state ? <Templates/> : <Login/>} </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
