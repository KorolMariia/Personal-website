import React from 'react';
import Header from '../../components/Header/Header';
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import Footer from '../../components/Footer/Footer';

export default function About() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionAbout />
      </section>
      <Footer />
    </>
  );
}
