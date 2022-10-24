import React from 'react';
import './Logo.scss';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/" className="logo">
      <div className="logo-container">
        <div>
          <p className="logo-content">
            0<span className="color blink">1</span>00
          </p>
          <p className="logo-content">
            <span className="color blink-2">11</span>0
            <span className="color blink">1</span>
          </p>
          <p className="logo-content">
            0<span className="color blink-2">1</span>00
          </p>
          <p className="logo-content">
            <span className="color blink">1</span>0
            <span className="color blink-2">11</span>
          </p>
        </div>
        <div>
          <p className="logo-content name">Mariia</p>
          <p className="logo-content surname">Korol</p>
        </div>
      </div>
    </NavLink>
  );
}
