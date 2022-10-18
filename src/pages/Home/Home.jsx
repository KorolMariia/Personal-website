import React from 'react';
import Header from '../../components/Header/Header';
import SectionHome from '../../components/SectionHome/SectionHome';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionHome />
      </section>
      <Footer />
    </>
  );
}
