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
            href={'https://searchmovies-opal.vercel.app/'}
            src={'item-2.png'}
            alt={'Movies Search'}
            title={'Movies Search'}
            content={
              <>
                <p className="projects-list-content">
                  This project was bootstrapped with Create React App.
                </p>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>ReactJS: functional components and hooks</li>
                  <li>ReduxJS/toolkit</li>
                  <li>React-routers</li>
                  <li>React-hook-form for validation form</li>
                  <li>SASS</li>
                  <li>TMDB API</li>
                  <li>Axios</li>
                  <li>Redux-thunk</li>
                  <li>Redux-logger</li>
                  <li>Material-UI</li>
                  <li>Versel for Demo</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/Search-movies-ReactJS'}
          />
          <ListProjects
            href={'https://hlegals.netlify.app/'}
            src={'item-3.png'}
            alt={'HLegals'}
            title={'HLegals'}
            content={
              <>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>JS</li>
                  <li>Adaptive, responsive, @media-queries</li>
                  <li>Netlify for deploy</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/HLegals-home'}
          />
          <ListProjects
            href={'https://you-tube-api-six.vercel.app/'}
            src={'item-4.png'}
            alt={'Youtube-API'}
            title={'Youtube API'}
            content={
              <>
                <p className="projects-list-content">
                  This project was bootstrapped with ReactJS class component.
                </p>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li> ReactJS: class component</li>
                  <li>Youtube API</li>
                  <li>Axios</li>
                  <li>Material-UI</li>
                  <li>Versel for Demo</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/YouTube-API'}
          />
          <ListProjects
            href={'https://korolmariia.netlify.app/'}
            src={'item-8.png'}
            alt={'Website-Portfolio'}
            title={'Website-Portfolio'}
            content={
              <>
                <p className="projects-list-content">
                  This project was bootstrapped with Create React App.
                </p>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>ReactJS: functional components</li>
                  <li>React-routers</li>
                  <li>CSS-animation</li>
                  <li>SASS</li>
                  <li>Adaptive, responsive, @media-queries</li>
                  <li>Material-UI</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/WebSite-portfolio'}
          />
          <ListProjects
            href={'https://korolmariia.github.io/Form-registrarion/'}
            src={'item-6.png'}
            alt={'Form-registrarion'}
            title={'Multi-step Form-registrarion'}
            content={
              <>
                <p className="projects-list-content">
                  ReactJS with saving the data of the previous step and loading
                  the avatar.
                </p>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>ReactJS</li>
                  <li>Context and Reduser</li>
                  <li>SASS</li>
                  <li>Material-UI</li>
                  <li>Form validation with Yup</li>
                  <li>React-toastify</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/Form-registrarion'}
          />
          <ListProjects
            href={'https://jonyray.com/'}
            src={'item-1.png'}
            alt={'ART Gallery Jony Ray'}
            title={'ART Gallery Jony Ray'}
            content={
              <>
                <p className="projects-list-content">
                  This project was bootstrapped with WordPress.
                </p>
              </>
            }
          />

          <ListProjects
            href={'https://korolmariia.github.io/Rick-Morty-API/'}
            src={'item-5.png'}
            alt={'Rick-Morty-API'}
            title={'Rick&Morty API'}
            content={
              <>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>DOM</li>
                  <li>fetch to work with API</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/Rick-Morty-API'}
          />
          <ListProjects
            href={'https://korolmariia.github.io/Some-Product-Site/'}
            src={'item-7.png'}
            alt={'Some Product Site'}
            title={'Some Product Site'}
            content={
              <>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>BEM methodology</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/Some-Product-Site'}
          />
        </ul>
      </div>
    </div>
  );
}
