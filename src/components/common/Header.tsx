import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.substring(1));
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(link.href.substring(1));
        }
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setActiveSection(targetId);
      }, 150);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Desktop Nav */}
        <div className="nav-pill-wrapper">
          <motion.nav className="nav-desktop nav-pill" initial={{ opacity: 0, y: -24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            {navLinks.map((link, index) => (
              <motion.a key={link.name} href={link.href} className={`nav-link ${activeSection === link.href.substring(1) ? 'nav-link-active' : ''}`} onClick={(e) => handleNavClick(e, link.href)} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + index * 0.06 }}>
                <span>{link.name}</span>
                <span className="nav-link-indicator" />
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Mobile Toggle */}
        <motion.button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`mobile-menu-toggle ${mobileMenuOpen ? 'mobile-menu-toggle-open' : ''}`} aria-label="Menú" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </motion.button>
      </div>

      {/* Mobile Menu - Efecto Persiana */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-menu-backdrop" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setMobileMenuOpen(false)} 
            />
            
            <motion.div 
              className="mobile-menu" 
              /* Aquí está la magia: baja desde arriba (translateY negativo) */
              initial={{ opacity: 0, y: -150 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -150 }} 
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mobile-menu-top">
                <div className="mobile-brand">
                  <img src="/logo_sin.png" alt="Ezeq" />
                  <span>Ezequiel</span>
                </div>
              </div>

              <nav className="mobile-nav">
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'mobile-nav-link-active' : ''}`} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.a 
                href="#proyectos" 
                className="mobile-main-btn" 
                onClick={(e) => handleNavClick(e, '#proyectos')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Explorar proyectos
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;