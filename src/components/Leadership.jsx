import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Star, Globe, BookOpen, Zap } from 'lucide-react';
import './Leadership.css';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: <Users size={20} />,
    color: 'var(--accent-blue)',
    year: '2024–Present',
    title: 'ELITES — Student Representative',
    org: 'Gordon College CCS',
    desc: 'Served as 2nd Year (2024–2025) and 3rd Year (2025–Present) Representative for the Empowered League of Information Technology Students — coordinating seminars, student activities, and engaging with faculty on behalf of BSIT students.',
  },
  {
    icon: <Award size={20} />,
    color: 'var(--accent-yellow)',
    year: '2022–2023',
    title: 'Valedictorian & Top 1 TVL Strand',
    org: 'Columban College — Asinan Campus',
    desc: 'Graduated as Valedictorian and Top 1 in the TVL – ICT Strand. Received the Merit Award, Video Editing Award, and represented the school in the Division and Regional School Press Conferences.',
  },
  {
    icon: <Globe size={20} />,
    color: 'var(--accent-green)',
    year: '2024',
    title: 'Community Service',
    org: 'Olongapo City, Zambales',
    desc: 'Participated in the Coastal Clean-Up at DriftWood Beach (June 28, 2024), Brigada Eskwela at New Ilalim Elementary School (July 23, 2024), and a Team Building event at Marikit Park (July 31, 2024).',
  },
  {
    icon: <BookOpen size={20} />,
    color: 'var(--accent-orange)',
    year: '2023–Present',
    title: 'Academic Excellence',
    org: 'Gordon College',
    desc: 'Consistent Dean\'s Lister with a cumulative GPA of 1.3 (Philippine scale, highest honors). Active in IT Trends & Career Opportunities seminars, Python programming training, and various professional development events.',
  },
  {
    icon: <Zap size={20} />,
    color: 'var(--accent-pink)',
    year: '2024–Present',
    title: 'Hackathon Competitor',
    org: 'HackTheKitty & Build Beyond',
    desc: 'Competed in HackTheKitty (World Cat Domination Day) achieving 3rd place out of 118 teams and 417 participants — winning $500, merchandise, and a showcase partnership. Also competed in Build Beyond via Devpost.',
  },
  {
    icon: <Star size={20} />,
    color: 'var(--accent-purple)',
    year: '2023–2024',
    title: 'Professional Certifications',
    org: 'Cisco NetAcad & Udemy',
    desc: 'Completed Cisco CCNA: Intro to Networks (70hrs), Networking Devices & Config (22hrs), Endpoint Security (27hrs), and Computer Hardware Basics (6hrs). Also certified in UI/UX Design with Figma via Udemy (16.5hrs).',
  },
];

const Leadership = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.lead-label, .lead-heading',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.timeline-entry',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline', start: 'top 75%' }
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
