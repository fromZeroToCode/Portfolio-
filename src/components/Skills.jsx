import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: 'Languages',
    icon: '{ }',
    color: 'var(--accent-blue)',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks & Libraries',
    icon: '⚛',
    color: 'var(--accent-purple)',
    items: ['React', 'Next.js', 'Vue.js'],
  },
  {
    label: 'Databases & APIs',
    icon: '🗄',
    color: 'var(--accent-green)',
    items: ['MySQL', 'Supabase', 'Microsoft Access', 'REST APIs', 'CRUD APIs', 'PHP/MySQL APIs'],
  },
  {
    label: 'Tools & DevOps',
    icon: '🔧',
    color: 'var(--accent-orange)',
    items: ['Git', 'GitHub', 'VS Code', 'NetBeans', 'Insomnia', 'PWA'],
  },
  {
    label: 'Design & UX',
    icon: '✦',
    color: 'var(--accent-pink)',
    items: ['Figma', 'Canva', 'UI/UX Prototyping', 'Wireframing', 'Responsive Design'],
  },
  {
    label: 'Certifications',
    icon: '🎓',
    color: 'var(--accent-yellow)',
    items: [
      'Cisco CCNA: Intro to Networks',
      'Cisco: Networking Devices',
      'Cisco: Endpoint Security',
      'Cisco: Computer Hardware',
      'Udemy: UI/UX Design (Figma)',
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-label, .skills-heading',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.skill-cat',
        { y: 80, opacity: 0, scale: 0.85, rotationY: 15 },
        {
          y: 0, opacity: 1, scale: 1, rotationY: 0, stagger: 0.1, duration: 1, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section section-container">
      <div className="skills-label">Technologies</div>
      <h2 className="skills-heading">Skills &amp; Tools</h2>

      <div className="skills-grid">
        {categories.map((cat, index) => (
          <div key={index} className="skill-cat glass-panel" style={{ '--cat-color': cat.color }}>
            <div className="skill-cat-header">
              <span className="skill-cat-icon" style={{ color: cat.color }}>{cat.icon}</span>
              <h3 className="skill-cat-title">{cat.label}</h3>
            </div>
            <div className="skill-tags">
              {cat.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
