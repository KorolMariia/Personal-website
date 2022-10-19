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
    <form onSubmit={handleSubmit()}>
      <div className="form-box">
        <input
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="form-box-input"
          type="text"
          placeholder="Name *"
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
