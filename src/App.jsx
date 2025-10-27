import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App(){
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="education" className="section"><Education /></section>
        <section id="services" className="section"><Services /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
