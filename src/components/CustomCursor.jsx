import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const colors = [
  'var(--accent-blue)',
  'var(--accent-green)',
  'var(--accent-pink)',
  'var(--accent-yellow)',
  'var(--accent-purple)',
  'var(--accent-orange)'
];

const CustomCursor = () => {
  const containerRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on desktop/devices with a cursor
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 12) return;
      
      lastPos.current = { x: clientX, y: clientY };

      const particle = document.createElement('div');
      particle.className = 'glitter-particle';
      
      const size = Math.random() * 6 + 3; 
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.left = `${clientX}px`;
      particle.style.top = `${clientY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.boxShadow = `0 0 ${size * 1.5}px ${color}`;

      if (containerRef.current) {
        containerRef.current.appendChild(particle);
      }

      const driftX = (Math.random() - 0.5) * 40;
      const driftY = (Math.random() - 0.5) * 40 + 20;

      particle.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.8 },
        { transform: `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px)) scale(0)`, opacity: 0 }
      ], {
        duration: 800 + Math.random() * 400,
        easing: 'cubic-bezier(0, .9, .57, 1)'
      });

      setTimeout(() => {
        if (particle.parentNode === containerRef.current) {
          containerRef.current.removeChild(particle);
        }
      }, 1200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} className="cursor-container" />;
};

export default CustomCursor;
