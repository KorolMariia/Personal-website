import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageSkills() {
  const navigate = useNavigate();

  function navigateBackToMain() {
    navigate('/contact');
  }

  return (
    <>
      <section className="container">
        <p>Your message sent</p>
        <input
          type="button"
          value="Go Back"
          onClick={() => navigateBackToMain()}
        />
      </section>
    </>
  );
}
