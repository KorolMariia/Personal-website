import React from 'react';
import './ListProjects.scss';

export default function ListProjects({ href, src, alt, title, content }) {
  return (
    <li class="projects-item">
      <a
        href={href}
        target="_blank"
        class="projects-item-link item--focused"
        rel="noreferrer"
      >
        <img
          src={`/images/projects/${src}`}
          alt={alt}
          class="projects-item-screen"
        />
        <div class="projects-item-info">
          <h3 class="projects-item-title">{title}</h3>
          <p className="projects-item-content">{content}</p>
        </div>
      </a>
    </li>
  );
}
