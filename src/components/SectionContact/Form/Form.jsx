import React from 'react';
import './Form.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const notify = () => toast('Your message sent');
  return (
    <div>
      <form
        action="/"
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
          />
        </div>
        <div className="form-box">
          <input
            id="email"
            type="email"
            name="email"
            className="form-box-input"
            placeholder="Email *"
          />
        </div>
        <div className="form-box">
          <input
            type="text"
            name="subject"
            className="form-box-input"
            placeholder="Subject *"
          />
        </div>
        <div className="form-box">
          <textarea
            name="message"
            rows="6"
            className="contact-form-field"
            placeholder="Write message"
          ></textarea>
        </div>
        <button type="submit" className="form-box-btn" onClick={notify}>
          Send Massage
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  );
}
