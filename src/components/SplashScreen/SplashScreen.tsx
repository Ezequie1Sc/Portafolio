import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(18px)', scale: 1.04 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <div className="splash-grid" />
      <div className="splash-light" />

      <motion.div
        className="splash-content"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="splash-logo-wrap"
          initial={{ opacity: 0, y: 28, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="splash-glow" />

          <img
            src="/logo_sin.png"
            alt="Ezeq"
            className="splash-logo"
          />
        </motion.div>

        <motion.p
          className="splash-kicker"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          PORTFOLIO
        </motion.p>

        <motion.h1
          className="splash-title"
          initial={{ opacity: 0, y: 18, letterSpacing: '0.32em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.18em' }}
          transition={{ delay: 0.68, duration: 0.9, ease: 'easeOut' }}
        >
          EZEQUIEL SALAZAR
        </motion.h1>

        <motion.p
          className="splash-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
        >
          Software Developer
        </motion.p>

        <motion.div
          className="splash-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.35, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;