import React from 'react';
import './SectionSkills.scss';
import HardSkills from './HardSkills/HardSkills';
import SoftSkillsItem from './SotfSkills/SoftSkillsItem';

export default function SectionSkills() {
  return (
    <div className="section skills">
      <div className="section-skills">
        <h2 className="section-skills-title">
          Hard <span className="color">Skills</span>
        </h2>
        <HardSkills />
      </div>
      <div className="b">
        <h2 className="section-skills-title">
          Soft <span className="color">Skills</span>
        </h2>
        <ul className="section-skills-list">
          <SoftSkillsItem content={'Honesty and integrity'} />
          <SoftSkillsItem content={'Friendliness'} />
          <SoftSkillsItem content={' Ability to manage time effectively'} />
          <SoftSkillsItem content={'Good list ening skills'} />
          <SoftSkillsItem content={'Detail-oriented'} />
          <SoftSkillsItem content={'Self-motivation'} />
          <SoftSkillsItem content={'Ability to make good decisions'} />
          <SoftSkillsItem content={'Empathy for others'} />
          <SoftSkillsItem
            content={'Willingness to see a difficult job through to the end'}
          />
          <SoftSkillsItem
            content={'Ability to deal with conflict gracefully'}
          />
          <SoftSkillsItem content={'Adaptability'} />
          <SoftSkillsItem content={'Reliability'} />
        </ul>
      </div>
    </div>
  );
}
