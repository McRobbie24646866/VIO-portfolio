import React, { useEffect, useState } from 'react';
import '../styles/ParticleTrail.css';

const ParticleTrail = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };

      setParticles(prev => [...prev, particle].slice(-20));

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="particle-trail-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleTrail;
