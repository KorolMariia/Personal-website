import React from 'react';
import './SectionCV.scss';

export default function SectionCV() {
  return (
    <div className="section">
      <img className="section-cv-img" src="/images/CV.webp" alt="CV" />
      <div className="section-cv-description">
        <a
          href="/CV/CV Trainee Front End Korol_Mariia.pdf"
          download
          className="btn-download"
        >
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}
