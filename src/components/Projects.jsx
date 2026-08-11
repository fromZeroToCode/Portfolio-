import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'meowderer',
    number: '01',
    title: 'Meowderer',
    subtitle: 'HackTheKitty International Hackathon',
    role: 'Frontend Developer',
    award: '🏆 3rd Place — $500 Prize',
    accentColor: 'var(--accent-yellow)',
    desc: 'A community-driven cat tracking Progressive Web App with an interactive map, CatDex, cat profiles, community voting, chat, and sticker creation — built in a hackathon with 417 participants and 129 submissions.',
    tech: ['React', 'Next.js', 'Supabase', 'PWA', 'TypeScript'],
    link: 'https://meowderer.vercel.app/auth',
    github: 'https://github.com/JustDev9',
    youtubeId: 'Gr7Qi0mB7ME',
    images: [
      '/Meowderer/Home page.png',
      '/Meowderer/Cat wonderrer.png',
      '/Meowderer/Community cats.png',
      '/Meowderer/Community.png',
      '/Meowderer/Profile.png',
      '/Meowderer/maps.png',
      '/Meowderer/Mission.png',
      '/Meowderer/Missions.png',
    ],
  },
  {
    id: 'sia',
    number: '02',
    title: 'GC Smart Check',
    subtitle: 'Web-Based System for SIA',
    role: 'Project Manager',
    award: '🎓 School Application System',
    accentColor: 'var(--accent-green)',
    desc: 'Designed and developed a mobile OMR scanning and instant scoring system built for Gordon College faculty. Features include auto-scoring, export to Excel, item analysis, and role-based dashboards for teachers and students.',
    tech: ['React', 'JavaScript', 'Web App', 'OMR Scanning', 'Analytics'],
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
    subtitle: 'Full Stack Capstone Project',
    role: 'Full Stack Developer',
    award: '🎓 Academic Capstone',
    accentColor: 'var(--accent-blue)',
    desc: 'A web-based camp reservation and event booking platform for Sandyfeet Liwliwa Camp. Includes multi-room booking, event management, dynamic inventory, and a full admin dashboard. Developed in close collaboration with the beneficiary.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://sandyfeetresort.vercel.app',
    images: [
      '/Sandyfeet/Screenshot 2026-08-11 185531.png',
      '/Sandyfeet/Screenshot 2026-08-11 185546.png',
      '/Sandyfeet/Screenshot_11-8-2026_185651_sandyfeetresort.vercel.app.jpeg',
      '/Sandyfeet/Screenshot_11-8-2026_185747_sandyfeetresort.vercel.app.jpeg',
    ],
  },
];

/* ── Image Gallery sub-component ── */
const ImageGallery = ({ images, projectTitle }) => {
  const [current, setCurrent] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);
  const trackRef = useRef(null);

  const goTo = useCallback((idx) => {
    const newIdx = (idx + images.length) % images.length;
    setCurrent(newIdx);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLightbox) goTo(current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, isLightbox, goTo]);

  return (
    <>
      <div className="gallery">
        <div className="gallery-viewport">
          <div
            ref={trackRef}
            className="gallery-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="gallery-slide" onClick={() => setIsLightbox(true)}>
                <img src={img} alt={`${projectTitle} screenshot ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <button className="gallery-arrow gallery-arrow-left" onClick={() => goTo(current - 1)} aria-label="Previous image">
            <ChevronLeft size={20} />
          </button>
          <button className="gallery-arrow gallery-arrow-right" onClick={() => goTo(current + 1)} aria-label="Next image">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="gallery-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightbox && (
        <div className="lightbox" onClick={() => setIsLightbox(false)}>
          <button className="lightbox-close" onClick={() => setIsLightbox(false)} aria-label="Close lightbox">
            <X size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[current]} alt={`${projectTitle} full view`} />
            <button className="gallery-arrow gallery-arrow-left lightbox-arrow" onClick={() => goTo(current - 1)} aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>
            <button className="gallery-arrow gallery-arrow-right lightbox-arrow" onClick={() => goTo(current + 1)} aria-label="Next image">
              <ChevronRight size={28} />
            </button>
          </div>
          <div className="lightbox-counter">{current + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
};

/* ── YouTube Embed sub-component ── */
const YouTubeEmbed = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-container">
      {!isPlaying ? (
        <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            loading="lazy"
          />
          <div className="video-play-btn">
            <Play size={32} fill="currentColor" />
          </div>
          <div className="video-label">Watch Demo</div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Project demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
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
            className={`project-showcase ${index % 2 === 1 ? 'reversed' : ''}`}
            style={{ '--project-accent': project.accentColor }}
          >
            <div className="showcase-inner">
              {/* Visual Side */}
              <div className="showcase-visual">
                <ImageGallery images={project.images} projectTitle={project.title} />
                {project.youtubeId && (
                  <YouTubeEmbed videoId={project.youtubeId} />
                )}
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
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Secondary projects (no screenshots) */}
      <div className="secondary-projects section-container">
        <h3 className="secondary-heading">Other Experience</h3>
        <div className="secondary-grid">
          <div className="secondary-card glass-panel" style={{ '--accent': 'var(--accent-pink)' }}>
            <span className="secondary-award" style={{ color: 'var(--accent-pink)' }}>⚡ Hackathon Participant</span>
            <h4 className="secondary-title">Build Beyond</h4>
            <p className="secondary-role">Frontend Developer · Devpost Hackathon</p>
            <p className="secondary-desc">Collaborated with a cross-functional team to design and build a functional product submission for the Build Beyond hackathon, discovered through Devpost.</p>
            <div className="showcase-tech">
              <span className="tech-tag">Frontend Development</span>
              <span className="tech-tag">Team Collaboration</span>
              <span className="tech-tag">UI/UX</span>
            </div>
          </div>
          <div className="secondary-card glass-panel" style={{ '--accent': 'var(--accent-green)' }}>
            <span className="secondary-award" style={{ color: 'var(--accent-green)' }}>🔒 Under NDA</span>
            <h4 className="secondary-title">Confidential Project</h4>
            <p className="secondary-role">Software Developer · NDA Software Project</p>
            <p className="secondary-desc">Contributed to a private software product involving feature development, testing, and debugging across multiple release cycles.</p>
            <div className="showcase-tech">
              <span className="tech-tag">Software Development</span>
              <span className="tech-tag">Feature Implementation</span>
              <span className="tech-tag">QA & Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
