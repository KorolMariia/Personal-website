import React from 'react';
import './SoftSkillsItem.scss';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

export default function SoftSkillsItem({ content }) {
  return (
    <li className="section-skills-item">
      <DoneOutlineIcon sx={{ color: '#ff4081' }} />
      <p className="section-skills-item-content">{content}</p>
    </li>
  );
}
