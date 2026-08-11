import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal section heading
      gsap.fromTo('.about-label, .about-heading',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      // Word-by-word reveal for statement with more pop
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(words,
        { opacity: 0, y: 20, rotateX: 90 },
        {
          opacity: 1, y: 0, rotateX: 0, stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          }
        }
      );

      // Cards staggered pop up with continuous parallax
      gsap.fromTo('.about-card',
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.about-cards', start: 'top 85%' }
        }
      );

      gsap.to('.about-cards', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statement = "I like being able to see the overall product and how everything comes together. I focus on building interfaces that are clean, useful, and genuinely helpful for people every single day.";

  const cards = [
    { label: 'Education', value: 'Gordon College', sub: 'BS Information Technology · GPA 1.3' },
    { label: 'Dean\'s List', value: 'Academic Excellence', sub: '2023 — Present' },
    { label: 'Location', value: 'Philippines 🇵🇭', sub: 'Olongapo City, Zambales' },
    { label: 'Languages', value: 'Filipino · English', sub: 'Professional proficiency' },
  ];

  return (
    <section ref={sectionRef} id="about" className="about-section section-container">
      <div className="about-label">Background</div>
      <h2 className="about-heading">I love building.</h2>

      <p ref={textRef} className="about-statement">
        {statement.split(' ').map((word, i) => (
          <span key={i} className="word">{word} </span>
        ))}
      </p>

      <div className="about-cards">
        {cards.map((card, i) => (
          <div key={i} className="about-card glass-panel">
            <span className="card-label text-accent-blue">{card.label}</span>
            <span className="card-value">{card.value}</span>
            <span className="card-sub">{card.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
