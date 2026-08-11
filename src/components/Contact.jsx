import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-label, .contact-title, .contact-subtitle',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.hire-form, .contact-email-link, .social-pill',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    const subject = encodeURIComponent(`Hire Inquiry from ${formData.email}`);
    const body = encodeURIComponent(
      `From: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:justin.delrosario.dev@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-label text-accent-blue">Contact</div>
        <h2 className="contact-title">Let's build something.</h2>
        <p className="contact-subtitle">
          I'm a 4th-year BSIT student open to freelance projects, internships, and full-time roles. If you need a developer who sweats the details — let's talk.
        </p>

        {/* Hire Me Form */}
        <form className="hire-form glass-panel" onSubmit={handleSubmit} noValidate>
          <div className="hire-form-header">
            <Mail size={20} />
            <span>Send me a message</span>
          </div>

          <div className="hire-field">
            <label htmlFor="hire-email">Your Email</label>
            <input
              id="hire-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="hire-field">
            <label htmlFor="hire-message">Message</label>
            <textarea
              id="hire-message"
              name="message"
              placeholder="Tell me about your project, opportunity, or just say hi..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="hire-btn btn btn-primary" aria-label="Send hire request">
            {sent ? '✓ Opening email client…' : (
              <>Hire Me <Send size={16} /></>
            )}
          </button>
        </form>

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
