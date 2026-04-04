import { useState } from 'react';
import { projects } from '../../data';
import ProjectCard from '../ui/ProjectCard';
import '../../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('todos');
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  // Filtrar proyectos por tipo
  const mobileProjects = projects.filter(p => p.type === 'mobile');
  const webProjects = projects.filter(p => p.type === 'web');
  const backendProjects = projects.filter(p => p.type === 'backend');
  const desktopProjects = projects.filter(p => p.type === 'desktop');

  const getFilteredProjects = () => {
    if (filter === 'todos') return projects;
    return projects.filter(p => p.type === filter);
  };

  // Manejar expansión de cards - SOLO UNA A LA VEZ
  const handleCardExpand = (cardId: number) => {
    if (expandedCardId === cardId) {
      setExpandedCardId(null); // Cerrar si ya está abierta
    } else {
      setExpandedCardId(cardId); // Abrir la nueva y cerrar la anterior
    }
  };

  // Iconos SVG para categorías
  const CategoryIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'mobile':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 18h.01"/>
            <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
          </svg>
        );
      case 'web':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"/>
          </svg>
        );
      case 'backend':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 7h-4.5M20 12h-4.5M20 17h-4.5"/>
            <path d="M4 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
            <path d="M8 7h3"/>
            <path d="M8 12h3"/>
            <path d="M8 17h3"/>
          </svg>
        );
      case 'desktop':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
            <path d="M2 7h20"/>
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        );
    }
  };

  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <h2 className="projects-main-title">Proyectos Destacados</h2>
        <p className="projects-subtitle">
          Una selección de mis mejores trabajos en diferentes áreas del desarrollo
        </p>

        {/* Filtros rápidos */}
        <div className="projects-filter">
          <button
            className={`filter-btn ${filter === 'todos' ? 'active' : ''}`}
            onClick={() => setFilter('todos')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18"/>
              <rect x="8" y="4" width="8" height="4" rx="1"/>
              <rect x="10" y="10" width="4" height="4" rx="1"/>
              <rect x="12" y="16" width="4" height="4" rx="1"/>
            </svg>
            Todos ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 18h.01"/>
              <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
            </svg>
            Móvil ({mobileProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"/>
            </svg>
            Web ({webProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 7h-4.5M20 12h-4.5M20 17h-4.5"/>
              <path d="M4 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
              <path d="M8 7h3"/>
              <path d="M8 12h3"/>
              <path d="M8 17h3"/>
            </svg>
            Backend ({backendProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'desktop' ? 'active' : ''}`}
            onClick={() => setFilter('desktop')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
              <path d="M2 7h20"/>
            </svg>
            Desktop ({desktopProjects.length})
          </button>
        </div>

        {/* Vista de todos los proyectos organizados por categoría */}
        {filter === 'todos' && (
          <div className="projects-categories">
            {mobileProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">
                    <CategoryIcon type="mobile" />
                  </span>
                  Aplicaciones Móviles ({mobileProjects.length})
                </h3>
                <div className="category-grid">
                  {mobileProjects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                      isExpanded={expandedCardId === project.id}
                      onExpand={() => handleCardExpand(project.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {webProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">
                    <CategoryIcon type="web" />
                  </span>
                  Aplicaciones Web ({webProjects.length})
                </h3>
                <div className="category-grid">
                  {webProjects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                      isExpanded={expandedCardId === project.id}
                      onExpand={() => handleCardExpand(project.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {backendProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">
                    <CategoryIcon type="backend" />
                  </span>
                  Proyectos Backend ({backendProjects.length})
                </h3>
                <div className="category-grid">
                  {backendProjects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                      isExpanded={expandedCardId === project.id}
                      onExpand={() => handleCardExpand(project.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {desktopProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">
                    <CategoryIcon type="desktop" />
                  </span>
                  Aplicaciones Desktop ({desktopProjects.length})
                </h3>
                <div className="category-grid">
                  {desktopProjects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                      isExpanded={expandedCardId === project.id}
                      onExpand={() => handleCardExpand(project.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Vista filtrada por categoría específica */}
        {filter !== 'todos' && (
          <div className="filtered-view">
            <h3 className="category-title">
              <span className="category-icon">
                <CategoryIcon type={filter} />
              </span>
              {filter === 'mobile' && 'Aplicaciones Móviles'}
              {filter === 'web' && 'Aplicaciones Web'}
              {filter === 'backend' && 'Proyectos Backend'}
              {filter === 'desktop' && 'Aplicaciones Desktop'}
            </h3>
            <div className="category-grid">
              {getFilteredProjects().map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  isExpanded={expandedCardId === project.id}
                  onExpand={() => handleCardExpand(project.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;