import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-label, .contact-title, .contact-subtitle',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.contact-email-link, .social-pill',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-label text-accent-blue">Contact</div>
        <h2 className="contact-title">Let's connect.</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <a href="mailto:justin.delrosario.dev@gmail.com" className="contact-email-link">
          justin.delrosario.dev@gmail.com
        </a>

        <div className="contact-socials">
          <a href="https://github.com/JustDev9" target="_blank" rel="noreferrer" className="social-pill">
            <GithubIcon size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/justin-del-rosario-103a17427/" target="_blank" rel="noreferrer" className="social-pill">
            <LinkedinIcon size={18} /> LinkedIn
          </a>
          <a href="mailto:justin.delrosario.dev@gmail.com" className="social-pill">
            <Mail size={18} /> Email
          </a>
        </div>
      </div>

      <div className="contact-divider" />

      <div className="footer-bar">
        <span className="footer-name">Justin O. Del Rosario</span>
        <span className="footer-copy">© {new Date().getFullYear()} All rights reserved.</span>
        <span className="footer-tagline">Built with React + GSAP 🚀</span>
      </div>
    </footer>
  );
};

export default Contact;
