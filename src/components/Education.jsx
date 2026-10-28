import React from 'react';

export const Education = () => {

  // === EDUCACIÓN FORMAL (Línea de Tiempo) ===
  const educationData = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Tecnológico de Estudios Superiores de Jilotepec",
      period: "", // Se retiró 'En Curso' como fue solicitado
      description: "Formación en ciencias computacionales y arquitectura de software. Especialización práctica en desarrollo backend con Java y Spring Boot, gestión de contenido digital (AEM) y construcción de soluciones tecnológicas empresariales.",
      highlight: "Egresada en Ingeniería en Sistemas",
      icon: "fas fa-user-graduate"
    },
    {
      id: 2,
      degree: "Técnico en Programación",
      institution: "CECyTEM (Colegio de Estudios Científicos y Tecnológicos)",
      period: "Titulación Completada",
      description: "Cimientos sólidos en lógica algorítmica y desarrollo de software. Esta etapa temprana forjó una mentalidad analítica y estructurada, adelantando mi inmersión profesional en el ecosistema tecnológico.",
      highlight: "Cédula de Técnico Profesional",
      icon: "fas fa-microchip"
    }
  ];

  // === CURSOS Y CAPACITACIÓN TÉCNICA (Grid de Categorías - Cursos, NO certificaciones) ===
  const certifications = [
    {
      id: 1,
      title: "Adobe Experience Manager (Cursos)",
      badge: "Cursos AEM",
      icon: "fas fa-cubes",
      courses: [
        "Curso: Fundamentos de Adobe Experience Manager (AEM Sites & Assets)",
        "Curso: Creación de Componentes Básicos con HTL / Sightly y Sling Models",
        "Curso: Estructura de Contenidos en Repositorio JCR y CRXDE Lite",
        "Curso: Introducción a la Configuración Modular OSGi"
      ]
    },
    {
      id: 2,
      title: "Backend Java & Spring Boot (Cursos)",
      badge: "Cursos Java",
      icon: "fab fa-java",
      courses: [
        "Curso: Java 17 y Programación Orientada a Objetos",
        "Curso: Construcción de APIs REST y Microservicios con Spring Boot 3",
        "Curso: Persistencia de Datos con Spring Data JPA e Hibernate",
        "Curso: Pruebas Unitarias de Software con JUnit"
      ]
    },
    {
      id: 3,
      title: "DevOps & Herramientas (Cursos)",
      badge: "Cursos Herramientas",
      icon: "fas fa-cloud",
      courses: [
        "Curso: Contenedores y Entornos de Desarrollo con Docker",
        "Curso: Control de Versiones y Flujos Colaborativos con Git & GitHub",
        "Curso: Documentación y Validación de APIs con Swagger y Postman",
        "Curso: Fundamentos de Infraestructura y Servicios en la Nube (AWS)"
      ]
    },
    {
      id: 4,
      title: "Desarrollo Frontend & Web (Cursos)",
      badge: "Cursos Frontend",
      icon: "fas fa-laptop-code",
      courses: [
        "Curso: Desarrollo de Interfaces con React.js",
        "Curso: Maquetación y Estilos con HTML5, CSS3 y Tailwind CSS",
        "Curso: JavaScript Moderno (ES6+) para Aplicaciones Web",
        "Curso: Prototipado y Diseño de Interfaces en Figma"
      ]
    }
  ];

  return (
    <section id="educacion" className="relative max-w-[1300px] mx-auto px-6 py-32 z-10">
      
      {/* === ENCABEZADO === */}
      <div className="text-center mb-20 anim-up">
        <h2 className="text-[#86a3ab] text-sm font-bold tracking-widest uppercase mb-3">Evolución Académica</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight">Formación y Cursos</h3>
        <div className="w-12 h-1 bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(169,183,186,0.6)]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* === COLUMNA IZQUIERDA: LÍNEA DE TIEMPO ACADÉMICA (5 Columnas) === */}
        <div className="lg:col-span-5 relative">
          {/* Línea vertical de conexión */}
          <div className="absolute left-6 md:left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#86a3ab]/50 via-[#a9b7ba]/20 to-transparent"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`relative pl-20 md:pl-24 anim-up delay-${index + 1}`}>
                
                {/* Nodo en la línea de tiempo */}
                <div className="absolute left-0 md:left-2 top-0 w-12 h-12 rounded-full bg-[#1f272c] border-2 border-[#86a3ab] flex items-center justify-center shadow-[0_0_15px_rgba(134,163,171,0.4)] z-10">
                  <i className={`${edu.icon} text-[#efe5dc] text-lg`}></i>
                </div>

                {/* Tarjeta de Educación */}
                <div className="bg-[#1f272c]/40 backdrop-blur-xl border border-[#86a3ab]/20 p-6 rounded-[2rem] shadow-lg hover:-translate-y-1 hover:border-[#a9b7ba]/40 transition-all duration-300">
                  <h3 className="text-xl font-extrabold text-[#eeede8] leading-tight mb-1">{edu.degree}</h3>
                  <p className="text-[#a9b7ba] text-sm font-medium mb-1">{edu.institution}</p>
                  {edu.period ? (
                    <p className="text-[#cbcac8]/60 text-xs font-mono mb-4">{edu.period}</p>
                  ) : (
                    <div className="mb-3"></div>
                  )}
                  
                  <p className="text-[#cbcac8] text-sm leading-relaxed font-light mb-5">
                    {edu.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-[#86a3ab]/10 border border-[#86a3ab]/20 px-3 py-1.5 rounded-lg">
                    <i className="fas fa-award text-[#86a3ab] text-xs"></i>
                    <span className="text-[#efe5dc] text-xs font-semibold tracking-wide">{edu.highlight}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* === COLUMNA DERECHA: APRENDIZAJE CONTINUO (7 Columnas) === */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-8 anim-up delay-2">
            <h3 className="text-xl font-bold text-[#eeede8]">Cursos de Capacitación Técnica</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#86a3ab]/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className={`group relative bg-[#1f272c]/40 backdrop-blur-md border border-[#86a3ab]/20 p-6 rounded-2xl overflow-hidden hover:border-[#efe5dc]/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 anim-up delay-${(index % 4) + 2}`}
              >
                
                {/* Cabecera: Icono y Badge de Curso */}
                <div className="flex justify-between items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#121619] border border-[#a9b7ba]/30 flex items-center justify-center group-hover:border-[#efe5dc]/50 transition-colors shadow-inner flex-shrink-0">
                    <i className={`${cert.icon} text-xl text-[#86a3ab] group-hover:text-[#efe5dc] transition-colors`}></i>
                  </div>
                  {cert.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#86a3ab]/10 border border-[#86a3ab]/30 text-[#efe5dc]">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h4 className="text-[#eeede8] font-bold text-base leading-tight mb-1">{cert.title}</h4>

                {/* Lista desplegable al hacer hover (Smooth Accordion para listas) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <ul className="text-[#cbcac8] text-[13px] font-light leading-relaxed pt-4 mt-4 border-t border-[#86a3ab]/20 bg-gradient-to-b from-[#1f272c]/90 via-[#1f272c] to-[#1f272c] relative list-disc pl-5 space-y-1.5 marker:text-[#86a3ab]">
                      {cert.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
