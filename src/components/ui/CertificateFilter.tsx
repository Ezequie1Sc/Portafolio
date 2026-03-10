import React from 'react';

interface CertificateFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  counts: {
    todos: number;
    programacion: number;
    ciberseguridad: number;
    ia: number;
    idiomas: number;
    profesional: number;
  };
}

const CertificateFilter = ({ activeFilter, onFilterChange, counts }: CertificateFilterProps) => {
  const filters = [
    { id: 'todos', label: 'Todos', icon: '', count: counts.todos },
    { id: 'programacion', label: 'Programación', icon: '', count: counts.programacion },
    { id: 'ciberseguridad', label: 'Ciberseguridad', icon: '', count: counts.ciberseguridad },
    { id: 'ia', label: 'Inteligencia Artificial', icon: '', count: counts.ia },
    { id: 'idiomas', label: 'Idiomas', icon: '', count: counts.idiomas },
    { id: 'profesional', label: 'Profesional', icon: '', count: counts.profesional },
  ];

  return (
    <div className="certificate-filters">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`certificate-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          <span className="filter-icon">{filter.icon}</span>
          <span className="filter-label">{filter.label}</span>
          <span className="filter-count">{filter.count}</span>
        </button>
      ))}
    </div>
  );
};

export default CertificateFilter;