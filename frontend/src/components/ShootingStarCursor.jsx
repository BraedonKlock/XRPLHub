import { useEffect, useRef } from 'react';
import './ShootingStarCursor.css';

export default function ShootingStarCursor() {
  const trailRef = useRef([]);
  const animationRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isDesktop = useRef(false);

  useEffect(() => {
    // Check if desktop with mouse
    const checkDesktop = () => {
      isDesktop.current = window.matchMedia('(min-width: 900px) and (pointer: fine)').matches;
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    // Create trail particles
    const trailCount = 12;
    const container = document.createElement('div');
    container.className = 'shooting-star-container';
    document.body.appendChild(container);

    for (let i = 0; i < trailCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'shooting-star-particle';
      particle.style.setProperty('--index', i);
      container.appendChild(particle);
      trailRef.current.push({
        el: particle,
        x: 0,
        y: 0,
      });
    }

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animate trail
    const animate = () => {
      if (!isDesktop.current) {
        trailRef.current.forEach(p => p.el.style.opacity = '0');
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      let prevX = mousePos.current.x;
      let prevY = mousePos.current.y;

      trailRef.current.forEach((particle, i) => {
        const ease = 0.35 - (i * 0.02);
        particle.x += (prevX - particle.x) * ease;
        particle.y += (prevY - particle.y) * ease;

        particle.el.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        particle.el.style.opacity = '1';

        prevX = particle.x;
        prevY = particle.y;
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDesktop);
      cancelAnimationFrame(animationRef.current);
      container.remove();
    };
  }, []);

  return null;
}
