import React from 'react';
import './Form.scss';

export default function Form() {
  return (
    <div>
      <form
        action="https://korolmariia.netlify.app/contact"
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
            name="email"
            className="form-box-input"
            placeholder="Subject *"
            required
          />
        </div>

        <div className="form-box">
          <textarea
            name="comments"
            rows="6"
            className="contact-form-field"
            placeholder="Write message"
            required
          ></textarea>
        </div>

        <button type="submit" className="form-box-btn">
          Send Massage
        </button>
      </form>
    </div>
    // <form
    //   onSubmit={handleSubmit()}
    //   name="contact"
    //   method="POST"
    //   data-netlify="true"
    //   action="https://korolmariia.netlify.app/contact"
    //   data-netlify-honeypot="bot-field"
    // >
    //   <input type="hidden" name="bot-field" />
    //   <input type="hidden" name="form-name" value="contact" />
    //   <div className="form-box">
    //     <input
    //       {...register('name', {
    //         required: true,
    //         pattern: /^[A-Za-z]+$/i,
    //       })}
    //       className="form-box-input"
    //       type="text"
    //       placeholder="Name *"
    //       name="name"
    //     />
    //     {errors.name?.type === 'required' && (
    //       <p className="error name">This field is required</p>
    //     )}
    //     {errors?.name?.type === 'pattern' && (
    //       <p className="error name">Alphabetical characters only</p>
    //     )}
    //   </div>
    //   <div className="form-box">
    //     <input
    //       {...register('email', { required: true })}
    //       className="form-box-input"
    //       type="email"
    //       placeholder="Email*"
    //       name="email"
    //     />
    //     {errors.email?.type === 'required' && (
    //       <p className="error email">This field is required</p>
    //     )}
    //   </div>
    //   <div className="form-box">
    //     <input
    //       {...register('subject', { required: true })}
    //       className="form-box-input"
    //       type="text"
    //       placeholder="Subject*"
    //       name="subject"
    //     />
    //     {errors.subject?.type === 'required' && (
    //       <p className="error subject">This field is required</p>
    //     )}
    //   </div>
    //   <div className="form-box">
    //     <textarea
    //       name="message"
    //       rows="6"
    //       className="contact-form-field"
    //       placeholder="Write message"
    //     ></textarea>
    //   </div>
    //   <input type="submit" className="form-box-btn" value="Send Massage" />
    // </form>
  );
}
