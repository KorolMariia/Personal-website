import React from 'react';
import './Header.scss';
import NavBar from './Navbar/NavBar';
import Logo from './Logo/Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
}
