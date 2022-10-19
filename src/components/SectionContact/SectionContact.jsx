import React from 'react';
import './SectionContact.scss';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';

export default function SectionContact() {
  return (
    <>
      <div className="section">
        <ContactList />
        <div className="section-contact-formbox">
          <Form />
        </div>
      </div>
    </>
  );
}
