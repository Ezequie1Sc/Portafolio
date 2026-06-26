import { motion } from "framer-motion";
import { skills } from "../../data";
import SkillCard from "../ui/SkillCard";
import "../../styles/Skills.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

const softReveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
} as const;

const leftReveal = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
} as const;

const Skills = () => {
  return (
    <motion.section
      id="habilidades"
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -80px 0px",
      }}
    >
      <div className="container">
        <motion.h2 variants={softReveal} className="skills-main-title">
          Mis Habilidades Técnicas
        </motion.h2>

        <div className="skills-layout">
          <motion.div variants={leftReveal} className="about-me-column">
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

          <motion.div variants={container} className="skills-column">
            <div className="skills-grid">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={cardReveal}
                  style={{ willChange: "transform, opacity" }}
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