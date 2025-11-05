import React, { useEffect, useState } from 'react';
import '../styles/StatsTracker.css';

const StatsTracker = () => {
  const [stats, setStats] = useState({
    linesOfCode: 0,
    kmRun: 0,
    projects: 0,
    coffees: 0
  });

  useEffect(() => {
    const animateValue = (key, end, duration) => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 16);
    };

    animateValue('linesOfCode', 50000, 2000);
    animateValue('kmRun', 1250, 2000);
    animateValue('projects', 42, 1500);
    animateValue('coffees', 9999, 2500);
  }, []);

  return (
    <div className="stats-tracker">
      <div className="stat-item">
        <div className="stat-number">{stats.linesOfCode.toLocaleString()}</div>
        <div className="stat-label">Lines of Code</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{stats.kmRun}</div>
        <div className="stat-label">Kilometers Run</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{stats.projects}</div>
        <div className="stat-label">Projects Completed</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{stats.coffees.toLocaleString()}</div>
        <div className="stat-label">Coffees ☕</div>
      </div>
    </div>
  );
};

export default StatsTracker;
