import React from 'react';
import './ListEducation.scss';

export default function ListEducation({ title, time, place, link, desc }) {
  return (
    <li className="about-item">
      <h5 className="about-item-title">{title}</h5>
      <div className="about-item-subtitle">
        <time>{time} </time>
        <span className="vertical-dilimiter">&#124;</span>
        <span> {place}</span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="about-item-description link"
      >
        {desc}
      </a>
    </li>
  );
}
