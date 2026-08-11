import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

// Particle configuration
const particleColors = ['var(--accent-blue)', 'var(--accent-green)', 'var(--accent-pink)', 'var(--accent-orange)', 'var(--accent-yellow)', 'var(--accent-purple)'];
const numParticles = 24;

const Hero = () => {
  const sectionRef = useRef(null);
  const particlesRef = useRef([]);

  /* ── GSAP entrance + scroll scale ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo('.hero-name',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo('.hero-subtitle',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo('.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.2'
      );

      // Scroll parallax scale
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        scale: 0.95,
        opacity: 0,
        y: 40,
      });

      // Floating Particles Animation
      particlesRef.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, {
          x: 'random(-40vw, 40vw)',
          y: 'random(-40vh, 40vh)',
          scale: 'random(0.4, 1.2)',
          opacity: 'random(0.3, 0.7)',
        });
        
        gsap.to(el, {
          x: '+=random(-60, 60)',
          y: '+=random(-60, 60)',
          rotation: 'random(-180, 180)',
          duration: 'random(4, 8)',
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero-section">
      <div className="hero-particles">
        {[...Array(numParticles)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className={`hero-particle shape-${i % 3}`}
            style={{ backgroundColor: particleColors[i % particleColors.length] }}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-name">
          Justin O. <br />
          <span className="text-accent-blue">Del Rosario</span>
        </h1>

        <p className="hero-subtitle">
          Frontend Developer building clean, interactive web experiences.
        </p>

        <div className="hero-cta-row">
          <a href="#experience" className="btn btn-primary hero-cta">View Projects</a>
          <a href="#contact" className="btn btn-outline hero-cta">Contact</a>
          <a href="https://github.com/JustDev9" target="_blank" rel="noreferrer" className="hero-cta hero-icon-link">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/justin-del-rosario-103a17427/" target="_blank" rel="noreferrer" className="hero-cta hero-icon-link">
            <LinkedinIcon size={20} />
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number text-accent-green">3rd</span>
            <span className="stat-label">Intl Hackathon</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-number text-accent-purple">1.3</span>
            <span className="stat-label">GPA (Highest Honors)</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-number text-accent-pink">417+</span>
            <span className="stat-label">Hackathon Devs</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <ChevronDown size={20} className="hero-scroll-icon" />
      </a>
    </section>
  );
};

export default Hero;
