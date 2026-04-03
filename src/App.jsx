import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Background from './components/ui/Background';
import Cursor from './components/ui/Cursor';
import ScrollReveal from './components/ui/ScrollReveal';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Meta from './components/sections/Meta';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="app-container">
      <Cursor />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Meta /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
