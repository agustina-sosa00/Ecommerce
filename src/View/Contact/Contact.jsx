import React, { useState } from 'react';
import './Contact.css';
import { modalAlert } from '../../Utils/modalAlert';
import { formValidate } from '../../Utils/formValidate';
export const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: '',
    message: '',
  });

  console.log('error', error);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const errors = formValidate(form);
    setError(errors);
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = () => {
    modalAlert({
      icon: 'success',
      text: '¡Message sent successfully!',
      textButton: 'Ok',
    });
    setForm({ email: '', message: '' });
  };

  return (
    <section className="section-contact">
      <div className="container-map-contact ">
        <iframe
          className="map-contact"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52535.34106994075!2d-58.39664568057331!3d-34.617843964624335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1746898329704!5m2!1ses-419!2sar"
        ></iframe>
      </div>
      <div className="container-form ">
        <div className="form-contact">
          <h2 className="title-form-contact">Contact</h2>
          <p className="mb-5 leading-relaxed text-gray-600">Send email</p>
          <div className="box-input-form-contact">
            <label htmlFor="email" className="label-form-contact">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-form-contact"
              value={form.email}
              onChange={handleOnChange}
            />
            {error.email && (
              <p className="text-error-contact ">{error.email}</p>
            )}
          </div>
          <div className="box-input-form-contact">
            <label htmlFor="message" className="label-form-contact">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea-form-contact"
              value={form.message}
              onChange={handleOnChange}
            ></textarea>
            {error.message && (
              <p className="text-error-contact ">{error.message}</p>
            )}
          </div>
          <button
            className="button-form-contact "
            onClick={handleOnSubmit}
            disabled={form.email.length < 1 || form.message.length < 1}
          >
            Send
          </button>
          <p className="info-form-contact">
            Remember that our business hours are <b>Monday to Saturday</b> from
            <b> 9am to 8pm</b>.
          </p>
        </div>
      </div>
    </section>
  );
};
