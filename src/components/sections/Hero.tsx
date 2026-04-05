import { useEffect, useState } from 'react';

interface HeroProps {
  onDownloadCV: () => void;
}

const Hero = ({ onDownloadCV }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
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
        <h2 className="hero-greeting">¡Hola Mundo! 👋</h2>
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
          <button onClick={onDownloadCV} className="btn-primary">
            <span>Descargar CV</span>
          </button>

          <a href="#contacto" className="btn-secondary">
            <span>Contáctame</span>
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/ezequiel-salazar-194975340/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Ezequie1Sc" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="solar-system">
          <div className="sun">
            <img src="/face.jpg" alt="Ezequiel Salazar" className="profile-img" />
          </div>

          {planets.map((planet) => (
            <div key={planet.tech} className={`orbit orbit-${planet.orbit}`}>
              <div className="planet">
                <img src={planet.icon} alt={planet.tech} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;