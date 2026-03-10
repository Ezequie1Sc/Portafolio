import React, { useEffect, useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Proyectos', href: '#proyectos', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
    { name: 'Habilidades', href: '#habilidades', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Certificados', href: '#certificados', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Contacto', href: '#contacto', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Ezequie1Sc', icon: '/icons/github.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ezequiel-salazar-194975340/', icon: '/icons/linkedin.svg' },
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
        <div className="brand-wrapper">
          <a href="#inicio" className="brand-link" onClick={(e) => handleNavClick(e, '#inicio')}>
            <h1 className="brand-name">Ezequiel Salazar</h1>
            <div className="brand-underline"></div>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <svg className="nav-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="nav-link-text">{link.name}</span>
              <span className="nav-link-indicator"></span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Cambiar tema">
            <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {darkMode ? (
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
          
          <div className="social-links-header">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-header"
                aria-label={link.name}
              >
                <img src={link.icon} alt={link.name} className="social-icon-header" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Menú"
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h2 className="mobile-brand-name">Ezequiel Salazar</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-close"
            aria-label="Cerrar menú"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'mobile-nav-link-active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="mobile-nav-text">{link.name}</span>
              <span className="mobile-nav-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-social-links">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src={link.icon} alt={link.name} className="mobile-social-icon" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <div className="mobile-theme-toggle">
            <button onClick={toggleDarkMode} className="mobile-theme-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {darkMode ? (
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
              <span>Cambiar tema</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;