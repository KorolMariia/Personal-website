import React from 'react';
import './ToogleTheme.scss';

const Toggle = ({ value, onChange }) => (
  <label className="switch">
    <input
      className="switch_input"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className="switch_slider"></span>
  </label>
);

export default Toggle;
