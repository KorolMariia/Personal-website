import React from 'react';
import './HardSkills.scss';

export default function HardSkills() {
  return (
    <div className="skills-container">
      <div className="skills-carousel">
        <figure className="skills-slide">
          <img
            src="/images/logo/html-logo.png"
            alt="HTML-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">HTML</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/css-logo.png"
            alt="CSS-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">CSS</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/js-logo.png"
            alt="JavaScript-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">JavaScript</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/sass-logo.png"
            alt="Sass-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">SASS</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/react-logo.png"
            alt="React-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">React</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/redux-logo.png"
            alt="Redux logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Redux</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/git-logo.png"
            alt="Git-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Git</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/webpack-logo.png"
            alt="Webpack-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Webpack</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/gulp-logo.png"
            alt="Gulp logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Gulp</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/figma-logo.png"
            alt="Figma-logo"
            className="skills-logo"
          />
          <span className="skills-slide-content">Figma</span>
        </figure>
        <figure className="skills-slide">
          <img
            src="/images/logo/vscode-logo.png"
            alt="VScode-logo"
            className="skills-logo ps-logo"
          />
          <span className="skills-slide-content">VScode</span>
        </figure>
      </div>
    </div>
  );
}
