import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Star, BookOpen, Zap } from 'lucide-react';
import './Leadership.css';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: <Users size={20} />,
    color: 'var(--accent-blue)',
    year: '2024–Present',
    title: 'ELITES — Student Representative',
    org: 'Gordon College CCS',
    desc: 'Served as 2nd Year (2024–2025) and 3rd Year (2025–2026) Representative for the Empowered League of Information Technology Students — now a 4th-year student. Led coordination of seminars, student activities, and faculty engagement on behalf of BSIT students, honing my leadership and social skills along the way.',
  },
  {
    icon: <Award size={20} />,
    color: 'var(--accent-yellow)',
    year: '2022–2023',
    title: 'Valedictorian · Top 1 · Student Merit Award',
    org: 'Columban College — Asinan Campus',
    desc: 'Graduated as Valedictorian and Top 1 in the TVL – ICT Strand. Received the Student Merit Award and the Video Editing Award, and represented the school in the Division and Regional School Press Conferences.',
  },
  {
    icon: <BookOpen size={20} />,
    color: 'var(--accent-orange)',
    year: '2023–Present',
    title: 'Academic Excellence · Consistent Dean\'s Lister',
    org: 'Gordon College',
    desc: 'Consistent Dean\'s Lister with a cumulative GPA of 1.3 (Philippine scale — Highest Honors). Active in IT Trends & Career Opportunities seminars, Python programming training, and various professional development events throughout my college years.',
  },
  {
    icon: <Zap size={20} />,
    color: 'var(--accent-pink)',
    year: '2026',
    title: '🏆 3rd Place — HackTheKitty International',
    org: 'World Cat Domination Day 2026',
    desc: 'Competed in HackTheKitty (World Cat Domination Day 2026) — an international hackathon — achieving 3rd place out of hundreds of global teams. Won $500 in prizes, merchandise, and a showcase partnership. Built Meowderer, a full-featured PWA cat tracking platform, in 72 hours.',
  },
  {
    icon: <Zap size={20} />,
    color: 'var(--accent-purple)',
    year: '2024–2025',
    title: 'Build & Beyond Hackathon',
    org: 'Devpost',
    desc: 'Participated in the Build and Beyond hackathon on Devpost — a cross-team sprint where I contributed to designing and shipping a full product end-to-end under competitive time constraints.',
  },
  {
    icon: <Star size={20} />,
    color: 'var(--accent-green)',
    year: '2023–2026',
    title: 'Professional Certifications',
    org: 'Cisco NetAcad · TESDA · Udemy',
    desc: 'Completed Cisco CCNA: Intro to Networks (70hrs), Networking Devices & Config (22hrs), Endpoint Security (27hrs), and Computer Hardware Basics (6hrs). Also certified in UI/UX Design with Figma via Udemy (16.5hrs) and completed TESDA\'s Optimizing Digital Marketing Campaign (March 2026).',
  },
];


const Leadership = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.lead-label, .lead-heading',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.timeline-entry',
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.timeline', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="leadership" className="leadership-section section-container">
      <div className="lead-label text-accent-blue">Achievements</div>
      <h2 className="lead-heading">Leadership &amp; Awards</h2>

      <div className="timeline">
        {items.map((item, i) => (
          <div key={i} className="timeline-entry">
            <div className="timeline-left">
              <div className="timeline-icon-wrap" style={{ borderColor: item.color, color: item.color }}>
                {item.icon}
              </div>
              <div className="timeline-spine" />
            </div>
            <div className="timeline-right glass-panel">
              <div className="timeline-meta">
                <span className="timeline-year" style={{ color: item.color }}>{item.year}</span>
                <span className="timeline-org">{item.org}</span>
              </div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
