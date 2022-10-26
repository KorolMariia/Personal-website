import React from 'react';
import Header from '../../components/Header/Header';
import SectionAdditionally from '../../components/SectionAdditionally/SectionAdditionally';
import Footer from '../../components/Footer/Footer';

export default function PageAbout() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionAdditionally />
      </section>
      <Footer />
    </>
  );
}
