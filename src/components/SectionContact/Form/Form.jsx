import React from 'react';
import './Form.scss';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    // <div>
    //   <form
    //     action="/about"
    //     name="contact v2"
    //     method="post"
    //     data-netlify="true"
    //     onSubmit="submit"
    //     data-netlify-honeypot="bot-field"
    //   >
    //     <input type="hidden" name="form-name" value="contact v2" />

    //     <div hidden>
    //       <input name="bot-field" />
    //     </div>

    //     <div>
    //       <label>
    //         First name
    //         <br />
    //         <input type="text" name="first-name" />
    //       </label>
    //     </div>

    //     <div>
    //       <label>
    //         Last name
    //         <br />
    //         <input type="text" name="last-name" />
    //       </label>
    //     </div>

    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <br />
    //       <input id="email" type="email" name="email" />
    //     </div>

    //     <div>
    //       <label>
    //         Any Comments?
    //         <br />
    //         <textarea name="comments"></textarea>
    //       </label>
    //     </div>

    //     <button type="submit">Submit The Results</button>
    //   </form>
    // </div>
    <form
      onSubmit={handleSubmit()}
      name="contact"
      method="POST"
      data-netlify="true"
      action="https://korolmariia.netlify.app/contact"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-box">
        <input
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="form-box-input"
          type="text"
          placeholder="Name *"
          name="name"
        />
        {errors.name?.type === 'required' && (
          <p className="error name">This field is required</p>
        )}
        {errors?.name?.type === 'pattern' && (
          <p className="error name">Alphabetical characters only</p>
        )}
      </div>
      <div className="form-box">
        <input
          {...register('email', { required: true })}
          className="form-box-input"
          type="email"
          placeholder="Email*"
          name="email"
        />
        {errors.email?.type === 'required' && (
          <p className="error email">This field is required</p>
        )}
      </div>
      <div className="form-box">
        <input
          {...register('subject', { required: true })}
          className="form-box-input"
          type="text"
          placeholder="Subject*"
          name="subject"
        />
        {errors.subject?.type === 'required' && (
          <p className="error subject">This field is required</p>
        )}
      </div>
      <div className="form-box">
        <textarea
          name="message"
          rows="6"
          className="contact-form-field"
          placeholder="Write message"
        ></textarea>
      </div>
      <input type="submit" className="form-box-btn" value="Send Massage" />
    </form>
  );
}
