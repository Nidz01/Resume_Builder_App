import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

function App() {
const [state, setState]  = useState();
//const userList = state.users.map(user => <li>{user.name} {user.email}</li>)
  let test;
  //setState("test");
    
  useEffect (() => {
    axios.post('/users/redirect')
      .then(response => {
        //console.log("responseData",response.data)
        if(response.data){
          console.log(response.data)
          setState(true)
          console.log("true",state)
        } else {
          setState(false)
          console.log("false",state)
        }
      })
  },[])
  
console.log("outOfUseEffect",state)
  return (
    <div className="App">
      <Router>
        <ul className = "nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guidelines">Resume Guidelines</Link></li>
          <li><Link to={"/templates"}>Templates</Link></li>
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
