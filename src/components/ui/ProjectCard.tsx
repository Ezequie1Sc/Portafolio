import { useState, memo } from 'react';
import type { Project } from '../../types';
import ProjectGallery from './ProjectGallery';
import '../../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    if (project.type === 'web') {
      const url = project.demoUrl || project.github;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setIsGalleryOpen(true);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setActiveSection(null);
    }
  };

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const projectImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  const hasExtraInfo = !!(project.problem || project.solution || project.howItWorks?.length || project.impact);

  return (
    <>
      <div className={`project-card ${getColorClass(project.color)}`}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-type-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {project.type === 'web' && (
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"/>
              )}
              {project.type === 'mobile' && (
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              )}
              {project.type === 'desktop' && (
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              )}
              {project.type === 'backend' && (
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
              )}
            </svg>
            <span>
              {project.type === 'web' && 'Web'}
              {project.type === 'mobile' && 'Móvil'}
              {project.type === 'desktop' && 'Escritorio'}
              {project.type === 'backend' && 'Backend'}
            </span>
          </div>
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
            <div className="tech-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span>Tecnologías</span>
            </div>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="tech-item">
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                  <span className="tech-name">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Botón Ver más - MÁS GRANDE Y VISIBLE */}
          {hasExtraInfo && (
            <button className="expand-btn" onClick={toggleExpand}>
              <svg className={`expand-icon ${isExpanded ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
              <span>{isExpanded ? 'Ver menos información' : 'Ver más información'}</span>
            </button>
          )}

          {/* Contenido expandible */}
          <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
            {/* Problema */}
            {project.problem && (
              <div className="info-accordion">
                <button 
                  className={`accordion-trigger ${activeSection === 'problem' ? 'active' : ''}`}
                  onClick={() => toggleSection('problem')}
                >
                  <div className="trigger-left">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <span>Problema</span>
                  </div>
                  <svg className={`trigger-chevron ${activeSection === 'problem' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`accordion-content ${activeSection === 'problem' ? 'open' : ''}`}>
                  <p>{project.problem}</p>
                </div>
              </div>
            )}

            {/* Solución */}
            {project.solution && (
              <div className="info-accordion">
                <button 
                  className={`accordion-trigger ${activeSection === 'solution' ? 'active' : ''}`}
                  onClick={() => toggleSection('solution')}
                >
                  <div className="trigger-left">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    <span>Solución</span>
                  </div>
                  <svg className={`trigger-chevron ${activeSection === 'solution' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`accordion-content ${activeSection === 'solution' ? 'open' : ''}`}>
                  <p>{project.solution}</p>
                </div>
              </div>
            )}

            {/* Cómo funciona */}
            {project.howItWorks && project.howItWorks.length > 0 && (
              <div className="info-accordion">
                <button 
                  className={`accordion-trigger ${activeSection === 'howItWorks' ? 'active' : ''}`}
                  onClick={() => toggleSection('howItWorks')}
                >
                  <div className="trigger-left">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span>Cómo funciona</span>
                  </div>
                  <svg className={`trigger-chevron ${activeSection === 'howItWorks' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`accordion-content ${activeSection === 'howItWorks' ? 'open' : ''}`}>
                  <ul>
                    {project.howItWorks.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Impacto */}
            {project.impact && (
              <div className="info-accordion">
                <button 
                  className={`accordion-trigger ${activeSection === 'impact' ? 'active' : ''}`}
                  onClick={() => toggleSection('impact')}
                >
                  <div className="trigger-left">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <span>Impacto</span>
                  </div>
                  <svg className={`trigger-chevron ${activeSection === 'impact' ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`accordion-content ${activeSection === 'impact' ? 'open' : ''}`}>
                  <p>{project.impact}</p>
                </div>
              </div>
            )}
          </div>

          <div className="project-actions">
            <button
              onClick={handleDemoClick}
              className={`demo-btn ${getDemoBtnClass(project.color)}`}
            >
              <svg className="btn-icon-small" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {project.type === 'web' ? 'Ver sitio' : 'Ver demo'}
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="code-btn"
            >
              <svg className="btn-icon-small" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
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
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;