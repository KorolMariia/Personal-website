import React from 'react';
import './SectionHome.scss';

export default function SectionHome() {
  return (
    <div class="section">
      <img
        className="section-home-foto"
        src="/images/img-home.png"
        alt="Foto"
      />
      <div className="section-home-description">
        <h2 className="section-home-description-title">Hello everyone!</h2>
        <p className="section-home-description-content">
          I’m Mariia,
          <span className="section-home-description-content color">
            {' < Junior Front End Developer /> '}
          </span>
          from Ukraine.
        </p>
        <p className="section-home-description-content">
          Nice to meet you. <br /> Please take a look around!
        </p>
      </div>
    </div>
  );
}
