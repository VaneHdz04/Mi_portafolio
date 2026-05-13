import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact'; 
import { Footer } from './components/Footer';   

function App() {

  // Lógica global para animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Si el elemento entra en la pantalla, le añadimos 'is-visible'
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { 
      threshold: 0.1 // Se dispara cuando al menos el 10% del elemento es visible
    });

    // Seleccionamos todos los elementos que tengan nuestras clases de animación
    const animatedElements = document.querySelectorAll('.anim-up, .anim-down, .anim-right, .anim-zoom');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    // Agregamos flex y min-h-screen al contenedor principal para que el footer siempre quede abajo
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact /> 
      <Footer />  
    </div>
  );
}

export default App;