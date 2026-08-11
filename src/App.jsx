import React from 'react';
import SmoothScroll from './utils/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
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
        <Experience />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

export default App;
