import React from 'react';
import './Logo.scss';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img className="logo" src="/images/logo.png" alt="Logo" />
      </NavLink>
    </div>
  );
}
