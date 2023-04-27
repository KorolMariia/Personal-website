import React from 'react';
import './SectionProjects.scss';
import ListProjects from './ListProjects/ListProjects';

export default function SectionProjects() {
  return (
    <div className="section projects">
      <div>
        <h2 className="projects-title">
          My <span className="color">Projects</span>
        </h2>
      </div>
      <div>
        <ul className="projects-list">
          <ListProjects
            href={'https://nutri-chef.vercel.app/'}
            src={'nutrichef.png'}
            alt={'NutriChef'}
            title={'NutriChef'}
            content={
              <>
                <p className="projects-list-content">
                  This project was bootstrapped with Create React App.
                </p>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>ReactJS: functional components and hooks</li>
                  <li>ReduxJS/toolkit</li>
                  <li>React-router-dom</li>
                  <li>Edamam API</li>
                  <li>Axios</li>
                  <li>Redux-thunk</li>
                  <li>Redux-logger</li>
                  <li>Material-UI</li>
                  <li>Versel for Demo</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/NutriChef'}
          />
          <ListProjects
            href={'https://git-battle-redux-toolkit.vercel.app/'}
            src={'gitbattle.png'}
            alt={'Git-battle'}
            title={'Git-battle'}
            content={
              <>
                <p className="projects-list-content">
                  This project was bootstrapped with Create React App.
                </p>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>ReactJS: functional components and hooks</li>
                  <li>ReduxJS/toolkit</li>
                  <li>React-router-dom</li>
                  <li>TypeScript</li>
                  <li>GITHUB API</li>
                  <li>Axios</li>
                  <li>Redux-thunk</li>
                  <li>Redux-logger</li>
                  <li>Material-UI</li>
                  <li>Versel for Demo</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/Git-battle-ReduxToolkit-TypeScript'}
          />
          <ListProjects
            href={'https://hlegals.netlify.app/'}
            src={'hlegals.png'}
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
            href={'https://searchmovies-opal.vercel.app/'}
            src={'moviesearch.png'}
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
                  <li>React-router-dom</li>
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
            href={'https://you-tube-api-six.vercel.app/'}
            src={'youtubeapi.png'}
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
            href={'https://burger-factory.netlify.app/'}
            src={'burgerfactory.png'}
            alt={'Burger Factory'}
            title={'Burger Factory'}
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
            hrefGit={'https://github.com/KorolMariia/Burger-Factory'}
          />
          <ListProjects
            href={'https://playlist-korol-mariia.vercel.app/'}
            src={'playlist.png'}
            alt={'Playlist'}
            title={'Playlist'}
            content={
              <>
                <span className="projects-list-content">I used:</span>
                <ul className="projects-list-content">
                  <li>ReactJS: functional components and hooks</li>
                  <li>useReducer, useContext</li>
                  <li>React-router-dom</li>
                  <li>React-hook-form</li>
                  <li>JSON server</li>
                  <li>Axios</li>
                  <li>Material-UI</li>
                  <li>Vercel for Demo</li>
                </ul>
              </>
            }
            hrefGit={'https://github.com/KorolMariia/Playlist'}
          />
          <ListProjects
            href={'https://jonyray.com/'}
            src={'artgallery.png'}
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
        </ul>
      </div>
    </div>
  );
}
