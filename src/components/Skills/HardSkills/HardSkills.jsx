import React from 'react';
import './HardSkills.scss';

export default function HardSkills() {
  return (
    <div className="skills-container">
      <div className="skills-carousel">
        <figure className="skills-slide">
          <img
            src="/images/logo/html-logo.webp"
            alt="HTML-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">HTML</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/css-logo.webp"
            alt="CSS-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">CSS</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/js-logo.webp"
            alt="JavaScript-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">JavaScript</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/sass-logo.webp"
            alt="Sass-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">SASS</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/react-logo.webp"
            alt="React-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">React</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/redux-logo.webp"
            alt="Redux logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Redux</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/git-logo.webp"
            alt="Git-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Git</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/webpack-logo.webp"
            alt="Webpack-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Webpack</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/gulp-logo.webp"
            alt="Gulp logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Gulp</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/figma-logo.webp"
            alt="Figma-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Figma</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/vscode-logo.webp"
            alt="VScode-logo"
            className="skills-logo ps-logo"
          />
          <span className="skills-slide-content">VScode</span>
        </figure>
      </div>
    </div>
  );
}
