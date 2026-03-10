import React, { useState } from 'react';
import { projects } from '../../data';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('todos');

  // Filtrar proyectos por tipo
  const mobileProjects = projects.filter(p => p.type === 'mobile');
  const webProjects = projects.filter(p => p.type === 'web');
  const backendProjects = projects.filter(p => p.type === 'backend');
  const desktopProjects = projects.filter(p => p.type === 'desktop');

  const getFilteredProjects = () => {
    if (filter === 'todos') return projects;
    return projects.filter(p => p.type === filter);
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
            Todos ({projects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Móvil ({mobileProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web ({webProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend ({backendProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'desktop' ? 'active' : ''}`}
            onClick={() => setFilter('desktop')}
          >
            Desktop ({desktopProjects.length})
          </button>
        </div>

        {/* Vista de todos los proyectos organizados por categoría */}
        {filter === 'todos' && (
          <div className="projects-categories">
            {mobileProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">📱</span>
                  Aplicaciones Móviles ({mobileProjects.length})
                </h3>
                <div className="category-grid">
                  {mobileProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            )}

            {webProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">🌐</span>
                  Aplicaciones Web ({webProjects.length})
                </h3>
                <div className="category-grid">
                  {webProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            )}

            {backendProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">⚙️</span>
                  Proyectos Backend ({backendProjects.length})
                </h3>
                <div className="category-grid">
                  {backendProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            )}

            {desktopProjects.length > 0 && (
              <div className="project-category">
                <h3 className="category-title">
                  <span className="category-icon">💻</span>
                  Aplicaciones Desktop ({desktopProjects.length})
                </h3>
                <div className="category-grid">
                  {desktopProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
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
                {filter === 'mobile' && ''}
                {filter === 'web' && ''}
                {filter === 'backend' && ''}
                {filter === 'desktop' && ''}
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