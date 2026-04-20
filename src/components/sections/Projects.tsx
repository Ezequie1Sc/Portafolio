import { useState, useMemo, useCallback, memo } from 'react';
import { projects } from '../../data';
import ProjectCard from '../ui/ProjectCard';
import '../../styles/Projects.css';

/* ─────────────────────────────────────────────
   FIX: CategoryIcon fuera del componente padre.
   Definirlo dentro causaba que React la tratara
   como un tipo nuevo en cada render, forzando
   remount completo de todos sus usos.
───────────────────────────────────────────── */
const ICON_PATHS: Record<string, React.ReactNode> = {
  mobile: (
    <>
      <path d="M12 18h.01"/>
      <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
    </>
  ),
  web: (
    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"/>
  ),
  backend: (
    <>
      <path d="M20 7h-4.5M20 12h-4.5M20 17h-4.5"/>
      <path d="M4 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
      <path d="M8 7h3"/><path d="M8 12h3"/><path d="M8 17h3"/>
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M2 7h20"/>
    </>
  ),
};

const DEFAULT_ICON = (
  <>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </>
);

const CATEGORY_LABELS: Record<string, string> = {
  mobile:  'Aplicaciones Móviles',
  web:     'Aplicaciones Web',
  backend: 'Proyectos Backend',
  desktop: 'Aplicaciones Desktop',
};

const CategoryIcon = memo(({ type }: { type: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICON_PATHS[type] ?? DEFAULT_ICON}
  </svg>
));
CategoryIcon.displayName = 'CategoryIcon';

/* ─────────────────────────────────────────────
   Sub-componente para una categoría completa.
   Memo evita re-render cuando otras categorías
   actualizan expandedCardId.
───────────────────────────────────────────── */
interface CategorySectionProps {
  type: string;
  projectList: typeof projects;
  expandedCardId: number | null;
  onExpand: (id: number) => void;
}

const CategorySection = memo(({ type, projectList, expandedCardId, onExpand }: CategorySectionProps) => (
  <div className="project-category">
    <h3 className="category-title">
      <span className="category-icon">
        <CategoryIcon type={type} />
      </span>
      {CATEGORY_LABELS[type]} ({projectList.length})
    </h3>
    <div className="category-grid">
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isExpanded={expandedCardId === project.id}
          onExpand={() => onExpand(project.id)}
        />
      ))}
    </div>
  </div>
));
CategorySection.displayName = 'CategorySection';

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
const FILTER_TYPES = ['todos', 'mobile', 'web', 'backend', 'desktop'] as const;
type FilterType = typeof FILTER_TYPES[number];

const FILTER_LABELS: Record<FilterType, string> = {
  todos:   'Todos',
  mobile:  'Móvil',
  web:     'Web',
  backend: 'Backend',
  desktop: 'Desktop',
};

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>('todos');
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  /* FIX: categorías memorizadas — no se recalculan en cada render */
  const categorized = useMemo(() => ({
    mobile:  projects.filter(p => p.type === 'mobile'),
    web:     projects.filter(p => p.type === 'web'),
    backend: projects.filter(p => p.type === 'backend'),
    desktop: projects.filter(p => p.type === 'desktop'),
  }), []);

  const filteredProjects = useMemo(
    () => filter === 'todos' ? projects : projects.filter(p => p.type === filter),
    [filter]
  );

  /* FIX: resetear tarjeta expandida al cambiar filtro.
     Evita que una card en estado "expanded" persista
     al cambiar a una vista donde puede no estar visible. */
  const handleFilterChange = useCallback((newFilter: FilterType) => {
    setFilter(newFilter);
    setExpandedCardId(null);
  }, []);

  const handleCardExpand = useCallback((cardId: number) => {
    setExpandedCardId(prev => (prev === cardId ? null : cardId));
  }, []);

  const counts: Record<FilterType, number> = {
    todos:   projects.length,
    mobile:  categorized.mobile.length,
    web:     categorized.web.length,
    backend: categorized.backend.length,
    desktop: categorized.desktop.length,
  };

  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <h2 className="projects-main-title">Proyectos Destacados</h2>
        <p className="projects-subtitle">
          Una selección de mis mejores trabajos en diferentes áreas del desarrollo
        </p>

        {/* Filtros */}
        <nav className="projects-filter" aria-label="Filtrar proyectos por tipo">
          {FILTER_TYPES.map((type) => (
            <button
              key={type}
              className={`filter-btn${filter === type ? ' active' : ''}`}
              onClick={() => handleFilterChange(type)}
              aria-pressed={filter === type}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                {type === 'todos'
                  ? <><path d="M3 6h18M3 12h18M3 18h18"/><rect x="8" y="4" width="8" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="12" y="16" width="4" height="4" rx="1"/></>
                  : ICON_PATHS[type] ?? DEFAULT_ICON
                }
              </svg>
              {FILTER_LABELS[type]} ({counts[type]})
            </button>
          ))}
        </nav>

        {/*
         * FIX: key={filter} fuerza remount del contenedor al cambiar
         * el filtro activo, disparando la animación fadeInUp del
         * .view-container en cada transición de vista.
         * Sin esto la animación solo ocurría en el primer render.
         */}
        <div key={filter} className="view-container">
          {filter === 'todos' ? (
            <div className="projects-categories">
              {(Object.entries(categorized) as [string, typeof projects][])
                .filter(([, list]) => list.length > 0)
                .map(([type, list]) => (
                  <CategorySection
                    key={type}
                    type={type}
                    projectList={list}
                    expandedCardId={expandedCardId}
                    onExpand={handleCardExpand}
                  />
                ))
              }
            </div>
          ) : (
            <div className="filtered-view">
              <h3 className="category-title">
                <span className="category-icon">
                  <CategoryIcon type={filter} />
                </span>
                {CATEGORY_LABELS[filter]}
              </h3>
              <div className="category-grid">
                {filteredProjects.map((project) => (
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
      </div>
    </section>
  );
};

export default Projects;