import React from 'react';
import './Contact.scss';
import Header from '../../components/Header/Header';
import SectionContact from '../../components/SectionContact/SectionContact';
import Footer from '../../components/Footer/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionContact />
      </section>
      <Footer />
    </>
  );
}
