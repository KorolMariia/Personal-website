import React from 'react';
import './Projects.scss';
import Header from '../../components/Header/Header';
import SectionProjects from '../../components/SectionProjects/SectionProjects';
import Footer from '../../components/Footer/Footer';

export default function Projects() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionProjects />
      </section>
      <Footer />
    </>
  );
}
