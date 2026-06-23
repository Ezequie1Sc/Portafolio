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
        
        {/* Botón de MENU */}
        <motion.button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'mobile-menu-toggle-hidden' : ''}`} 
          aria-label="Menú" 
          initial={{ opacity: 0, y: -16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <span className="toggle-text">MENU</span>
        </motion.button>
      </div>

      {/* Menú desplegable - Animación lenta de expansión desde arriba */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu" 
            initial={{ opacity: 0, scaleY: 0.5, y: -50 }} 
            animate={{ opacity: 1, scaleY: 1, y: 0 }} 
            exit={{ opacity: 0, scaleY: 0.5, y: -50 }} 
            transition={{ 
              duration: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94] // Curva de aceleración suave al final
            }}
            style={{ transformOrigin: 'top center' }}
          >
            {/* Botón CERRAR */}
            <button 
              className="mobile-menu-close-btn" 
              onClick={() => setMobileMenuOpen(false)}
            >
              CERRAR
            </button>

            <nav className="mobile-nav">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'mobile-nav-link-active' : ''}`} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.name.toUpperCase()}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;