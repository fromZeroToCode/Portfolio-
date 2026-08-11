import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Network, Cpu, Pen, Globe, X } from 'lucide-react';
import './Certificates.css';

gsap.registerPlugin(ScrollTrigger);

/* ── Certificate Data ── */
const certificates = [
  /* Image-based (PNG preview) */
  {
    type: 'image',
    src: '/Certificates/Del Rosario_Justin_DigitalMarketingTESDA.png',
    file: '/Certificates/Del Rosario_Justin_DigitalMarketingTESDA.png',
    title: 'Optimizing Digital Marketing Campaign',
    issuer: 'TESDA',
    date: 'March 2026',
    color: 'var(--accent-blue)',
  },
  /* PDF / Icon-based cards */
  {
    type: 'icon',
    file: '/Certificates/Introduction to network.pdf',
    icon: <Network size={32} />,
    title: 'Introduction to Networks (CCNA)',
    issuer: 'Cisco NetAcad',
    date: '70 hours',
    color: 'var(--accent-blue)',
  },
  {
    type: 'icon',
    file: '/Certificates/Network devices initial configuration.pdf',
    icon: <Network size={32} />,
    title: 'Networking Devices & Initial Configuration',
    issuer: 'Cisco NetAcad',
    date: '22 hours',
    color: 'var(--accent-blue)',
  },
  {
    type: 'icon',
    file: '/Certificates/End point security.pdf',
    icon: <Shield size={32} />,
    title: 'Endpoint Security',
    issuer: 'Cisco NetAcad',
    date: '27 hours',
    color: 'var(--accent-green)',
  },
  {
    type: 'icon',
    file: '/Certificates/Cyber security certificate.pdf',
    icon: <Shield size={32} />,
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco NetAcad',
    date: 'Certified',
    color: 'var(--accent-green)',
  },
  {
    type: 'icon',
    file: '/Certificates/Computer basic hardware.pdf',
    icon: <Cpu size={32} />,
    title: 'Computer Hardware Basics',
    issuer: 'Cisco NetAcad',
    date: '6 hours',
    color: 'var(--accent-orange)',
  },
  {
    type: 'icon',
    file: '/Certificates/Figma Course.pdf',
    icon: <Pen size={32} />,
    title: 'UI/UX Design with Figma',
    issuer: 'Udemy',
    date: '16.5 hours',
    color: 'var(--accent-pink)',
  },
  {
    type: 'icon',
    file: null,
    icon: <Globe size={32} />,
    title: 'Thriving in IT: Navigating Trends',
    issuer: 'ELITES — Gordon College',
    date: 'Nov 15, 2024',
    color: 'var(--accent-purple)',
  },
];

const Certificates = () => {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.certs-label, .certs-heading',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.cert-card',
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'back.out(1.3)',
          scrollTrigger: { trigger: '.certs-grid', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certificates" className="certs-section section-container">
      <div className="certs-label text-accent-blue">Credentials</div>
      <h2 className="certs-heading">Certificates</h2>

      <div className="certs-grid">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className={`cert-card glass-panel ${cert.file ? 'clickable' : ''}`}
            style={{ '--cert-color': cert.color }}
            onClick={() => cert.file && setSelectedCert(cert.file)}
          >
            {cert.type === 'image' ? (
              <div className="cert-img-wrap">
                <img src={cert.src} alt={cert.title} className="cert-img" loading="lazy" />
              </div>
            ) : (
              <div className="cert-icon-wrap" style={{ color: cert.color, borderColor: cert.color }}>
                {cert.icon}
              </div>
            )}
            <div className="cert-body">
              <span className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</span>
              <h4 className="cert-title">{cert.title}</h4>
              <span className="cert-date">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="lightbox" onClick={() => setSelectedCert(null)}>
          <button className="lightbox-close" onClick={() => setSelectedCert(null)} aria-label="Close lightbox">
            <X size={24} />
          </button>
          <div className="lightbox-content lightbox-pdf-container" onClick={(e) => e.stopPropagation()}>
            {selectedCert.endsWith('.pdf') ? (
              <iframe src={selectedCert} title="Certificate PDF" width="100%" height="100%" style={{ border: 'none', borderRadius: '12px' }} />
            ) : (
              <img src={selectedCert} alt="Certificate full view" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
