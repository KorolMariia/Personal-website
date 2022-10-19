import React from 'react';
import Header from '../../components/Header/Header';
import SectionCV from '../../components/SectionCV/SectionCV';
import Footer from '../../components/Footer/Footer';

export default function CV() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionCV />
      </section>
      <Footer />
    </>
  );
}
