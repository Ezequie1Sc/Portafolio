import { useState } from 'react';
import * as data from '../../data';
import type { Certificate } from '../../types';
import CertificateCard from '../ui/CertificateCard';
import CertificateFilter from '../ui/CertificateFilter';

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const counts = {
    todos: data.certificates.length,
    programacion: data.certificates.filter(c => c.category === 'programacion').length,
    datos: data.certificates.filter(c => c.category === 'datos').length,
    ia: data.certificates.filter(c => c.category === 'ia').length,
    ciberseguridad: data.certificates.filter(c => c.category === 'ciberseguridad').length,
    idiomas: data.certificates.filter(c => c.category === 'idiomas').length,
    profesional: data.certificates.filter(c => c.category === 'profesional').length,
  };

  // Filtrar certificados
  const filteredCertificates = activeFilter === 'todos'
    ? data.certificates
    : data.certificates.filter(c => c.category === activeFilter);

  // Orden personalizado: programación → datos → ia → ciberseguridad → idiomas → profesional
  const getCategoryOrder = (category: string) => {
    const order = {
      programacion: 1,
      datos: 2,
      ia: 3,
      ciberseguridad: 4,
      idiomas: 5,
      profesional: 6
    };
    return order[category as keyof typeof order] || 999;
  };

  // Ordenar certificados filtrados
  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    if (activeFilter === 'todos') {
      // Si es "todos", ordenar por categoría según el orden personalizado
      const orderA = getCategoryOrder(a.category);
      const orderB = getCategoryOrder(b.category);
      return orderA - orderB;
    }
    return 0; // Si hay filtro activo, mantener orden original
  });

  return (
    <section id="certificados" className="certificates-section">
      <div className="container">
        <h2 className="certificates-main-title">
          <span className="certificates-title-icon"></span> Certificaciones
        </h2>
        
        <p className="certificates-subtitle">
          Formación continua en desarrollo de software, inteligencia artificial y ciberseguridad
        </p>

        <CertificateFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />

        {activeFilter !== 'todos' && (
          <h3 className="category-active-title">
            {activeFilter === 'programacion' && ' Programación'}
            {activeFilter === 'datos' && ' Bases de Datos'}
            {activeFilter === 'ia' && ' Inteligencia Artificial'}
            {activeFilter === 'ciberseguridad' && ' Ciberseguridad'}
            {activeFilter === 'idiomas' && ' Idiomas'}
            {activeFilter === 'profesional' && ' Habilidades Profesionales'}
          </h3>
        )}

        <div className="certificates-grid">
          {sortedCertificates.map((certificate: Certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {sortedCertificates.length === 0 && (
          <div className="certificates-empty">
            No hay certificados en esta categoría
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;