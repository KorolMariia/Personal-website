import React from 'react';
import './SectionProjects.scss';
import ListProjects from './ListProjects/ListProjects';

export default function SectionProjects() {
  return (
    <div className="section projects">
      <div>
        {' '}
        <h2 className="projects-title">
          My <span className="color">Projects</span>
        </h2>
      </div>
      <div>
        <ul className="projects-list">
          <ListProjects
            href={'https://korolmariia.github.io/Some-Product-Site/'}
            src={'item-1.png'}
            alt={'Some Product Site'}
            title={'Some Product Site'}
            content={`I used: HTML, CSS, BEM methodology`}
          />
          <ListProjects
            href={'https://searchmovies-opal.vercel.app/'}
            src={'item-2.png'}
            alt={'Movies Search'}
            title={'Movies Search'}
          />
          <ListProjects
            href={'https://korolmariia.github.io/HLegals-home/'}
            src={'item-3.png'}
            alt={'HLegals'}
            title={'HLegals'}
          />
          <ListProjects
            href={'https://korolmariia.netlify.app/'}
            src={'item-8.png'}
            alt={'Website-Portfolio'}
            title={'Website-Portfolio'}
          />
          <ListProjects
            href={'https://you-tube-api-six.vercel.app/'}
            src={'item-4.png'}
            alt={'Youtube-API'}
            title={'Youtube API'}
          />
          <ListProjects
            href={'https://korolmariia.github.io/Rick-Morty-API/'}
            src={'item-5.png'}
            alt={'Rick-Morty-API'}
            title={'Rick&Morty API'}
          />
          <ListProjects
            href={'https://korolmariia.github.io/Form-registrarion/'}
            src={'item-6.png'}
            alt={'Form-registrarion'}
            title={'Multi-step Form-registrarion'}
          />
          <ListProjects
            href={'#'}
            src={'item-6.png'}
            alt={'PlayList'}
            title={'PlayList'}
          />
        </ul>
      </div>
    </div>
  );
}
