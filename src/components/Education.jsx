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

  // === CERTIFICACIONES Y APRENDIZAJE CONTINUO (Grid de Valor) ===
  // Se ha eliminado 'platform' (Expedido por) y 'type' (Certificado/Especialización)
  const certifications = [
    {
      id: 1,
      title: "Certificación en Docker y Virtualización",
      icon: "fab fa-docker",
      value: "Aislamiento y despliegue continuo de entornos. Optimizo el ciclo de vida del software asegurando que el código funcione idéntico en desarrollo y producción."
    },
    {
      id: 2,
      title: "Desarrollo Multiplataforma con Flutter",
      icon: "fas fa-mobile-screen-button",
      value: "Construcción de aplicaciones móviles nativas y responsivas desde una única base de código, acelerando el 'Time-to-Market' de los productos digitales."
    },
    {
      id: 3,
      title: "Arquitectura Cloud y Alta Disponibilidad",
      icon: "fab fa-aws",
      value: "Capacidad para configurar, desplegar y asegurar aplicaciones en entornos de nube, garantizando la escalabilidad y disponibilidad operativa de la empresa."
    },
    {
      id: 4,
      title: "Ecosistemas Web Modernos (JS/React)",
      icon: "fab fa-react",
      value: "Implementación de interfaces interactivas, modulares y centradas en el usuario, aplicando principios de diseño que retienen y convierten clientes."
    },
    {
      id: 5,
      title: "Integración de IA en Software",
      icon: "fas fa-brain",
      value: "Orquestación de LLMs (Gemini, Phi-3) y flujos automatizados para transformar tareas operativas en soluciones autónomas de alto impacto."
    },
    {
      id: 6,
      title: "Certificación Oficial Microsoft Office",
      icon: "fas fa-file-signature",
      value: "Manejo avanzado validado para la gestión documental rigurosa, análisis de métricas complejas en Excel y presentación ejecutiva de resultados."
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
                {/* Se ha eliminado el badge de tipo de certificado */}
                <div className="flex justify-start items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#121619] border border-[#a9b7ba]/30 flex items-center justify-center group-hover:border-[#efe5dc]/50 transition-colors shadow-inner">
                    <i className={`${cert.icon} text-xl text-[#86a3ab] group-hover:text-[#efe5dc] transition-colors`}></i>
                  </div>
                </div>

                {/* Título */}
                <h4 className="text-[#eeede8] font-bold text-base leading-tight mb-1">{cert.title}</h4>
                {/* Se ha eliminado la plataforma (Expedido por) */}

                {/* Descripción desplegable al hacer hover (Smooth Accordion) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    {/* La transparencia y el degradado aseguran legibilidad sobre el título */}
                    <p className="text-[#cbcac8] text-sm font-light leading-relaxed pt-4 mt-4 border-t border-[#86a3ab]/20 bg-gradient-to-b from-[#1f272c]/90 via-[#1f272c] to-[#1f272c] relative">
                      {cert.value}
                    </p>
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