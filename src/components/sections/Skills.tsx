import { skills } from '../../data';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <h2 className="skills-main-title">Mis Habilidades Técnicas</h2>

        <div className="skills-layout">
          {/* Columna izquierda - About Me con diseño de tabla */}
          <div className="about-me-column">
            <div className="about-me-card">
              <div className="about-me-header">
                <span className="about-me-border-top"></span>
                <h3 className="about-me-title">SOBRE MÍ</h3>
                <span className="about-me-border-bottom"></span>
              </div>
              
              <div className="about-me-grid">
                {/* Quien Soy */}
                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Quien soy</h4>
                  </div>
                  <p className="about-me-item-text">
                    Desarrollador de software enfocado en crear aplicaciones y soluciones tecnológicas.
                  </p>
                </div>

                {/* Mi objetivo */}
                <div className="about-me-item">
                  <div className="about-me-item-header">
                    <span className="about-me-item-icon">◈</span>
                    <h4 className="about-me-item-title">Mi objetivo</h4>
                  </div>
                  <p className="about-me-item-text">
                    Seguir aprendiendo nuevas tecnologías y construir software con impacto real.
                  </p>
                </div>

                {/* Mi perfil */}
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