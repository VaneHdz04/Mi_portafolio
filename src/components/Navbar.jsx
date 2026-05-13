import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Estado para ocultar el Navbar

  // 1. Detectar el Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'experiencia', 'proyectos', 'educacion', 'contacto'];
      let currentSection = 'inicio';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Detectar si el Lightbox de proyectos está abierto
  useEffect(() => {
    // El Lightbox de proyectos le pone overflow: 'hidden' al body. 
    // Usamos un MutationObserver para detectar este cambio automáticamente.
    const observer = new MutationObserver(() => {
      setIsLightboxOpen(document.body.style.overflow === 'hidden');
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });

    // Comprobación inicial por si acaso
    setIsLightboxOpen(document.body.style.overflow === 'hidden');

    return () => observer.disconnect();
  }, []);

  // Lista de navegación
  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'fas fa-home' },
    { id: 'sobre-mi', label: 'Perfil', icon: 'fas fa-user-astronaut' },
    { id: 'habilidades', label: 'Stack Tecnológico', icon: 'fas fa-code' },
    { id: 'experiencia', label: 'Trayectoria', icon: 'fas fa-network-wired' },
    { id: 'proyectos', label: 'Proyectos', icon: 'fas fa-layer-group' },
    { id: 'educacion', label: 'Formación', icon: 'fas fa-graduation-cap' },
    { id: 'contacto', label: 'Contacto', icon: 'fas fa-terminal' }
  ];

  return (
    // Contenedor principal: Se oculta suavemente hacia arriba si isLightboxOpen es true
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90vw] lg:w-max 
      ${isLightboxOpen ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 anim-down is-visible'} 
      ${isScrolled && !isLightboxOpen ? 'top-4' : 'top-8'}
    `}>
      
      {/* --- VERSIÓN ESCRITORIO (Dock Flotante) --- */}
      <div className="hidden lg:flex items-center p-2 rounded-full bg-[#1f272c]/50 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Logo "Botón" a la izquierda */}
        <div 
          className="mr-4 ml-1 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#86a3ab] to-[#efe5dc] text-[#1f272c] cursor-pointer hover:scale-110 hover:-rotate-12 transition-all duration-300 shadow-[0_0_15px_rgba(134,163,171,0.5)]" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Ir al inicio"
        >
          <span className="font-extrabold text-lg tracking-tighter">VH</span>
        </div>
        
        {/* Enlaces de Navegación */}
        <ul className="flex items-center gap-1 pr-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 group overflow-hidden
                    ${isActive ? 'text-[#1f272c]' : 'text-[#cbcac8]/70 hover:text-[#eeede8] hover:bg-white/5'}
                  `}
                >
                  {/* Fondo activo (Estilo botón presionado) */}
                  {isActive && (
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a9b7ba] to-[#eeede8] rounded-full -z-10 shadow-[0_0_20px_rgba(169,183,186,0.3)]"></span>
                  )}
                  
                  {/* Icono */}
                  <i className={`${item.icon} ${isActive ? 'text-[#1f272c]' : 'text-[#86a3ab] group-hover:text-[#a9b7ba]'} transition-colors duration-300 text-sm`}></i>
                  
                  {/* Texto */}
                  <span className="mt-[1px]">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* --- VERSIÓN MÓVIL (Píldora minimalista) --- */}
      <div className="lg:hidden flex justify-between items-center w-full px-6 py-4 rounded-full bg-[#1f272c]/50 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#86a3ab] to-[#efe5dc] text-[#1f272c] font-extrabold text-sm tracking-tighter">VH</span>
          <span className="text-[#eeede8] font-bold tracking-widest uppercase text-xs">Portafolio</span>
        </div>
        
        {/* Aquí puedes conectar la lógica de tu menú hamburguesa si la tienes */}
        <button className="text-[#86a3ab] hover:text-[#eeede8] transition-colors focus:outline-none">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

    </nav>
  );
};