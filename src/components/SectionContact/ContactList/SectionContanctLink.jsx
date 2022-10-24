import React from 'react';
import './SectionContactLink.scss';

export default function SectionContactLink({ link, content }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-item-link"
    >
      <span className="contact-item-content">{content}</span>
    </a>
  );
}
