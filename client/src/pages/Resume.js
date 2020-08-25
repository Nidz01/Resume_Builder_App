import  React, { useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Profile from './Resume/Profile';
import Summary from './Resume/Summary';
import Competencies from './Resume/Competencies';
import Achievements from './Resume/Achievements';
import Experience from './Resume/Experience';
import Qualification from './Resume/Qualification';

export default function Resume(props) {

  const routes = [
    {
      path: "/profile",
      exact: true,
      sidebar: () => <div>Profile</div>,
      main: () => <Profile/>
    },
    {
      path: "/summary",
      sidebar: () => <div>SUMMARY OF QUALIFICATIONS</div>,
      main: () => <Summary/>
    },
    {
      path: "/competencies",
      sidebar: () => <div>CORE COMPETENCIES</div>,
      main: () => <Competencies/>
    },
    {
      path: "/achievement",
      sidebar: () => <div>ACHIEVEMENTS</div>,
      main: () => <Achievements/>
    },
    {
      path: "/experience",
      sidebar: () => <div>PROFIESSIONAL EXPERIENCE</div>,
      main: () => <Experience/>
    },
    {
      path: "/qualification",
      sidebar: () => <div>EDUCATION AND QUALIFICATIONS</div>,
      main: () => <Qualification/>
    }
  ];

  return(
    <header>
      <main class="container flex items-start signup">
    <Router>
          <aside className= "resume_nav">
            <ul style={{}}>
              <br/><br/>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/summary">SUMMARY OF QUALIFICATIONS</Link>
              </li>
              <li>
                <Link to="/competencies">CORE COMPETENCIES</Link>
              </li>
              <li>
                <Link to="/achievement">ACHIEVEMENTS</Link>
              </li><li>
                <Link to="/experience">PROFIESSIONAL EXPERIENCE</Link>
              </li><li>
                <Link to="/qualification">EDUCATION AND QUALIFICATIONS</Link>
              </li>
            </ul>
          </aside>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={route.main}
              />
            ))}
          </Switch>
    </Router>
    </main>
    </header>
  );
}