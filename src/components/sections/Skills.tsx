import { motion } from "framer-motion";
import { skills } from '../../data';
import SkillCard from '../ui/SkillCard';
import '../../styles/Skills.css';

// ===== ANIMACIONES CON FRAMER MOTION (CORREGIDAS PARA TYPESCRIPT) =====
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
} as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const Skills = () => {
  return (
    <motion.section
      id="habilidades"
      className="skills-section"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      <div className="container">
        {/* Título con fadeUp */}
        <motion.h2
          variants={fadeUp}
          className="skills-main-title"
        >
          Mis Habilidades Técnicas
        </motion.h2>

        <div className="skills-layout">
          {/* Columna izquierda - About Me (Slide from left) */}
          <motion.div
            variants={slideLeft}
            className="about-me-column"
          >
            <div className="about-me-card">
              <div className="about-me-header">
                <span className="about-me-border-top"></span>
                <h3 className="about-me-title">SOBRE MÍ</h3>
                <span className="about-me-border-bottom"></span>
              </div>
              
              <div className="about-me-image-container">
                <div className="about-me-image-wrapper">
                  <img 
                    src="foto.webp" 
                    alt="Profile" 
                    className="about-me-image"
                  />
                </div>
              </div>
              
              <div className="about-me-grid">
                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Quién soy</h4>
                  </div>
                  <p className="about-me-item-text">
                    Desarrollador de software y estudiante de Ingeniería en Sistemas en 8.º semestre, enfocado en crear aplicaciones y soluciones tecnológicas eficientes.
                  </p>
                </div>

                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Mi objetivo</h4>
                  </div>
                  <p className="about-me-item-text">
                    Seguir aprendiendo nuevas tecnologías y construir software con impacto real.
                  </p>
                </div>

                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Mi perfil</h4>
                  </div>
                  <p className="about-me-item-text">
                    Me adapto fácilmente a nuevas herramientas, metodologías y desafíos técnicos.
                  </p>
                </div>
              </div>

              <div className="about-me-footer">
                <span className="about-me-footer-line"></span>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - Skills (FadeUp en cascada) */}
          <motion.div
            variants={fadeUp}
            className="skills-column"
          >
            <div className="skills-grid">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={cardAnimation}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;