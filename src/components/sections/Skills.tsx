import { skills } from '../../data';
import SkillCard from '../ui/SkillCard';
import '../../styles/Skills.css';

const Skills = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <h2 className="skills-main-title">Mis Habilidades Técnicas</h2>

        <div className="skills-layout">
          {/* Columna izquierda - About Me */}
          <div className="about-me-column">
            <div className="about-me-card">
              <div className="about-me-header">
                <span className="about-me-border-top"></span>
                <h3 className="about-me-title">SOBRE MÍ</h3>
                <span className="about-me-border-bottom"></span>
              </div>
              
              <div className="about-me-image-container">
                <div className="about-me-image-wrapper">
                  <img 
                    src="face.webp" 
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
          </div>

          {/* Columna derecha - Skills */}
          <div className="skills-column">
            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;