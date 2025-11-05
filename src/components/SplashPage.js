import React from 'react';
import { Play } from 'lucide-react';
import './SplashPage.css';
import stravaImage from './strava.webp';

const SplashPage = ({ setCurrentPage }) => (
  <div className="splash-page">
    <div className="strava-link">
      <a href="https://strava.app.link/SW9Rli4XiXb" target="_blank" rel="noopener noreferrer">
        <img src={stravaImage} alt="Strava" className="strava-logo" />
      </a>
    </div>
    <div className="splash-track-lines">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="splash-track-line"
          style={{ top: `${20 + i * 20}%` }}
        />
      ))}
    </div>

    <div className="splash-content">
      <div className="splash-icon">
        <Play size={96} />
      </div>
      <h1 className="splash-title">
        THE LONG RUN
      </h1>
      <p className="splash-subtitle">
        Building resilience, one mile at a time
      </p>
      <div className="splash-buttons">
        <button
          onClick={() => setCurrentPage('projects')}
          className="splash-btn-primary"
        >
          View Projects
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          className="splash-btn-secondary"
        >
          About Me
        </button>
      </div>
    </div>

    <div className="splash-pace-marker">
      <p>PACE: Persistent • Adaptive • Creative • Efficient</p>
    </div>
  </div>
);

export default SplashPage;
