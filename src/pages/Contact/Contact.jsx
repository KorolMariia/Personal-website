import React from 'react';
import './Contact.scss';
import Header from '../../components/Header/Header';
import SectionContact from '../../components/SectionContact/SectionContact';

export default function Contact() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionContact />
      </section>
      <p className="footer-contact">© 2022 All rights reserved.</p>
    </>
  );
}
