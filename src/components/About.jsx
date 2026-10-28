import { useState } from 'react';

export const About = () => {
  const [expandedHard, setExpandedHard] = useState(null);
  const [expandedSoft, setExpandedSoft] = useState(null);

  const toggleHard = (name) => setExpandedHard(expandedHard === name ? null : name);
  const toggleSoft = (name) => setExpandedSoft(expandedSoft === name ? null : name);

  // === DATOS TÉCNICOS ALINEADOS A JAVA, SPRING BOOT Y AEM ===
  const hardSkills = [
    { 
      name: "Java & Spring Boot", 
      icon: "fab fa-java", 
      desc: "Java 17, Spring Boot 3, Spring Data JPA, Hibernate, Maven, JUnit",
      details: "Desarrollo de aplicaciones empresariales y servicios backend utilizando Java y Spring Boot. Implementación de APIs REST, lógica de negocio, persistencia de datos y arquitecturas organizadas por capas, aplicando programación orientada a objetos, principios SOLID y buenas prácticas de desarrollo."
    },
    { 
      name: "Adobe Experience Manager (AEM)", 
      icon: "fas fa-cubes", 
      desc: "AEM Sites, AEM Assets, Apache Sling, Sling Models, HTL, JCR, OSGi",
      details: "Desarrollo y personalización de soluciones de gestión de contenido digital mediante Adobe Experience Manager. Creación de componentes reutilizables utilizando Sling Models y HTL, configuración de plantillas, organización de contenido en repositorios JCR y administración de configuraciones modulares mediante OSGi."
    },
    { 
      name: "Arquitectura Backend & APIs", 
      icon: "fas fa-network-wired", 
      desc: "APIs REST, Microservicios, MVC, JWT, Spring Security, SOLID",
      details: "Diseño e implementación de servicios backend orientados a aplicaciones empresariales. Organización de sistemas mediante arquitecturas modulares, integración de servicios REST, mecanismos de autenticación y autorización, separación de responsabilidades y patrones que favorecen la mantenibilidad y escalabilidad del software."
    },
    { 
      name: "Desarrollo Full Stack", 
      icon: "fas fa-code", 
      desc: "React, JavaScript, HTML5, CSS3, Tailwind CSS, Node.js, Express.js",
      details: "Desarrollo e integración de interfaces web con servicios backend, utilizando React y tecnologías modernas de frontend. Construcción de componentes reutilizables, consumo de APIs REST y desarrollo de funcionalidades con Node.js y Express.js para soluciones web completas."
    },
    { 
      name: "Bases de Datos & Persistencia", 
      icon: "fas fa-database", 
      desc: "PostgreSQL, SQL Server, MySQL, MongoDB, JPA, Hibernate",
      details: "Integración y administración de bases de datos relacionales y NoSQL en aplicaciones empresariales. Implementación de modelos de datos, consultas, operaciones CRUD y mecanismos de persistencia mediante JPA e Hibernate, priorizando la integridad y organización de la información."
    },
    { 
      name: "DevOps & Herramientas", 
      icon: "fas fa-terminal", 
      desc: "Docker, Git, GitHub, Maven, Swagger/OpenAPI, Postman, AWS",
      details: "Configuración de entornos de desarrollo, contenerización de aplicaciones con Docker, gestión de dependencias con Maven y control de versiones mediante Git. Documentación y validación de APIs con Swagger y Postman, además de conocimientos en servicios de infraestructura y procesos de despliegue."
    }
  ];

  const softSkills = [
    { 
      name: "Buenas prácticas y calidad de código", 
      icon: "fas fa-check-double",
      details: "Programación orientada a objetos (POO), principios SOLID, modularidad, reutilización, legibilidad y diseño estructurado para garantizar la mantenibilidad y robustez del software empresarial."
    },
    { 
      name: "Resolución de problemas", 
      icon: "fas fa-puzzle-piece",
      details: "Análisis estructurado de requerimientos, depuración técnica eficiente, diagnóstico oportuno de errores y planteamiento de soluciones orientadas a la optimización operativa."
    },
    { 
      name: "Arquitectura y diseño de software", 
      icon: "fas fa-sitemap",
      details: "Separación clara de responsabilidades, adopción de patrones de diseño empresariales, construcción de componentes desacoplados y sistemas escalables."
    },
    { 
      name: "Metodologías y colaboración", 
      icon: "fas fa-tasks",
      details: "Control de versiones ordenado con Git, flujos de trabajo colaborativos, participación en revisiones de código y coordinación bajo marcos de desarrollo ágil."
    }
  ];

  return (
    <section id="sobre-mi" className="relative max-w-[1100px] mx-auto px-6 py-32 z-10">
      
      {/* === 1. DESCRIPCIÓN GENERAL === */}
      <div className="text-center mb-24 anim-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight mb-4">
          Sobre Mí
        </h2>
        
        <h3 className="text-base md:text-lg text-[#a9b7ba] font-medium mb-8">
          Soy <span className="text-[#efe5dc] font-bold">Vanesa Hernández</span>, Desarrolladora Backend Java / Full Stack
        </h3>
        
        <div className="space-y-3.5 text-[#cbcac8] leading-relaxed text-sm md:text-[15px] max-w-3xl mx-auto font-light text-center md:text-left">
          <p>
            Ingeniera en Sistemas Computacionales con experiencia en el desarrollo de aplicaciones empresariales y soluciones tecnológicas.
          </p>
          <p>
            Mi especialización se centra en el ecosistema <strong className="text-[#eeede8] font-semibold">Java</strong>, utilizando <strong className="text-[#efe5dc] font-semibold">Spring Boot, Spring MVC, JPA e Hibernate</strong> para construir APIs REST, microservicios y sistemas backend estructurados bajo buenas prácticas de programación.
          </p>
          <p>
            También cuento con conocimientos aplicados en <strong className="text-[#efe5dc] font-semibold">Adobe Experience Manager (AEM)</strong>, trabajando con AEM Sites, AEM Assets, Apache Sling, Sling Models, HTL, repositorios JCR y componentes OSGi para desarrollar soluciones de gestión de contenido digital.
          </p>
          <p>
            Complemento mi experiencia backend con tecnologías frontend como <strong className="text-[#eeede8] font-semibold">React, JavaScript, HTML5 y CSS3</strong>, así como herramientas de desarrollo y despliegue como Docker, Maven, Git y Swagger.
          </p>
          <p>
            Me interesa desarrollar soluciones empresariales mantenibles, seguras y escalables, priorizando la calidad del código, la organización de la arquitectura y la resolución de problemas.
          </p>
        </div>
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
                  <div className="flex items-start justify-between w-full z-10 gap-3">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-300
                        ${isExpanded ? 'bg-gradient-to-tr from-[#86a3ab] to-[#efe5dc] border-transparent text-[#121619] shadow-[0_0_15px_rgba(134,163,171,0.5)]' : 'bg-[#121619] border-[#a9b7ba]/30 group-hover:border-[#efe5dc]/50 text-[#86a3ab] group-hover:text-[#efe5dc]'}
                      `}>
                        <i className={`${skill.icon} text-xl`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-[#eeede8] font-bold text-base leading-tight mb-1">{skill.name}</h5>
                        <p className={`text-[11px] font-mono transition-colors ${isExpanded ? 'text-[#a9b7ba]' : 'text-[#cbcac8]/70'}`}>{skill.desc}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-1 flex-shrink-0">
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
                  <div className="flex items-center justify-between w-full gap-3">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <i className={`${skill.icon} text-2xl flex-shrink-0 transition-colors duration-300 ${isExpanded ? 'text-[#efe5dc]' : 'text-[#86a3ab] group-hover:text-[#eeede8]'}`}></i>
                      <span className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-300 ${isExpanded ? 'text-[#eeede8]' : 'text-[#cbcac8] group-hover:text-[#eeede8]'}`}>
                        {skill.name}
                      </span>
                    </div>
                    <i className={`fas fa-chevron-down text-sm flex-shrink-0 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[#efe5dc]' : 'text-[#86a3ab] group-hover:text-[#a9b7ba]'}`}></i>
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