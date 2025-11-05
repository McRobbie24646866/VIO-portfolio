import React, { useEffect, useState } from 'react';
import '../styles/RunningAnimation.css';

const RunningAnimation = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 100) {
          setDirection('left');
          return 0;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="running-animation-container">
      <div 
        className={`runner ${direction}`}
        style={{ left: `${position}%` }}
      >
        🏃‍♂️
      </div>
    </div>
  );
};

export default RunningAnimation;
