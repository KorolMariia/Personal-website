import React from 'react';
import './SoftSkillsItem.scss';

export default function SoftSkillsItem({ content }) {
  return (
    <li className="section-skills-item">
      <p className="section-skills-item-content">{content}</p>
    </li>
  );
}
