import React from 'react';
import './Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  );
}
