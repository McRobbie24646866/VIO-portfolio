import React from 'react';
import { User } from 'lucide-react';
import './AboutPage.css';

const AboutPage = ({ setCurrentPage }) => (
  <div className="about-page">
    <nav className="about-nav">
      <div className="about-nav-content">
        <h2 className="about-nav-title">About</h2>
        <div className="about-nav-links">
          <button onClick={() => setCurrentPage('splash')}>Home</button>
          <button onClick={() => setCurrentPage('projects')}>Projects</button>
        </div>
      </div>
    </nav>

    <div className="about-container">
      <div className="about-grid">
        <div className="about-left">
          <div className="about-section">
            <User className="about-icon" />
            <h1 className="about-title">Finding My Pace</h1>
            <p className="about-intro">
              I'm a developer who believes that coding, like running, is about endurance, consistency, and pushing through when it gets tough.
            </p>
            <p className="about-text">
              Whether I'm debugging complex issues at 2 AM or pushing through mile 20 of a marathon, I've learned that success isn't about speed—it's about resilience and the willingness to keep moving forward.
            </p>
          </div>

          <div className="about-quote">
            <p>
              "The distance runner is the ultimate test of endurance. So is the developer who ships complex products. Both require mental toughness and unwavering focus."
            </p>
          </div>
        </div>

        <div className="about-center">
          {/* Center space for you in the photo */}
        </div>

        <div className="about-right">
          <div className="skills-card">
            <h2>Training Stats</h2>
            
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Endurance (Backend)</span>
                <span className="skill-percent">85%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill skill-bar-animate" style={{width: '85%'}}></div>
              </div>
              <p className="skill-description">Node.js, Express, Database Management</p>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Speed (Frontend)</span>
                <span className="skill-percent">90%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill skill-bar-animate" style={{width: '90%', animationDelay: '0.2s'}}></div>
              </div>
              <p className="skill-description">React, JavaScript, Responsive Design</p>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Focus (UI/UX)</span>
                <span className="skill-percent">80%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill skill-bar-animate" style={{width: '80%', animationDelay: '0.4s'}}></div>
              </div>
              <p className="skill-description">Figma, User Research, Prototyping</p>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Resilience (Problem Solving)</span>
                <span className="skill-percent">95%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill skill-bar-animate" style={{width: '95%', animationDelay: '0.6s'}}></div>
              </div>
              <p className="skill-description">Debugging, Algorithm Design, System Architecture</p>
            </div>
          </div>

          <div className="ready-card">
            <h3>Race Day Ready</h3>
            <div className="ready-list">
              <div className="ready-item">
                <div className="ready-dot"></div>
                <span>Consistent contributor to open source</span>
              </div>
              <div className="ready-item">
                <div className="ready-dot"></div>
                <span>Marathon runner (1:57 PR in a half marathon)</span>
              </div>
              <div className="ready-item">
                <div className="ready-dot"></div>
                <span>BIS MultiMedia Student</span>
              </div>
              <div className="ready-item">
                <div className="ready-dot"></div>
                <span>Always training for the next challenge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
