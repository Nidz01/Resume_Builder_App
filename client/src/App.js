import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Autorization from './hooks/authorization';
import useResumeContext from './hooks/useResumeContext';
import './App.css';
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Resume from './pages/Resume';
import PDF from './pdf/index';

function App(props) {
  const { state, remove, setUsername } = Autorization();
  const {resumeState, setResumeState} = useResumeContext();

  return (
    <div className="App">
      <Router>
        <ul className = "nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guidelines">Resume Guidelines</Link></li>
          <li><Link to="/templates">Templates</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">{state.userName ? `Logged as: ${state.userName}` : "Login"}</Link></li>
          <li><Link to="/pdf">PDF</Link></li>
          <li> <Link onClick={remove} to="/">{state.userName ? 'Logout' : null} </Link></li>
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
              {state.userName ? <Resume userId={state.userId} resumeState={resumeState} setResumeState={setResumeState}/> : <Login setUsername={setUsername}/>}
            </Route>
            <Route path="/pdf">
              <PDF />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
