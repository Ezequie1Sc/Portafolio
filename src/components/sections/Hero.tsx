import { useEffect, useState } from 'react';

// Eliminar la interfaz HeroProps completamente
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const phrases = [
    'Desarrollador de Software',
    'Desarrollador de Apps con Flutter',
    'Apasionado por crear tecnología',
    'Apasionado por la tecnología'
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, phraseIndex, isDeleting]);

  // Función para manejar la descarga del CV con notificación
  const handleDownloadCV = () => {
    setShowNotification(true);
    // Ocultar la notificación después de 4 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  const planets = [
    { tech: 'Flutter', icon: '/icons/flutter.svg', orbit: 1 },
    { tech: 'Dart', icon: '/icons/dart.svg', orbit: 2 },
    { tech: 'Java', icon: '/icons/java.svg', orbit: 3 },
    { tech: 'Python', icon: '/icons/python.svg', orbit: 4 },
    { tech: 'C#', icon: '/icons/csharp.svg', orbit: 5 },
    { tech: 'HTML', icon: '/icons/html.svg', orbit: 6 },
    { tech: 'CSS', icon: '/icons/css.svg', orbit: 7 },
    { tech: 'TypeScript', icon: '/icons/tp.svg', orbit: 8 },
  ];

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h2 className="hero-greeting">¡Hola Mundo! </h2>
        <h1 className="hero-title">
          Soy <span className="hero-title-gradient">Ezequiel Salazar</span>
        </h1>
        
        <div className="typewriter-container">
          <h3 className="typewriter">
            <span className="typewriter-text">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </h3>
        </div>

        <p className="hero-description">
          Desarrollador enfocado en crear aplicaciones modernas y soluciones tecnológicas
utilizando Flutter, Python y tecnologías web.
        </p>

        <div className="hero-buttons">
          <button onClick={handleDownloadCV} className="btn-primary">
            <span>Descargar CV</span>
            <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          
          <a href="#contacto" className="btn-secondary">
            <span>Contáctame</span>
            <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/ezequiel-salazar-194975340/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Ezequie1Sc" target="_blank" rel="noopener noreferrer" className="social-link github">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="solar-system">
          <div className="sun">
            <img src="face.webp" alt="Ezequiel Salazar" className="profile-img" />
            <div className="sun-glow"></div>
          </div>

          {planets.map((planet) => (
            <div key={planet.tech} className={`orbit orbit-${planet.orbit}`}>
              <div className="planet" data-tech={planet.tech}>
                <img src={planet.icon} alt={planet.tech} />
                <span className="planet-tooltip">{planet.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNotification && (
        <div className="maintenance-notification">
          <div className="notification-content">
            <div className="notification-icon">🔧</div>
            <div className="notification-text">
              <h4>CV en Mantenimiento</h4>
              <p>Estamos actualizando el CV. Pronto estará disponible para descarga. ¡Gracias por tu paciencia!</p>
            </div>
            <button 
              className="notification-close"
              onClick={() => setShowNotification(false)}
            >
              ✕
            </button>
          </div>
          <div className="notification-progress"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;