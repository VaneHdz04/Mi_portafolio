import { useState } from 'react';

export const About = () => {
  const [expandedHard, setExpandedHard] = useState(null);
  const [expandedSoft, setExpandedSoft] = useState(null);

  const toggleHard = (name) => setExpandedHard(expandedHard === name ? null : name);
  const toggleSoft = (name) => setExpandedSoft(expandedSoft === name ? null : name);

  // === DATOS DEL CV CON REDACCIÓN CLARA Y ENFOCADA EN VALOR ===
  const hardSkills = [
    { 
      name: "Desarrollo Full-Stack", 
      icon: "fas fa-code", 
      desc: "React, Flutter, Python, PHP",
      details: "Enfocada en la creación de ecosistemas digitales completos y eficientes. Especializada en la construcción de interfaces dinámicas con React y Flutter, integradas con backends robustos en Python y PHP. Comprometida con la implementación de APIs RESTful escalables que garantizan un rendimiento óptimo y una experiencia de usuario fluida."
    },
    { 
      name: "Inteligencia Artificial", 
      icon: "fas fa-brain", 
      desc: "LLMs, Ollama, n8n, Gemini",
      details: "Especializada en la integración estratégica de Inteligencia Artificial para la optimización de flujos de trabajo. Capacitada para desplegar modelos predictivos y generativos (como Phi-3 y Gemini) en clústeres locales, utilizando herramientas como Ollama y n8n para transformar procesos manuales en soluciones automatizadas e inteligentes."
    },
    { 
      name: "DevOps e Infraestructura", 
      icon: "fas fa-server", 
      desc: "Docker, AWS, Proxmox, Redis",
      details: "Motivada por garantizar la alta disponibilidad y la continuidad operativa de los sistemas. Sólida experiencia en la virtualización y contenedorización mediante Docker y Proxmox, y en el despliegue de infraestructuras distribuidas utilizando Celery, Redis y AWS para gestionar recursos de manera eficiente y escalable."
    },
    { 
      name: "Bases de Datos y APIs", 
      icon: "fas fa-database", 
      desc: "SQL, NoSQL, REST, Firebase",
      details: "Enfocada en el diseño y administración de arquitecturas de datos seguras e íntegras. Con experiencia en la optimización de bases relacionales (MySQL) y no relacionales (Firebase), facilitando la sincronización en tiempo real y el consumo eficiente de servicios para mantener la coherencia de la información en todo momento."
    },
    { 
      name: "Ciberseguridad", 
      icon: "fas fa-shield-halved", 
      desc: "Hacking Ético, Redes, Scapy",
      details: "Comprometida con la protección proactiva de sistemas e infraestructuras. Capacitada en el análisis de tráfico de red y la aplicación de principios de hacking ético para identificar vulnerabilidades. Orientada a la creación de entornos seguros mediante la implementación de protocolos estrictos de control de acceso y monitoreo."
    },
    { 
      name: "Hardware e IoT", 
      icon: "fas fa-microchip", 
      desc: "Arduino, Raspberry Pi, Sensores",
      details: "Motivada por la convergencia entre el software y el mundo físico. Experiencia en el desarrollo de soluciones de domótica y biometría mediante la integración de microcontroladores como Arduino y Raspberry Pi, creando sistemas inteligentes que automatizan el entorno y mejoran la interacción del usuario."
    }
  ];

  const softSkills = [
    { 
      name: "Resolución Lógica", 
      icon: "fas fa-puzzle-piece",
      details: "De pensamiento analítico y estructurado, capaz de descomponer retos técnicos complejos en soluciones viables y eficientes. Enfocada siempre en la optimización de recursos y la reducción sistemática de errores humanos."
    },
    { 
      name: "Metodologías Ágiles", 
      icon: "fas fa-tasks",
      details: "Acostumbrada a colaborar y liderar bajo marcos de trabajo ágiles como Scrum y Kanban. Comprometida con la entrega continua de valor, la documentación técnica clara y el control de versiones organizado."
    },
    { 
      name: "Liderazgo Estratégico", 
      icon: "fas fa-chess-knight",
      details: "Con capacidad para asumir la iniciativa técnica y coordinar equipos multidisciplinarios. Orientada a traducir las necesidades operativas del negocio en arquitecturas tecnológicas funcionales que aportan un valor transformador."
    },
    { 
      name: "Disciplina y Lealtad", 
      icon: "fas fa-handshake",
      details: "Profesional disciplinada y altamente adaptable, con una filosofía de aprendizaje continuo. Comprometida con los objetivos del equipo y con la entrega de proyectos de alta calidad que exceden las expectativas institucionales."
    }
  ];

  return (
    <section id="sobre-mi" className="relative max-w-[1100px] mx-auto px-6 py-32 z-10">
      
      {/* === 1. DESCRIPCIÓN GENERAL === */}
      <div className="text-center mb-24 anim-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight mb-4">
          Sobre Mí
        </h2>
        
        <h3 className="text-lg md:text-xl text-[#a9b7ba] font-medium mb-8">
          Soy <span className="text-[#efe5dc] font-bold">Vanesa Hernández</span>, Arquitecta de Software e Ingeniera en Sistemas
        </h3>
        
        <p className="text-[#cbcac8] leading-relaxed text-base md:text-lg max-w-4xl mx-auto font-light">
          Estudiante de Ingeniería en Sistemas Computacionales motivada por la automatización de procesos y la creación de soluciones tecnológicas que optimizan la eficiencia empresarial. Especializada en orquestar arquitecturas modernas y modelos de Inteligencia Artificial, con sólida experiencia en el despliegue de infraestructuras escalables. De pensamiento lógico, analítico y estratégico, estoy comprometida con entregar proyectos de alta calidad que reducen errores humanos y aportan un valor transformador.
        </p>
      </div>

      {/* === 2. SECCIÓN DE HABILIDADES === */}
      <div className="anim-up delay-2">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#86a3ab]"></div>
          <h3 className="text-3xl font-bold text-[#eeede8] tracking-tight">
            ADN Técnico
          </h3>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#86a3ab]"></div>
        </div>

        {/* --- Hard Skills --- */}
        <div className="mb-16">
          <h4 className="text-[#86a3ab] text-xs font-bold tracking-widest uppercase mb-6 text-center">
            Especialización Técnica
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hardSkills.map((skill, index) => {
              const isExpanded = expandedHard === skill.name;
              return (
                <div 
                  key={index} 
                  onClick={() => toggleHard(skill.name)}
                  className={`group relative flex flex-col p-6 rounded-2xl backdrop-blur-md border shadow-lg transition-all duration-500 cursor-pointer overflow-hidden
                    ${isExpanded 
                      ? 'bg-[#1f272c]/90 border-[#efe5dc]/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)]' 
                      : 'bg-[#1f272c]/40 border-[#86a3ab]/20 hover:-translate-y-1 hover:border-[#a9b7ba]/50 hover:bg-[#86a3ab]/10'
                    }
                  `}
                >
                  <div className="flex items-start justify-between w-full z-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300
                        ${isExpanded ? 'bg-gradient-to-tr from-[#86a3ab] to-[#efe5dc] border-transparent text-[#121619] shadow-[0_0_15px_rgba(134,163,171,0.5)]' : 'bg-[#121619] border-[#a9b7ba]/30 group-hover:border-[#efe5dc]/50 text-[#86a3ab] group-hover:text-[#efe5dc]'}
                      `}>
                        <i className={`${skill.icon} text-xl`}></i>
                      </div>
                      <div>
                        <h5 className="text-[#eeede8] font-bold text-base leading-tight mb-1">{skill.name}</h5>
                        <p className={`text-[11px] font-mono transition-colors ${isExpanded ? 'text-[#a9b7ba]' : 'text-[#cbcac8]/70'}`}>{skill.desc}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-transform duration-500 ${isExpanded ? 'rotate-180 bg-[#86a3ab]/20 border-[#86a3ab]/50' : 'group-hover:bg-white/10'}`}>
                        <i className={`fas fa-chevron-down text-sm ${isExpanded ? 'text-[#efe5dc]' : 'text-[#a9b7ba]'}`}></i>
                      </div>
                    </div>
                  </div>

                  <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-[#cbcac8] text-sm font-light leading-relaxed border-t border-[#86a3ab]/20 pt-4">
                        {skill.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Soft Skills --- */}
        <div>
          <h4 className="text-[#86a3ab] text-xs font-bold tracking-widest uppercase mb-6 text-center">
            Filosofía y Gestión Profesional
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {softSkills.map((skill, index) => {
              const isExpanded = expandedSoft === skill.name;
              return (
                <div 
                  key={index} 
                  onClick={() => toggleSoft(skill.name)}
                  className={`group flex flex-col p-5 rounded-xl backdrop-blur-sm border transition-all duration-500 cursor-pointer overflow-hidden
                    ${isExpanded 
                      ? 'bg-[#1f272c]/90 border-[#a9b7ba]/60 shadow-[0_10px_25px_rgba(0,0,0,0.4)]' 
                      : 'bg-[#1f272c]/20 border-[#a9b7ba]/10 hover:border-[#86a3ab]/40 hover:bg-[#1f272c]/60'
                    }
                  `}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <i className={`${skill.icon} text-2xl transition-colors duration-300 ${isExpanded ? 'text-[#efe5dc]' : 'text-[#a9b7ba] group-hover:text-[#eeede8]'}`}></i>
                      <span className={`font-semibold transition-colors duration-300 ${isExpanded ? 'text-[#eeede8]' : 'text-[#cbcac8] group-hover:text-[#eeede8]'}`}>
                        {skill.name}
                      </span>
                    </div>
                    <i className={`fas fa-chevron-down text-sm transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[#efe5dc]' : 'text-[#86a3ab] group-hover:text-[#a9b7ba]'}`}></i>
                  </div>

                  <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-[#cbcac8]/90 text-sm font-light leading-relaxed border-t border-[#86a3ab]/20 pt-3">
                        {skill.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};