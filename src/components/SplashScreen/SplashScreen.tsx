import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="splash-noise" />
      <div className="splash-light" />
      
      {/* CAPA DE BARRIDO (Cortina) */}
      <motion.div
        className="splash-wipe"
        initial={{ translateY: '100%' }}
        animate={{ translateY: '100%' }}
        exit={{ translateY: '0%' }}
        transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
      />

      <motion.div
        className="splash-content"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="splash-logo-wrap"
          initial={{ scale: 0.65, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="splash-orbit" />
          <div className="splash-glow" />

          <img
            src=".\logo_sin.png"
            alt="Ezequiel Salazar"
            className="splash-logo"
          />
        </motion.div>

        <motion.p
          className="splash-kicker"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          PORTFOLIO
        </motion.p>

        <motion.h1
          className="splash-title"
          initial={{ opacity: 0, y: 18, letterSpacing: '0.35em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.18em' }}
          transition={{ delay: 0.65, duration: 0.9, ease: 'easeOut' }}
        >
          EZEQUIEL SALAZAR
        </motion.h1>

        <motion.p
          className="splash-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          Software Developer
        </motion.p>

        <motion.div
          className="splash-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.15, duration: 1.35, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;