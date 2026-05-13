export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full z-10 bg-[#1f272c]/40 backdrop-blur-2xl border-t border-[#86a3ab]/20 overflow-hidden pt-16 pb-8">
      
      {/* Efectos de luz de fondo integrados en el ancho completo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#86a3ab]/50 to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#86a3ab]/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Contenedor del Contenido (Mantiene los elementos centrados y ordenados) */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Columna 1: Branding y Mensaje (Ocupa 5 columnas) */}
          <div className="md:col-span-5 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-[#eeede8] tracking-tight mb-2 flex items-center justify-center md:justify-start gap-3">
              <i className="fa-solid fa-code text-[#86a3ab]"></i>
              Vanesa Hernández
            </h2>
            <p className="text-[#cbcac8] font-light leading-relaxed mb-6">
              Ingeniera de Software & Especialista en IA. <br className="hidden md:block" />
              Transformando la complejidad técnica en ecosistemas digitales elegantes y escalables.
            </p>
            
            {/* Info de contacto rápida */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 text-[#a9b7ba] text-xs font-mono">
              <a href="mailto:vanehdzmtz04@gmail.com" className="hover:text-[#efe5dc] transition-colors flex items-center gap-2">
                <i className="fa-regular fa-envelope text-[#86a3ab]"></i> vanehdzmtz04@gmail.com
              </a>
              <span className="hidden sm:block text-[#86a3ab]/30">|</span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-[#86a3ab]"></i> Jilotepec, Méx.
              </span>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida Estilo "Tags" (Ocupa 4 columnas) */}
          <div className="md:col-span-4 flex flex-col justify-center items-center md:items-start">
            <h4 className="text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest mb-4">Navegación del Portafolio</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                { name: 'Sobre Mí', link: '#sobre-mi' },
                { name: 'ADN Técnico', link: '#habilidades' },
                { name: 'Trayectoria', link: '#experiencia' },
                { name: 'Educación', link: '#educacion' },
                { name: 'Contacto', link: '#contacto' }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  className="px-4 py-2 rounded-full border border-[#86a3ab]/20 bg-[#121619]/40 text-[#cbcac8] text-xs font-medium hover:bg-[#86a3ab]/20 hover:border-[#efe5dc]/40 hover:text-[#efe5dc] transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3: Botón Interactivo de Subida (Ocupa 3 columnas) */}
          <div className="md:col-span-3 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#86a3ab]/20 pt-8 md:pt-0">
            <button 
              onClick={scrollToTop}
              className="group relative w-16 h-16 rounded-full bg-[#121619] border border-[#a9b7ba]/30 flex items-center justify-center text-[#86a3ab] hover:border-transparent transition-all duration-300"
              aria-label="Volver arriba"
            >
              {/* Fondo del botón al hacer hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#86a3ab] to-[#efe5dc] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(239,229,220,0.4)]"></div>
              
              {/* Icono */}
              <i className="fa-solid fa-arrow-up text-xl relative z-10 group-hover:text-[#121619] group-hover:-translate-y-1 transition-transform duration-300"></i>
            </button>
            <span className="text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest mt-4">Volver Arriba</span>
          </div>

        </div>

        {/* Barra Inferior (Copyright) */}
        <div className="mt-12 pt-6 border-t border-[#86a3ab]/20 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-[#a9b7ba]/60 text-xs font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Vanesa Hernández. Todos los derechos reservados.
          </p>
          <p className="text-[#a9b7ba]/80 text-xs font-medium text-center md:text-right italic">
            "La mejor forma de predecir el futuro es inventarlo." <span className="text-[#86a3ab] font-bold not-italic ml-1">— Alan Kay</span>
          </p>
        </div>

      </div>
    </footer>
  );
};