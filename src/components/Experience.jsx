import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Trophy } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    title: 'Meowderer',
    subtitle: 'HackTheKitty International Hackathon',
    role: 'Frontend Developer',
    award: '🏆 3rd Place — $500 Prize',
    awardColor: 'var(--accent-yellow)',
    desc: 'A community-driven cat tracking Progressive Web App with an interactive map, CatDex, cat profiles, community voting, chat, and sticker creation — built in a hackathon with 417 participants and 129 submissions.',
    tech: ['React', 'Next.js', 'Supabase', 'PWA', 'TypeScript'],
    link: 'https://meowderer.vercel.app/home',
    github: 'https://github.com/JustDev9',
    accentColor: 'var(--accent-yellow)',
  },
  {
    number: '02',
    title: 'Sandyfeet Reserve',
    subtitle: 'Full Stack Capstone Project',
    role: 'Full Stack Developer',
    award: '🎓 Academic Capstone',
    awardColor: 'var(--accent-blue)',
    desc: 'A web-based camp reservation and event booking platform for Sandyfeet Liwliwa Camp. Includes multi-room booking, event management, dynamic inventory, and a full admin dashboard. Developed in close collaboration with the beneficiary.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    accentColor: 'var(--accent-blue)',
  },
  {
    number: '03',
    title: 'Build Beyond',
    subtitle: 'Devpost Hackathon',
    role: 'Frontend Developer',
    award: '⚡ Hackathon Participant',
    awardColor: 'var(--accent-pink)',
    desc: 'Collaborated with a cross-functional team to design and build a functional product submission for the Build Beyond hackathon, discovered through Devpost. Details are confidential per project agreement.',
    tech: ['Frontend Development', 'Team Collaboration', 'UI/UX'],
    accentColor: 'var(--accent-pink)',
  },
  {
    number: '04',
    title: 'Confidential Project',
    subtitle: 'NDA Software Project',
    role: 'Software Developer',
    award: '🔒 Under NDA',
    awardColor: 'var(--accent-green)',
    desc: 'Contributed to a private software product involving feature development, testing, and debugging across multiple release cycles. Full details are protected by a Non-Disclosure Agreement.',
    tech: ['Software Development', 'Feature Implementation', 'QA & Testing'],
    accentColor: 'var(--accent-green)',
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo('.exp-label, .exp-heading',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      // Horizontal scroll pinning
      const track = trackRef.current;
      const cards = gsap.utils.toArray('.project-card', track);
      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScrollWidth + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Stagger card fade-in
      gsap.fromTo(cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience-section">
      <div className="exp-header">
        <div className="exp-label text-accent-blue">Featured Work</div>
        <h2 className="exp-heading">Projects</h2>
        <p className="exp-subtext">Scroll horizontally to explore → </p>
      </div>

      <div ref={trackRef} className="projects-track">
        <div className="projects-spacer" />
        {projects.map((project, index) => (
          <article key={index} className="project-card glass-panel" style={{ '--accent': project.accentColor }}>
            <div className="project-card-top">
              <span className="project-number" style={{ color: project.accentColor }}>{project.number}</span>
              <span className="project-award" style={{ color: project.awardColor }}>
                {project.award}
              </span>
            </div>

            <div className="project-card-body">
              <p className="project-subtitle">{project.subtitle}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role" style={{ color: project.accentColor }}>Role: {project.role}</p>
              <p className="project-desc">{project.desc}</p>
            </div>

            <div className="project-card-bottom">
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary project-btn">
                    View Live <ExternalLink size={14} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline project-btn">
                    <GithubIcon size={14} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
        <div className="projects-spacer" />
      </div>
    </section>
  );
};

export default Experience;
