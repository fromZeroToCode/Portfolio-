import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import FloatingAsset from './FloatingAsset';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'meowderer',
    number: '01',
    title: 'Meowderer',
    subtitle: 'HackTheKitty World Cat Domination Day 2026',
    role: 'Frontend Developer & Editor',
    award: '🏆 3rd Place · International Hackathon',
    accentColor: 'var(--accent-purple)',
    gradientClass: 'gradient-purple',
    desc: 'A community-driven cat tracking Progressive Web App built in 72 hours for the HackTheKitty World Cat Domination Day 2026 international hackathon. Features an interactive map, CatDex, cat profiles, community voting, chat, and sticker creation — earning 3rd place among global submissions.',
    tech: ['React', 'Next.js', 'Supabase', 'PWA', 'TypeScript'],
    link: 'https://meowderer.vercel.app/auth',
    github: 'https://github.com/pvrylle/Meowderer',
    youtube: 'https://youtu.be/Gr7Qi0mB7ME?si=0TDLEKQAdEIqKJQx',
    images: [
      '/Meowderer/Home page.png',
      '/Meowderer/Cat wonderrer.png',
      '/Meowderer/Cat cards 1.jpg',
      '/Meowderer/Community cats.png',
      '/Meowderer/Cat cards.jpg',
      '/Meowderer/Community.png',
      '/Meowderer/Cat cards2.jpg',
      '/Meowderer/Profile.png',
      '/Meowderer/Cat cards 3.png',
      '/Meowderer/maps.png',
      '/Meowderer/Cat cards 4.png',
      '/Meowderer/Mission.png',
      '/Meowderer/Cat cards 5.png',
      '/Meowderer/Missions.png',
    ],
  },
  {
    id: 'sia',
    number: '02',
    title: 'GC Smart Check',
    subtitle: 'Web & Mobile OMR Scoring System',
    role: 'Project Manager & Designer',
    award: '🎓 Gordon College CEAS · Faculty Tool',
    accentColor: 'var(--accent-green)',
    gradientClass: 'gradient-green',
    desc: 'As Project Manager, I led design and oversaw development of a web and mobile OMR scanning system built for Gordon College CEAS faculty. The system enables instant scoring, exports results to Excel, provides item analysis, and features role-based dashboards for teachers and students — built by my team, designed by me.',
    tech: ['React', 'JavaScript', 'Mobile App', 'OMR Scanning', 'Analytics'],
    link: 'https://web-based-for-sia.vercel.app/',
    images: [
      '/Sia/Screenshot 2026-08-11 171554.png',
      '/Sia/Screenshot 2026-08-11 171607.png',
      '/Sia/Screenshot 2026-08-11 171616.png',
      '/Sia/Screenshot 2026-08-11 171841.png',
      '/Sia/Screenshot 2026-06-01 115544.png',
      '/Sia/Screenshot 2026-06-01 122233.png',
    ],
  },
  {
    id: 'sandyfeet',
    number: '03',
    title: 'Sandyfeet Reserve',
    subtitle: 'Beach Resort Booking Platform · Capstone',
    role: 'Frontend Developer',
    award: '🎓 Academic Capstone · Live Deployment',
    accentColor: 'var(--accent-blue)',
    gradientClass: 'gradient-ocean',
    desc: 'A web-based camp reservation and event booking platform for Sandyfeet Liwliwa Camp. I built the frontend using Next.js with Firebase and Firestore powering the backend. Features include multi-room booking, event management, dynamic inventory, and a full admin dashboard — developed in close collaboration with the beneficiary.',
    tech: ['Next.js', 'Firebase', 'Firestore', 'JavaScript', 'HTML/CSS'],
    link: 'https://sandyfeetresort.vercel.app',
    images: [
      '/Sandyfeet/Screenshot 2026-08-11 185531.png',
      '/Sandyfeet/Screenshot 2026-08-11 185546.png',
      '/Sandyfeet/Screenshot_11-8-2026_185651_sandyfeetresort.vercel.app.jpeg',
      '/Sandyfeet/Screenshot_11-8-2026_185747_sandyfeetresort.vercel.app.jpeg',
    ],
  },
];

/* ── Infinite Marquee Gallery ── */
const InfiniteMarquee = ({ images, projectTitle, accentColor }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const numImages = images.length;

  // Split images into two columns alternately
  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 !== 0);

  // Triple for seamless CSS loop
  const col1Loop = [...col1, ...col1, ...col1];
  const col2Loop = [...col2, ...col2, ...col2];

  // Speed: ~4s per image
  const speed1 = col1.length * 4;
  const speed2 = col2.length * 4;

  const handleCardClick = (img) => {
    const idx = images.indexOf(img);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <>
      <div className="marquee-container" style={{ '--accent': accentColor }}>
        {/* Column A — scrolls up */}
        <div className="marquee-column">
          <div className="marquee-track" style={{ animationDuration: `${speed1}s` }}>
            {col1Loop.map((img, i) => (
              <div
                key={`a-${i}`}
                className="marquee-card"
                onClick={() => handleCardClick(img)}
              >
                <img src={img} alt={`${projectTitle} ${i + 1}`} loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </div>

        {/* Column B — scrolls down */}
        <div className="marquee-column">
          <div className="marquee-track reverse" style={{ animationDuration: `${speed2}s` }}>
            {col2Loop.map((img, i) => (
              <div
                key={`b-${i}`}
                className="marquee-card"
                onClick={() => handleCardClick(img)}
              >
                <img src={img} alt={`${projectTitle} ${i + 1}`} loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close lightbox">
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightboxIndex]} alt={`${projectTitle} full view`} />
            <button className="gallery-arrow gallery-arrow-left lightbox-arrow" onClick={() => setLightboxIndex((lightboxIndex - 1 + numImages) % numImages)} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>
            <button className="gallery-arrow gallery-arrow-right lightbox-arrow" onClick={() => setLightboxIndex((lightboxIndex + 1) % numImages)} aria-label="Next image">
              <ChevronRight size={28} />
            </button>
          </div>
          <div className="lightbox-counter">{lightboxIndex + 1} / {numImages}</div>
        </div>
      )}
    </>
  );
};


/* ── YouTube Embed sub-component ── */
const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1&controls=0`}
        title="Project demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

/* ── Main Projects Component ── */
const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo('.projects-label, .projects-heading',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      // Each project showcase
      gsap.utils.toArray('.project-showcase').forEach((el) => {
        gsap.fromTo(el,
          { y: 80, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-section">
      <div className="projects-header section-container">
        <div className="projects-label text-accent-blue">Featured Work</div>
        <h2 className="projects-heading">Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`project-showcase ${index % 2 === 1 ? 'reversed' : ''} ${project.gradientClass || ''}`}
            style={{ '--project-accent': project.accentColor }}
          >

            <div className="showcase-inner">
              {/* Visual Side */}
            <div className="showcase-visual">
              {project.id === 'meowderer' && (
                <>
                  <FloatingAsset icon="🐈" size="4rem" x="-10%" y="10%" delay={0} duration={3} />
                  <FloatingAsset icon="🐾" size="3rem" x="90%" y="80%" delay={0.5} duration={4} />
                  <FloatingAsset icon="🧶" size="3.5rem" x="80%" y="-10%" delay={1} duration={3.5} />
                </>
              )}
              {project.id === 'sia' && (
                <>
                  <FloatingAsset icon="📝" size="4rem" x="-5%" y="15%" delay={0.2} duration={3.2} />
                  <FloatingAsset icon="📊" size="3.5rem" x="85%" y="75%" delay={0.6} duration={4} />
                  <FloatingAsset icon="💯" size="3rem" x="75%" y="-5%" delay={0.8} duration={3.8} />
                </>
              )}
              {project.id === 'sandyfeet' && (
                <>
                  <FloatingAsset icon="🏖️" size="4.5rem" x="-10%" y="20%" delay={0} duration={4} />
                  <FloatingAsset icon="🥥" size="3.5rem" x="80%" y="80%" delay={0.4} duration={3.5} />
                  <FloatingAsset icon="🌊" size="4rem" x="70%" y="-10%" delay={0.9} duration={4.2} />
                </>
              )}
              <div className={`showcase-bg ${project.gradientClass}`} />
              <InfiniteMarquee images={project.images} projectTitle={project.title} accentColor={project.accentColor} />
            </div>

              {/* Info Side */}
              <div className="showcase-info">
                <div className="showcase-top">
                  <span className="showcase-number">{project.number}</span>
                  <span className="showcase-award" style={{ color: project.accentColor }}>
                    {project.award}
                  </span>
                </div>

                <p className="showcase-subtitle">{project.subtitle}</p>
                <h3 className="showcase-title">{project.title}</h3>
                <p className="showcase-role" style={{ color: project.accentColor }}>
                  Role: {project.role}
                </p>
                <p className="showcase-desc">{project.desc}</p>

                <div className="showcase-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="showcase-links">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary showcase-btn">
                      View Live <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline showcase-btn">
                      <GithubIcon size={14} /> GitHub
                    </a>
                  )}
                  {project.youtube && (
                    <a href={project.youtube} target="_blank" rel="noreferrer" className="btn btn-outline showcase-btn">
                      <Play size={14} /> YouTube
                    </a>
                  )}
                </div>


              </div>
            </div>

            {/* Standard YouTube below visual for non-video-bg projects */}
            {project.youtubeId && !project.videoBg && (
              <div className="showcase-youtube-standalone section-container">
                <YouTubeEmbed videoId={project.youtubeId} />
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Secondary projects (no screenshots) */}
      <div className="secondary-projects section-container">
        <h3 className="secondary-heading">Other Experience</h3>
        <div className="secondary-grid">
          <div className="secondary-card glass-panel" style={{ '--accent': 'var(--accent-pink)' }}>
            <span className="secondary-award" style={{ color: 'var(--accent-pink)' }}>⚡ Hackathon Participant</span>
            <h4 className="secondary-title">Build &amp; Beyond</h4>
            <p className="secondary-role">Frontend Developer · Devpost Hackathon</p>
            <p className="secondary-desc">We joined the Build and Beyond hackathon on Devpost — a cross-team sprint where I helped design and ship a full product end-to-end under tight time constraints.</p>
            <div className="showcase-tech">
              <span className="tech-tag">Frontend Development</span>
              <span className="tech-tag">Team Collaboration</span>
              <span className="tech-tag">UI/UX Design</span>
            </div>
          </div>
          <div className="secondary-card glass-panel" style={{ '--accent': 'var(--accent-green)' }}>
            <span className="secondary-award" style={{ color: 'var(--accent-green)' }}>🔒 Under NDA</span>
            <h4 className="secondary-title">Confidential Project</h4>
            <p className="secondary-role">UI/UX Designer · Mobile App Prototyping</p>
            <p className="secondary-desc">I designed a mobile application for a company, crafting high-fidelity UI/UX prototypes as NDA-bound deliverables. Focused on user flows, interaction design, and delivering production-ready screen specs.</p>
            <div className="showcase-tech">
              <span className="tech-tag">UI/UX Design</span>
              <span className="tech-tag">Mobile Prototyping</span>
              <span className="tech-tag">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
