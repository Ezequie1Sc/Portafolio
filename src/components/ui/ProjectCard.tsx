import React, { useState } from 'react';
import type { Project } from '../../types';
import ProjectGallery from './ProjectGallery';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'project-blue',
      purple: 'project-purple',
      green: 'project-green',
      orange: 'project-orange'
    };
    return colors[color as keyof typeof colors] || 'project-blue';
  };

  const getDemoBtnClass = (color: string) => {
    const colors = {
      blue: 'demo-blue',
      purple: 'demo-purple',
      green: 'demo-green',
      orange: 'demo-orange'
    };
    return colors[color as keyof typeof colors] || 'demo-blue';
  };

  const handleDemoClick = () => {
    // Si es proyecto web, abrir la URL del demo
    if (project.type === 'web') {
      const url = project.demoUrl || project.github; // Usa demoUrl si existe, sino github
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Si no es web, abrir la galería
      setIsGalleryOpen(true);
    }
  };

  const projectImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  return (
    <>
      <div className={`project-card ${getColorClass(project.color)}`}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <div className="project-header">
            <div className="project-icon">
              <img src={project.icon} alt={project.title} />
            </div>
            <h3 className="project-title">{project.title}</h3>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-tech">
            <h4 className="tech-label">Tecnologías utilizadas:</h4>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="tech-item">
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                  <span className="tech-name">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="project-actions">
            <button
              onClick={handleDemoClick}
              className={`demo-btn ${getDemoBtnClass(project.color)}`}
            >
              <svg className="btn-icon-small" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {project.type === 'web' ? 'Visitar Sitio' : 'Ver Demo'}
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="code-btn"
            >
              <svg className="btn-icon-small" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Código
            </a>
          </div>
        </div>
      </div>

      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        projectTitle={project.title}
        images={projectImages}
      />
    </>
  );
};

export default ProjectCard;