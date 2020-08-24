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
  const { setUsername } = props;
  console.log('setUsername', props)
  //setUsername(state.userName)
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
      <main class="container flex flex-column items-start justify-center signup">
    <Router>
        <form
          style={{
            padding: "10px",
            paddingLeft: "0px",
            width: "15%",
            height: "100%",
            background: "pink"
          }}
        >
          <aside class="flex flex-column justify-center items-center">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/profile">Profile</Link>
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
        </form>
        <div class="content flex flex-column justify-center items-center"
        style={{ flex: 1, padding: "10px" }}>
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
        </div>
    </Router>
    </main>
    </header>
  );
}