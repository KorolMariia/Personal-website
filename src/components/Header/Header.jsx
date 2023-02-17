import React from 'react';
import './Header.scss';
import NavBar from './Navbar/NavBar';
import Logo from './Logo/Logo';
import ToogleTheme from './ToggleTheme/ToogleTheme';
import { ThemeContext, themes } from '../../ThemeContext';

export default function Header() {
  return (
    <header className="header">
      <div className="header_section">
        <Logo />
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <ToogleTheme
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>
      </div>
      <NavBar />
    </header>
  );
}
