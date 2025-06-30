// src/components/App.tsx
import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <div className="header-content">
          <h1 className="logo">ES</h1>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#inicio" className="nav-link">Inicio</a></li>
              <li><a href="#proyectos" className="nav-link">Proyectos</a></li>
              <li><a href="#habilidades" className="nav-link">Habilidades</a></li>
              <li><a href="#contacto" className="nav-link">Contacto</a></li>
            </ul>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="main-content">
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <h2 className="hero-greeting">Hola Mundo, soy Ezequiel Salazar</h2>
            <h1 className="hero-title">Ingeniero en Sistemas y Desarrollador Web</h1>
            <p className="hero-description">
              Apasionado por crear soluciones digitales innovadoras y funcionales.
            </p>
            <div className="hero-buttons">
              <a href="#cv" className="cta-button">Descarga CV</a>
              <a href="#contacto" className="cta-button">Contáctame</a>
            </div>
          </div>
          <div className="hero-image">
            {/* Agrega tu foto aquí o un placeholder */}
            <img src="/path-to-your-photo.jpg" alt="Ezequiel Salazar" />
            {/* Íconos orbitantes (puedes usar SVG o react-icons) */}
            <div className="orbiting-icons">
              <span>💻</span>
              <span>🌐</span>
              <span>⚙️</span>
            </div>
          </div>
        </section>
        {/* Resto de secciones... */}
      </main>
    </div>
  );
}

export default App;