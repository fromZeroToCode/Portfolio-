import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FloatingAsset.css';

const FloatingAsset = ({
  icon,
  size = '3rem',
  x = 0,
  y = 0,
  delay = 0,
  duration = 3,
  className = '',
  style = {}
}) => {
  const assetRef = useRef(null);
  
  useEffect(() => {
    const el = assetRef.current;
    if (!el) return;

    // Yoyo floating animation
    const floatAnim = gsap.to(el, {
      y: '-=15',
      rotation: 'random(-5, 5)',
      duration: duration + Math.random(),
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: delay
    });

    // Mouse parallax
    const handleMouseMove = (e) => {
      if (window.matchMedia('(pointer: coarse)').matches) return; // Skip mobile
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(el, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      floatAnim.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [duration, delay]);

  return (
    <div
      ref={assetRef}
      className={`floating-asset ${className}`}
      style={{
        fontSize: size,
        top: y,
        left: x,
        ...style
      }}
    >
      {icon}
    </div>
  );
};

export default FloatingAsset;
