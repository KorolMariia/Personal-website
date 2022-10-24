import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';

export default function NavBar() {
  let activeStyle = {
    color: '#ff4081',
  };

  return (
    <>
      <label for="nav-trigger" class="nav-open">
        <GridViewIcon
          className="color"
          sx={{ fontSize: '2rem', boxShadow: '4px 2px 5px #ff4081' }}
        />
      </label>
      <nav className="nav">
        <input id="nav-trigger" type="checkbox" />
        <label for="nav-trigger" className="background"></label>
        <ul className="nav-list">
          <li className="nav-list-item">
            <label for="nav-trigger" className="nav-close">
              <CloseIcon />
            </label>
            <NavLink
              className="nav-list-item-link"
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ABOUT ME
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className="nav-list-item-link"
              to="/skills"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SKILLS
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className="nav-list-item-link"
              to="/projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className="nav-list-item-link"
              to="/cv"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CV
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className="nav-list-item-link"
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
