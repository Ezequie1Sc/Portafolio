import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certificates from './components/sections/Certificates'; // <-- IMPORTAR CERTIFICADOS
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
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



 

  return (
    <div className="app min-h-screen flex flex-col bg-[#0f172a] text-white font-['Poppins'] overflow-x-hidden">
      <Header 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="pt-24 flex-grow">
       <Hero />
        <Projects /> {/* <-- YA NO RECIBE PROPS */}
        <Skills />
        <Certificates /> {/* <-- AÑADIR SECCIÓN DE CERTIFICADOS */}
        <Contact />
      </main>

      <Footer />
    
    </div>
  );
}

export default App;