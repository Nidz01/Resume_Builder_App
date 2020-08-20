import React from 'react';
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
  
  //const {state, setState}  = useApplicationData();
 
  
//const userList = state.users.map(user => <li>{user.name} {user.email}</li>)

  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guidelines">Resume Guidelines</Link></li>
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
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/templates">
              <Templates/>
            </Route>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
