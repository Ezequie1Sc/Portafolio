import { useEffect, useState } from 'react';

const Hero = () => {
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
        <h2 className="hero-greeting">¡Hola Mundo!</h2>

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
          Desarrollador enfocado en crear aplicaciones modernas y soluciones
          tecnológicas utilizando Flutter, Python y tecnologías web.
        </p>

        <div className="hero-buttons">
          <a
            href="/Orlando_Ezequiel_Salazar_Cruz_CV_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Ver Currículum</span>
            <svg
              className="btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </a>

          <a href="#contacto" className="btn-secondary">
            <span>Contáctame</span>
            <svg
              className="btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="solar-system">
          <div className="sun">
            <img
              src="foto.png"
              alt="Ezequiel Salazar"
              className="profile-img"
            />
            <div className="sun-glow"></div>
          </div>

          {planets.map((planet) => (
            <div
              key={planet.tech}
              className={`orbit orbit-${planet.orbit}`}
            >
              <div className="planet" data-tech={planet.tech}>
                <img src={planet.icon} alt={planet.tech} />
                <span className="planet-tooltip">{planet.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;