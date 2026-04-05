import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import Modal from './components/common/Modal';
import Certificates from './components/sections/Certificates';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const openModal = (type: 'cv' | 'demo') => {
    if (type === 'cv') {
      setModalContent({
        title: '¡Estamos trabajando para ti!',
        message: 'Estamos mejorando tu experiencia para que puedas descargar el CV de la mejor manera posible. Pronto estará disponible.'
      });
    } else {
      setModalContent({
        title: '¡Demo en Mantenimiento!',
        message: 'Actualmente estamos trabajando en mejorar esta demostración. ¡Vuelve pronto para probarla!'
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app min-h-screen flex flex-col bg-[#0f172a] text-white font-['Poppins'] overflow-x-hidden">
      <Header 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="pt-24 flex-grow">
        <Hero onDownloadCV={() => openModal('cv')} />
        <Projects /> {}
        <Skills />
        <Certificates /> {/* <-- AÑADIR SECCIÓN DE CERTIFICADOS */}
        <Contact />
      </main>

      <Footer />
      
      <Modal 
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
      />
    </div>
  );
}

export default App;