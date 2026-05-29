import { useState } from 'react';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  // === DATOS REDACTADOS CON ENFOQUE EN VALOR EMPRESARIAL Y TÉCNICO ===
  const experiences = [
    {
      id: 0,
      company: "Desarrollo Académico",
      role: "Ingeniera en Sistemas en Formación",
      date: "Ago 2022 – Presente",
      focus: "Evolución práctica desde fundamentos algorítmicos hasta arquitecturas distribuidas.",
      bullets: [
        "Desde mis inicios en 2022, he forjado mi experiencia práctica asumiendo el liderazgo técnico y la arquitectura de proyectos de alta complejidad.",
        "He orquestado soluciones innovadoras de software distribuido como 'NovaDocs' (clúster local para LLMs), aplicando estándares empresariales en un entorno académico.",
        "Desarrollo entornos simulados como el laboratorio de hacking ético 'Vansus Hack' y el software de monitoreo 'Blue Tech Sentinel', afianzando mis conocimientos en ciberseguridad proactiva."
      ],
      icon: "fas fa-graduation-cap"
    },
    
    {
      id: 1,
      company: "Servicio Social",
      role: "Ingeniera de Infraestructura y Redes",
      date: "Ene 2025 – Presente",
      focus: "Despliegue, aseguramiento y optimización de servidores institucionales.",
      bullets: [
        "Contribuí al levantamiento y configuración de un Servidor RDS (Remote Desktop Services), centralizando el acceso a recursos académicos de forma segura y eficiente.",
        "Optimicé la infraestructura de red aplicando políticas de seguridad y control de accesos para proteger la integridad de los datos institucionales frente a vulnerabilidades.",
        "Desarrollé documentación técnica exhaustiva del ecosistema desplegado, garantizando su mantenibilidad a largo plazo y facilitando la curva de aprendizaje para futuros administradores."
      ],
      icon: "fas fa-server"
    },
    {
      id: 2,
      company: "IASCITEC",
      role: "Desarrolladora Full-Stack",
      date: "Abr 2025 – Presente",
      focus: "Automatización y optimización de procesos operativos de negocio.",
      bullets: [
        "Desarrollo ecosistemas web a medida utilizando React, Python y PHP, enfocados en la reducción de carga operativa y la simplificación de tareas complejas para los clientes.",
        "Diseño e implemento APIs RESTful seguras, permitiendo la interconexión ágil y eficiente entre múltiples plataformas y servicios de terceros.",
        "Arquitecto y administro bases de datos relacionales y NoSQL, garantizando la integridad, seguridad y rápida disponibilidad de la información crítica para la toma de decisiones."
      ],
      icon: "fas fa-laptop-code"
    },
    
    {
      id: 3,
      company: "Plataforma Vansus",
      role: "Fundadora y Educadora Tecnológica",
      date: "Ago 2025 – Presente",
      focus: "Democratización del conocimiento técnico y consolidación de habilidades de comunicación.",
      bullets: [
        "Diseñé y desarrollé la plataforma web 'Vansus' como un espacio centralizado para documentar y compartir mi trayectoria y aprendizajes en la ingeniería de software.",
        "Produzco material audiovisual donde explico la arquitectura y lógica detrás de mis proyectos, traduciendo conceptos de programación complejos a un lenguaje accesible.",
        "Esta iniciativa me permite aportar valor a la comunidad estudiantil, a la vez que refuerza mi dominio técnico y demuestra mis habilidades de liderazgo y comunicación estratégica."
      ],
      icon: "fas fa-video",
      // === DATOS DE LAS REDES SOCIALES ===
      socialLinks: [
        { name: "YouTube", icon: "fab fa-youtube", url: "https://youtube.com/@vansusacademy?si=pC9v5o-X0uMnS_py" },
        { name: "TikTok", icon: "fab fa-tiktok", url: "https://www.tiktok.com/@vansus2112?_r=1&_t=ZS-96K6cPNIibl" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/vansus2112?igsh=b21oZ3RkdDEycXYw" },
        { name: "Facebook", icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1HALQgE5FP/" }
      ]
    },
    {
      id: 4,
      company: "Wise Agend",
      role: "Líder de Proyecto (Project Manager)",
      date: "Sep 2025 – Ene 2026",
      focus: "Gestión de talento y orquestación de arquitectura multiplataforma orientada a la productividad.",
      bullets: [
        "Lideré y coordiné un equipo multidisciplinario de 11 personas, asegurando el cumplimiento de hitos y la entrega de la solución tecnológica en tiempo y forma.",
        "Dirigí el desarrollo de una aplicación con cuatro ejes modulares complejos: recordatorios, toma de notas, gestión de gastos y control de hábitos.",
        "Diseñé la arquitectura tecnológica del proyecto integrando Flutter, Python y Firebase, potenciada con capacidades inteligentes mediante la API de Gemini."
      ],
      icon: "fas fa-users-cog"
    },
    {
      id: 5,
      company: "8vo Coloquio de Sistemas",
      role: "Expositora y Desarrolladora de IA",
      date: "Mayo 2026",
      focus: "Innovación en sustentabilidad mediante Inteligencia Artificial y sistemas de gamificación.",
      bullets: [
        "Participé como ponente destacada presentando 'Axoscan', una solución tecnológica orientada a la concientización ecológica y evaluación de impacto ambiental.",
        "Desarrollé el motor principal de la aplicación que permite escanear productos, evaluar su nivel ecológico, sugerir alternativas sustentables e indicar puntos de venta.",
        "Implementé un sistema de gamificación interactivo centrado en un ajolote, orquestando tecnologías como Flutter, Python, Firebase, y el ecosistema de APIs de Google y Gemini."
      ],
      icon: "fas fa-leaf"
    }

  ];

  return (
    <section id="experiencia" className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-20 lg:py-32 z-10">
      
      {/* === ENCABEZADO === */}
      <div className="text-center mb-12 md:mb-16 anim-up">
        <h2 className="text-[#86a3ab] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">Trayectoria</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#eeede8] tracking-tight">Experiencia Profesional</h3>
        <div className="w-12 h-1 bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] mx-auto mt-4 md:mt-6 rounded-full shadow-[0_0_15px_rgba(169,183,186,0.6)]"></div>
      </div>

      {/* === CONTENEDOR PRINCIPAL: PESTAÑAS Y DETALLES === */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 anim-up delay-2">
        
        {/* --- NAVEGACIÓN IZQUIERDA (Pestañas) --- */}
        <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar border-b lg:border-b-0 lg:border-l border-[#86a3ab]/20">
          {experiences.map((exp, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex-shrink-0 lg:w-full text-left px-5 md:px-6 py-3 md:py-4 transition-all duration-300 group whitespace-nowrap lg:whitespace-normal
                  ${isActive 
                    ? 'bg-[#1f272c]/80 text-[#eeede8]' 
                    : 'text-[#cbcac8]/70 hover:text-[#eeede8] hover:bg-[#1f272c]/30'
                  }
                `}
              >
                {/* Indicador Activo */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] lg:w-[3px] lg:h-full bg-gradient-to-b from-[#86a3ab] to-[#efe5dc] shadow-[0_0_10px_rgba(239,229,220,0.5)]"></span>
                )}
                
                <h4 className={`text-sm md:text-base font-bold mb-1 transition-colors ${isActive ? 'text-[#efe5dc]' : 'group-hover:text-[#a9b7ba]'}`}>
                  {exp.company}
                </h4>
                <p className="text-[10px] md:text-xs font-mono tracking-wider opacity-80">{exp.date}</p>
              </button>
            );
          })}
        </div>

        {/* --- PANEL DE CONTENIDO DERECHO (Detalles) --- */}
        <div className="lg:w-2/3 h-auto">
          <div className="relative bg-[#1f272c]/40 backdrop-blur-2xl border border-[#86a3ab]/20 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-h-0 lg:min-h-[420px] flex flex-col justify-center">
            
            <div key={activeTab} className="anim-fade-in w-full">
              
              {/* Cabecera del Rol */}
              <div className="mb-6 md:mb-8 relative z-20">
                <h3 className="text-xl md:text-3xl font-extrabold text-[#eeede8] mb-2 leading-tight">
                  {experiences[activeTab].role} <br className="md:hidden"/> 
                  <span className="text-[#86a3ab] text-lg md:text-3xl">@ {experiences[activeTab].company}</span>
                </h3>
                <p className="text-[#a9b7ba] font-medium text-xs md:text-base border-l-2 border-[#efe5dc] pl-3 py-1 mt-3">
                  {experiences[activeTab].focus}
                </p>
              </div>

              {/* Lista de Impacto (Viñetas) */}
              <ul className="space-y-4 md:space-y-5 relative z-20">
                {experiences[activeTab].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#86a3ab] group-hover:bg-[#efe5dc] transition-colors shadow-[0_0_8px_rgba(134,163,171,0.5)] flex-shrink-0"></div>
                    <p className="text-[#cbcac8] leading-relaxed text-xs md:text-base font-light">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>

              {/* === RENDERIZADO DE REDES SOCIALES === */}
              {experiences[activeTab].socialLinks && (
                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-[#86a3ab]/20 relative z-30 opacity-100">
                  <p className="text-[#86a3ab] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-satellite-dish"></i> Explora la comunidad Vansus:
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4 relative z-30">
                    {experiences[activeTab].socialLinks.map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-[#121619]/80 border border-[#86a3ab]/30 text-[#cbcac8] hover:bg-[#86a3ab]/20 hover:border-[#efe5dc]/50 hover:text-[#efe5dc] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(134,163,171,0.3)] cursor-pointer"
                      >
                        <i className={`${social.icon} text-base md:text-lg group-hover:scale-110 transition-transform`}></i>
                        <span className="text-[10px] md:text-xs font-semibold tracking-wide">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Icono de fondo decorativo dinámico (Z-Index 0 para quedarse atrás) */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10 opacity-[0.05] pointer-events-none z-0">
                <i className={`${experiences[activeTab].icon} text-6xl md:text-8xl text-[#efe5dc]`}></i>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Estilo extra para ocultar la barra de scroll en móviles en la navegación de pestañas */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};