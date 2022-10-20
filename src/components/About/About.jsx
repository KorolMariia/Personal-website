import React from 'react';
import './About.scss';
import ListEducation from './ListEducation/ListEducation';
import SchoolIcon from '@mui/icons-material/School';

export default function About() {
  return (
    <div className="section">
      <div>
        <h2 className="section-about-title">
          About <span className="color">Me</span>
        </h2>
        <img
          className="section-about-foto"
          src="/images/img-about.png"
          alt="Foto"
        />
      </div>
      <div>
        <ul className="section-about-list">
          <h4 className="section-about-subtitle">
            <SchoolIcon sx={{ marginRight: '5px' }} />
            Education
          </h4>
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
          <ListEducation
            title={'BUSINESS AND MANAGEMENT'}
            time={'2007-2012'}
            place={'Mechnikov National University (Odesa, Ukraine)'}
            link={'#'}
            desc={'Obtained the Master’s degree'}
          />
        </ul>
        <p className="section-about-content color">
          {'< I try to code beautiful simple things and I love what I do />'}
        </p>
        <p className="section-about-content">
          I’m a Manager-economist who decided to reload career and restart it as
          a Front End Developer.{' '}
        </p>
        <p className="section-about-content">
          My goal is to become a successful developer and build my career in IT.{' '}
        </p>
        <p className="section-about-content">
          {' '}
          Previously, I worked as a Top-manager in retail, so I have good
          experience in teamwork, I know how to find solutions in any
          problematic situation and take full responsibility for the results of
          my own work.{' '}
        </p>
        <p className="section-about-content">
          {' '}
          I have a sense of purpose in studying a case that is new for me.{' '}
        </p>
      </div>
    </div>
  );
}
