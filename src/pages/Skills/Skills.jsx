import React from 'react';
import './Skills.scss';
import Header from '../../components/Header/Header';
import Skills from '../../components/Skills/Skills';
import Footer from '../../components/Footer/Footer';

export default function PageSkills() {
  return (
    <>
      <Header />
      <section className="container">
        <Skills />
      </section>
      <Footer />
    </>
  );
}
