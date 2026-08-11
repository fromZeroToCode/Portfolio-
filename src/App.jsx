import React from 'react';
import SmoothScroll from './utils/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

export default App;
