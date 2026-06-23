import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="hero-greeting"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¡Hola Mundo!
        </motion.h2>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Soy <span className="hero-title-gradient">Ezequiel Salazar</span>
        </motion.h1>

        <motion.div
          className="typewriter-container"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="typewriter">
            <span className="typewriter-text">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </h3>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Desarrollador enfocado en crear aplicaciones modernas y soluciones
          tecnológicas utilizando Flutter, Python y tecnologías web.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/Orlando_Ezequiel_Salazar_Cruz_CV_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Ver Currículum</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contacto"
            className="btn-secondary"
          >
            <span>Contáctame</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
      >
        <div className="solar-system">
          <motion.div
            className="sun"
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 220 }}
          >
            <img
              src="/foto.webp"
              alt="Ezequiel Salazar"
              className="profile-img"
            />
            <div className="sun-glow"></div>
          </motion.div>

          {planets.map((planet) => (
            <div key={planet.tech} className={`orbit orbit-${planet.orbit}`}>
              <motion.div
                className="planet"
                data-tech={planet.tech}
                whileHover={{ scale: 1.25 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={planet.icon} alt={planet.tech} />
                <span className="planet-tooltip">{planet.tech}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;