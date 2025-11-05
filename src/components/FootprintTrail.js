import React, { useEffect, useState } from 'react';
import '../styles/FootprintTrail.css';

const FootprintTrail = () => {
  const [footprints, setFootprints] = useState([]);
  const [isLeft, setIsLeft] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const footprint = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        isLeft: isLeft
      };

      setFootprints(prev => [...prev, footprint].slice(-15));
      setIsLeft(prev => !prev);

      setTimeout(() => {
        setFootprints(prev => prev.filter(p => p.id !== footprint.id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isLeft]);

  return (
    <div className="footprint-trail-container">
      {footprints.map(footprint => (
        <div
          key={footprint.id}
          className={`footprint ${footprint.isLeft ? 'left' : 'right'}`}
          style={{
            left: `${footprint.x}px`,
            top: `${footprint.y}px`
          }}
        >
          👟
        </div>
      ))}
    </div>
  );
};

export default FootprintTrail;
