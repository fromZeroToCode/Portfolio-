import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">JDR</a>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-social">
          <a href="https://github.com/JustDev9" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/justin-del-rosario-103a17427/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:justin.delrosario.dev@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
