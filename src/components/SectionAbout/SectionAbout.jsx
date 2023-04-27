import React from 'react'; import './SectionAbout.scss';
import ListEducation from './ListEducation/ListEducation';
import SchoolIcon from '@mui/icons-material/School';

export default function SectionAbout() {
  return (
    <div className="section">
      <div>
        <h2 className="section-about-title">
          About <span className="color">Me</span>
        </h2>
        <img
          className="section-about-foto"
          src="/images/img-about.webp"
          alt="Foto"
        />
      </div>
      <div>
        <h4 className="section-about-subtitle color">
          <SchoolIcon sx={{ marginRight: '5px' }} />
          Education
        </h4>
        <ul className="section-about-list">
          <ListEducation
            title={'REACT'}
            time={'2023'}
            place={'Hillel IT School'}
            link={'https://certificate.ithillel.ua/view/59907759'}
            desc={'Click here to view a Cetrificate'}
          />
          <ListEducation
            title={'FRONT END PRO'}
            time={'2022'}
            place={'Hillel IT School'}
            link={'https://certificate.ithillel.ua/ru/view/98330361'}
            desc={'Click here to view a Cetrificate'}
          />
          <ListEducation
            title={'FRONT END BASIC'}
            time={'2022'}
            place={'Hillel IT School'}
            link={'https://certificate.ithillel.ua/view/23624442'}
            desc={'Click here to view a Cetrificate'}
          />
          <li className="about-item">
            <h5 className="about-item-title">BUSINESS AND MANAGEMENT</h5>
            <div className="about-item-subtitle">
              <time>2007-2012 </time>
              <span className="vertical-dilimiter">&#124;</span>
              <span> Mechnikov National University (Odesa, Ukraine)</span>
            </div>
            <p className="about-item-description">
              Obtained the Master’s degree
            </p>
          </li>
        </ul>
        <p className="section-about-content color">
          {'< I try to code beautiful simple things and I love what I do />'}
        </p>
        <p className="section-about-content">
          I am a manager-economist who has decided to restart my career and pursue Front End Development.
        </p>
        <p className="section-about-content">
          I have one year of experience working on personal projects and I am committed to improving my English language skills daily.
        </p>
        <p className="section-about-content">
          My previous experience has helped me become a goal-oriented individual who can quickly adapt to new environments.
        </p>
        <p className="section-about-content">
          I always strive to find the most efficient solutions for any given task. I am ready to work in a team or independently, taking full accountability for achieving results.
        </p>
      </div>
    </div>
  );
}
