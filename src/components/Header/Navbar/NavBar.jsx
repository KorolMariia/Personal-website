import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  let activeStyle = {
    color: '#ff4081',
  };

  return (
    <nav>
      <ul className={classes.navBar}>
        {/* <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            HOME
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cv"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
