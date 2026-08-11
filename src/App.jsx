import React from 'react';
import SmoothScroll from './utils/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import AmbientBackground from './components/AmbientBackground';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Certificates />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

export default App;
