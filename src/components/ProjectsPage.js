import React, { useState } from 'react';
import { Code, ExternalLink, X } from 'lucide-react';
import './ProjectsPage.css';

const ProjectsPage = ({ setCurrentPage }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Website react project (IMY220 Project)",
      distance: "Marathon Project",
      description: "Version control application",
      tech: ["React", "Node.js", "MongoDB", "tailwind"],
      link: "https://imy220projectfinal.onrender.com/"
    },
    {
      title: "pokemon API test (personal project)",
      distance: "10K Sprint",
      description: "personal project for me testing apis, a pokemon API database website",
      tech: ["typescript", "react"],
      link: "https://deluxe-dango-bf37ce.netlify.app/"
    },
    {
      title: "Design pattern project (COS214 project)",
      distance: "Marathon",
      description: "Collaborative project about different software models, view the github respository below.",
      tech: ["C++", "Groupwork", "Desgin Patterns"],
      link: "https://github.com/Noah-Dollenberg/COS-214-Project---NJD-Films"
    },
    {
      title: "Standared HTML and CSS project (IMY110 project)",
      distance: "3K Sprint",
      description: "My first time coding a website, built in HTML CSS and a bit of JAvascript",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://imy110project.netlify.app/"
    },
    {
      title: "Interactive comic book vertical narritive (VIO202)",
      distance: "10K Run",
      description: "user interactive comic book created in figma based off of our first year comic book",
      tech: ["figma", "interactive"],
      link: "https://www.figma.com/proto/A695oBlG5LUTGtcQSoBgkZ/Untitled?node-id=0-1&p=f&t=jLeXTtOxlyv62f9p-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=81%3A354&show-proto-sidebar=1"
    },
    {
      title: "Comic Book (VIO101)",
      distance: "Ultra Marathon",
      description: "custom comic book created and hand drawn from scratch, my favorite first year project",
      tech: ["hand drawn", "adobe Fresco"],
      link: "#"
    },
    {
      title: "small API test project (IMY210)",
      distance: "Half Marathon",
      description: "A very small app for one of my practicals for Multimedia 210, we had to create our first application to post on the web, that pulls from an API, the API that I chose was a breaking bad quotes API.",
      tech: ["Vite", "Vue", "API"],
      link: "https://glowing-bavarois-72ebb4.netlify.app/"
    }
  ];

  return (
    <div className="projects-page">
      <nav className="projects-nav">
        <div className="projects-nav-content">
          <div className="projects-nav-left">
            <h2 className="projects-nav-title">Projects</h2>
          </div>
          <div className="projects-nav-center">
            <h1 className="projects-page-title">RACE LOG</h1>
          </div>
          <div className="projects-nav-links">
            <button onClick={() => setCurrentPage('splash')}>Home</button>
            <button onClick={() => setCurrentPage('about')}>About</button>
          </div>
        </div>
      </nav>

      <div className="projects-track">
        <div className="map-container">
          <div className="project-icons">
            {projects.map((project, idx) => {
            let leftPos, topPos;

            // Marker 0: Website react project (IMY220 Project)
            if (idx === 0) {
              leftPos = '10%';
              topPos = '78%';
            }
            // Marker 1: LAMB STACK website (COS216 Project)
            else if (idx === 1) {
              leftPos = '30%';
              topPos = '35%';
            }
            // Marker 2: Design pattern project (COS214 project)
            else if (idx === 2) {
              leftPos = '64%';
              topPos = '55%';
            }
            // Marker 3: Standard HTML and CSS project (IMY110 project)
            else if (idx === 3) {
              leftPos = '20%';
              topPos = '60%';
            }
            // Marker 4: Interactive comic book vertical narrative (VIO202)
            else if (idx === 4) {
              leftPos = '37%';
              topPos = '82%';
            }
            // Marker 5: Comic Book (VIO101)
            else if (idx === 5) {
              leftPos = '56%';
              topPos = '18%';
            }
            // Marker 6: Small API test project (IMY210)
            else if (idx === 6) {
              leftPos = '88%';
              topPos = '45%';
            }
            // Default positioning for any additional markers
            else {
              leftPos = `${20 + (idx * 10)}%`;
              topPos = `${30 + (idx % 3 * 20)}%`;
            }
            
            return (
              <div 
                key={idx} 
                className="project-icon-marker"
                style={{
                  left: leftPos,
                  top: topPos,
                  animationDelay: `${0.5 + idx * 0.1}s`
                }}
                onClick={() => setSelectedProject(project)}
              >
                <Code size={24} />
                <span className="project-icon-label">{project.title}</span>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            
            <div className="project-card-header">
              <div className="project-card-title">
                <h3>{selectedProject.title}</h3>
                <span className="project-distance">
                  {selectedProject.distance}
                </span>
              </div>
            </div>

            <p className="project-description">{selectedProject.description}</p>

            <div className="project-tech">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={selectedProject.link} className="project-link" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={24} />
                View Project
              </a>
            </div>

            <div className="project-icon-container">
              <Code className="project-icon" size={48} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
