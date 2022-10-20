import React from 'react';
import './About.scss';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

export default function PageAbout() {
  return (
    <>
      <Header />
      <section className="container">
        <About />
      </section>
      <Footer />
    </>
  );
}
