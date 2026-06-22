import React, { useEffect, useState } from 'react';
import '../../styles/Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Certificados', href: '#certificados' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      setActiveSection(targetId);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        
        {/* PÍLDORA DE NAVEGACIÓN CENTRADA */}
        <div className="nav-pill-wrapper">
          <nav className="nav-desktop nav-pill">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'nav-link-active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="nav-link-text">{link.name}</span>
                <span className="nav-link-indicator"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* BOTÓN DE HAMBURGUESA (MÓVIL) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Menú"
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="hamburger-x-icon">
              <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <>
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
            </>
          )}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h2 className="mobile-brand-name">Ezequiel Salazar</h2>
        </div>
        
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'mobile-nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <span className="mobile-nav-text">{link.name}</span>
              <span className="mobile-nav-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;