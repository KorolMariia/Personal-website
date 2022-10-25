import React from 'react';
import './Form.scss';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();

  function navigateToUp() {
    navigate('/up');
  }
  return (
    <div>
      <form
        name="contact v2"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact v2" />
        <div hidden>
          <input name="bot-field" />
        </div>
        <div className="form-box">
          <input
            type="text"
            name="name"
            className="form-box-input"
            placeholder="Name *"
            required
          />
        </div>
        <div className="form-box">
          <input
            id="email"
            type="email"
            name="email"
            className="form-box-input"
            placeholder="Email *"
            required
          />
        </div>
        <div className="form-box">
          <input
            type="text"
            name="subject"
            className="form-box-input"
            placeholder="Subject *"
            required
          />
        </div>
        <div className="form-box">
          <textarea
            name="message"
            rows="6"
            className="contact-form-field"
            placeholder="Write message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="form-box-btn"
          onClick={() => navigateToUp()}
        >
          Send Massage
        </button>
      </form>
    </div>
  );
}
