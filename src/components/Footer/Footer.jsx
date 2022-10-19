import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <LinkedInIcon
          className="footer-icons"
          onClick={() =>
            window.open('https://www.linkedin.com/in/mariia-korol-842893229/')
          }
        />
        <GitHubIcon
          className="footer-icons"
          onClick={() => window.open('https://github.com/KorolMariia')}
        />
      </div>
      <p className="footer-content">© 2022 All rights reserved.</p>
    </footer>
  );
}
