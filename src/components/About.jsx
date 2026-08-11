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
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      // Word-by-word reveal for statement
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(words,
        { opacity: 0.08, y: 10 },
        {
          opacity: 1, y: 0, stagger: 0.04,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 1.5,
          }
        }
      );

      // Cards
      gsap.fromTo('.about-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-cards', start: 'top 80%' }
        }
      );
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
