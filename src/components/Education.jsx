import React from 'react';

export const Education = () => {

  // === EDUCACIÓN FORMAL (Línea de Tiempo) ===
  const educationData = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Tecnológico de Estudios Superiores de Jilotepec",
      period: "2022 – Presente (8vo Semestre)",
      description: "Consolidación de conocimientos arquitectónicos. Enfoque práctico en el diseño de sistemas distribuidos, integración de Inteligencia Artificial y gestión de infraestructuras para resolver problemas empresariales reales.",
      highlight: "Desarrollo de ecosistemas de software a medida",
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

  // === CERTIFICACIONES Y APRENDIZAJE CONTINUO (Grid de Categorías) ===
  const certifications = [
    {
      id: 1,
      title: "Desarrollo Multiplataforma y Web",
      icon: "fas fa-laptop-code",
      courses: [
        "Aplicaciones Móviles con Flutter",
        "Fundamentos de React Native",
        "React.js y React Avanzado",
        "Desarrollo Web Moderno (HTML, CSS, JS, Tailwind, React)"
      ]
    },
    {
      id: 2,
      title: "Ciberseguridad",
      icon: "fas fa-shield-halved",
      courses: [
        "Inteligencia para la Ciberseguridad",
        "Ciberseguridad para Desarrollo Web",
        "Ciberseguridad y Privacidad para Empresas"
      ]
    },
    {
      id: 3,
      title: "IA y Automatización",
      icon: "fas fa-brain",
      courses: [
        "Pensamiento Crítico para usar Inteligencia Artificial",
        "Automatizaciones con n8n"
      ]
    },
    {
      id: 4,
      title: "Infraestructura Cloud y DevOps",
      icon: "fas fa-cloud",
      courses: [
        "Servicios en la Nube con AWS",
        "Virtualización y Contenedores con Docker y Proxmox",
        "Git y GitHub"
      ]
    },
    {
      id: 5,
      title: "Diseño, Datos y Gestión",
      icon: "fas fa-chart-line",
      courses: [
        "Diseño y Prototipado en Figma",
        "Power BI",
        "Certificación oficial en Microsoft Office (Word, Excel, PowerPoint)",
        "Mindset para Ventas"
      ]
    }
  ];

  return (
    <section id="educacion" className="relative max-w-[1300px] mx-auto px-6 py-32 z-10">
      
      {/* === ENCABEZADO === */}
      <div className="text-center mb-20 anim-up">
        <h2 className="text-[#86a3ab] text-sm font-bold tracking-widest uppercase mb-3">Evolución Académica</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight">Formación y Certificaciones</h3>
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
                  <p className="text-[#cbcac8]/60 text-xs font-mono mb-4">{edu.period}</p>
                  
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
            <h3 className="text-xl font-bold text-[#eeede8]">Acreditaciones Complementarias</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#86a3ab]/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className={`group relative bg-[#1f272c]/40 backdrop-blur-md border border-[#86a3ab]/20 p-6 rounded-2xl overflow-hidden hover:border-[#efe5dc]/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 anim-up delay-${(index % 4) + 2}`}
              >
                
                {/* Cabecera: Icono */}
                <div className="flex justify-start items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#121619] border border-[#a9b7ba]/30 flex items-center justify-center group-hover:border-[#efe5dc]/50 transition-colors shadow-inner">
                    <i className={`${cert.icon} text-xl text-[#86a3ab] group-hover:text-[#efe5dc] transition-colors`}></i>
                  </div>
                </div>

                {/* Título */}
                <h4 className="text-[#eeede8] font-bold text-base leading-tight mb-1">{cert.title}</h4>

                {/* Lista desplegable al hacer hover (Smooth Accordion modificado para listas) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <ul className="text-[#cbcac8] text-[13px] font-light leading-relaxed pt-4 mt-4 border-t border-[#86a3ab]/20 bg-gradient-to-b from-[#1f272c]/90 via-[#1f272c] to-[#1f272c] relative list-disc pl-5 space-y-1 marker:text-[#86a3ab]">
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