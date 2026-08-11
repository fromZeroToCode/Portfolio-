import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Physics-based smoothing for fluid momentum
      wheelMultiplier: 1,
      smoothWheel: true,
      normalizeWheel: true, // Normalizes scroll speed across different trackpads/mice
      smoothTouch: false, // Keep native touch scrolling for mobile
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
