import React from 'react';
import './ListProjects.scss';

export default function ListProjects({ href, src, alt, title, content }) {
  return (
    <li className="projects-item">
      <a
        href={href}
        target="_blank"
        className="projects-item-link item--focused"
        rel="noreferrer"
      >
        <img
          src={`/images/projects/${src}`}
          alt={alt}
          className="projects-item-screen"
        />
        <div className="projects-item-info">
          <h3 className="projects-item-title">{title}</h3>
          <div className="projects-item-content">{content}</div>
        </div>
      </a>
    </li>
  );
}
