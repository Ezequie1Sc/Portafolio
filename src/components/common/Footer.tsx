const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Chicago',
  }).replace(' PM', ' p.m.').replace(' AM', ' a.m.');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/ezequiel-salazar-194975340/" target="_blank" rel="noopener noreferrer" className="footer-social-link linkedin">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Ezequie1Sc" target="_blank" rel="noopener noreferrer" className="footer-social-link github">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} Ezequiel Salazar. Todos los derechos reservados.
        </p>
        <p className="footer-date">
          {currentDate}
        </p>
      </div>
    </footer>
  );
};

export default Footer;