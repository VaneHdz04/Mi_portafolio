import { useState, useEffect } from 'react';

// === COMPONENTE 1: LIGHTBOX (Galería a pantalla completa) ===
const Lightbox = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevenir el scroll de la página de fondo
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    // Z-index 9999 asegura que tape el Navbar
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6 md:p-12">
      
      {/* Fondo difuminado general */}
      <div className="absolute inset-0 bg-[#121619]/95 backdrop-blur-2xl" onClick={onClose}></div>
      
      {/* Botón de cerrar */}
      <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-[#86a3ab]/20 border border-[#86a3ab]/50 text-[#efe5dc] hover:bg-[#86a3ab] hover:scale-110 transition-all flex items-center justify-center shadow-lg">
        <i className="fa-solid fa-xmark text-xl"></i>
      </button>

      {/* Contenedor Principal de la Imagen */}
      <div className="relative w-full max-w-5xl h-[45vh] md:h-[55vh] flex items-center justify-center z-10 mb-6 mt-4">
        
        {project.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-0 md:-left-12 z-20 w-12 h-12 rounded-full bg-[#1f272c] border border-[#86a3ab]/50 text-[#86a3ab] hover:text-[#efe5dc] hover:bg-[#86a3ab]/80 hover:scale-110 transition-all flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={nextImage} className="absolute right-0 md:-right-12 z-20 w-12 h-12 rounded-full bg-[#1f272c] border border-[#86a3ab]/50 text-[#86a3ab] hover:text-[#efe5dc] hover:bg-[#86a3ab]/80 hover:scale-110 transition-all flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}

        <img 
          src={project.images[currentIndex]} 
          alt={`${project.title} - imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain drop-shadow-[0_0_40px_rgba(134,163,171,0.2)] anim-fade-in"
          key={currentIndex} 
        />
      </div>

      {/* Detalles del Lightbox */}
      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#eeede8] mb-4 drop-shadow-md">
          {project.title}
        </h3>
        
        <p className="text-[#cbcac8] font-medium text-sm md:text-base leading-relaxed mb-6 px-4 md:px-12 max-w-3xl">
          {project.description}
        </p>

        <div className="flex justify-center gap-3 overflow-x-auto py-2 hide-scrollbar w-full max-w-xl">
          {project.images.map((img, idx) => (
            <button 
              key={idx} 
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              className={`relative h-14 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === currentIndex ? 'border-[#86a3ab] scale-110 shadow-[0_0_15px_rgba(134,163,171,0.5)]' : 'border-transparent opacity-50 hover:opacity-100'}`}
            >
              <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// === COMPONENTE 2: TARJETA DE PROYECTO (Efecto Expansión Acordeón) ===
const ProjectCard = ({ project, index, openLightbox }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-carrusel suave (Crossfade)
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const intervalTime = 3000 + (index * 600); 
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }, intervalTime);
    return () => clearInterval(timer);
  }, [project.images, index]);

  return (
    <div 
      onClick={() => openLightbox(project)}
      className="group cursor-pointer flex flex-col bg-[#1f272c]/40 backdrop-blur-xl border border-[#86a3ab]/30 rounded-[2rem] p-4 hover:border-[#86a3ab] hover:bg-[#1f272c]/70 transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(134,163,171,0.2)] anim-fade-in"
    >
      {/* Contenedor de la Imagen: Nunca se tapa */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#121619] to-[#86a3ab]/20 border border-[#86a3ab]/10 flex items-center justify-center shadow-inner shrink-0">
        
        {project.images && project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <img 
              key={idx}
              src={img}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-contain p-4 drop-shadow-xl transition-all duration-1000 ease-in-out
                ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
            />
          ))
        ) : (
          <div className="text-[#86a3ab]/50 font-mono text-sm">Sin imágenes</div>
        )}

        {/* Indicador de Expandir en la esquina */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#121619]/60 backdrop-blur-md flex items-center justify-center text-[#86a3ab] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <i className="fa-solid fa-expand text-xs"></i>
        </div>
      </div>

      {/* Contenedor de Textos */}
      <div className="pt-5 px-2 flex flex-col flex-grow">
        
        {/* Cabecera (Siempre visible) */}
        <div>
          <h3 className="text-xl font-extrabold text-[#eeede8] mb-1 group-hover:text-[#efe5dc] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest">
            {project.category}
          </p>
        </div>

        {/* === EFECTO ACORDEÓN MAGICO === */}
        {/* Este grid-rows se expande de 0fr a 1fr revelando el contenido suavemente sin encimar */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
          <div className="overflow-hidden">
            
            <div className="pt-4 flex flex-col gap-5">
              <p className="text-[#cbcac8] font-light text-[13px] leading-relaxed">
                {project.description}
              </p>
              
              <div>
                <h4 className="text-[#86a3ab] text-[9px] font-bold uppercase tracking-widest mb-3 border-t border-[#86a3ab]/20 pt-3">
                  Stack Tecnológico Integrado:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#86a3ab]/10 border border-[#86a3ab]/40 text-[#efe5dc] text-[9px] font-bold uppercase tracking-widest shadow-inner group-hover:bg-[#86a3ab]/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#86a3ab]"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

// === COMPONENTE PRINCIPAL ===
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const generateImages = (folder, count, ext) => {
    return Array.from({ length: count }, (_, i) => `/projects/${folder}/${i + 1}.${ext}`);
  };

  // === PROYECTOS (Redacción de Alto Impacto Técnico) ===
  const projects = [
    {
      id: 1,
      title: "Axoscan",
      category: "Mobile & IA",
      images: generateImages("Axoscan", 17, "jpeg"),
      description: "El consumo irresponsable exige soluciones inmediatas. Axoscan evalúa la huella ecológica de productos comerciales mediante visión computacional, empoderando al usuario con alternativas sustentables y fomentando hábitos responsables a través de un santuario virtual de ajolotes gamificado.",
      tags: ["Flutter", "Python", "Firebase", "Gemini API", "Google API"],
    },
    {
      id: 2,
      title: "DiagVision Bot",
      category: "IA & Data Science",
      images: generateImages("chatboot", 4, "jpeg"),
      description: "Los diagnósticos médicos requieren inmediatez y precisión. Esta herramienta despliega un pipeline automatizado en Telegram que conecta a los usuarios con modelos de aprendizaje profundo, capacitados para clasificar variantes de cáncer de piel y detectar tumores cerebrales al instante.",
      tags: ["n8n", "Telegram API", "Flask", "Python", "Deep Learning"],
    },
    {
      id: 3,
      title: "NovaDocs",
      category: "Cloud & DevOps",
      images: generateImages("Ollama", 4, "png"),
      description: "La privacidad corporativa no es negociable. Esta arquitectura distribuida ejecuta modelos LLM (Phi-3) en clústeres locales, resumiendo y clasificando documentos confidenciales de forma asíncrona mediante Celery y Redis para garantizar cero fugas de información.",
      tags: ["Ollama (Phi-3)", "Celery Workers", "Redis", "Python", "Docker"],
    },
    {
      id: 4,
      title: "Wise Agent",
      category: "Mobile & IA",
      images: generateImages("Wise_Agend", 19, "jpeg"),
      description: "La dispersión de herramientas fragmenta la productividad. Wise Agent centraliza finanzas, seguimiento de hábitos y notas dinámicas en un ecosistema integral, cuyo núcleo de IA procesa el comportamiento del usuario para generar recomendaciones y recordatorios proactivos.",
      tags: ["Flutter", "Python", "Firebase", "Gemini API"],
    },
    {
      id: 5,
      title: "Smartcook",
      category: "Mobile & IA",
      images: generateImages("smartcook", 11, "jpeg"),
      description: "El desperdicio orgánico doméstico es un problema logístico y económico. Smartcook analiza el inventario exacto de la alacena y orquesta agentes de IA para generar recetas viables y creativas, optimizando recursos y minimizando la merma alimenticia.",
      tags: ["Flutter", "Python", "Firebase", "Gemini API"],
    },
    {
      id: 6,
      title: "Blue Tech Centinel",
      category: "Ciberseguridad",
      images: generateImages("controlar_computadoras", 33, "png"),
      description: "Administrar infraestructuras informáticas exige control absoluto. Esta suite establece una telemetría Cliente-Servidor para auditar PCs remotamente, bloquear periféricos físicos, restringir accesos a red e inyectar transferencia de archivos cifrados de manera centralizada.",
      tags: ["Python", "Sockets", "JavaScript", "HTML", "Tailwind"],
    },
    {
      id: 7,
      title: "Cancer Detection AI",
      category: "IA & Data Science",
      images: generateImages("cancer", 3, "jpeg"),
      description: "El ojo humano requiere herramientas de apoyo en el diagnóstico temprano. Este modelo matemático de visión computacional analiza tejido celular fotográfico para clasificar patologías y detectar marcadores de múltiples variantes de cáncer de piel con precisión estadística.",
      tags: ["Python", "Flask", "HTML", "Tailwind CSS"],
    },
    {
      id: 8,
      title: "Vansus Hack Lab",
      category: "Ciberseguridad",
      images: generateImages("vansus_hack", 4, "png"),
      description: "La teoría es insuficiente para mitigar ciberataques. Este entorno controlado simula un arsenal de penetración integrando sniffing de red, escaneo de puertos y keylogging, diseñado para capacitar a profesionales en la detección y contención de vulnerabilidades.",
      tags: ["Python", "JavaScript", "HTML", "Tailwind CSS"],
    },
    {
      id: 9,
      title: "Tienda Refaccionaria",
      category: "Full-Stack Web",
      images: generateImages("refaccionaria", 26, "png"),
      description: "Los inventarios desfasados paralizan el comercio. Esta plataforma B2B/B2C sincroniza el stock físico con el entorno digital en tiempo real, gestionando pagos seguros, logística de entrega y control de promociones desde un sólido panel administrativo contenerizado.",
      tags: ["PHP", "JavaScript", "HTML", "CSS", "Tailwind", "Stripe", "Docker", "MySQL"],
    },
    {
      id: 10,
      title: "Smart Home",
      category: "Hardware & IoT",
      images: generateImages("smart_home", 7, "jpeg"),
      description: "Los hogares modernos exigen reactividad ambiental. Este ecosistema IoT conecta una red de sensores a microcontroladores para gobernar el clima y la iluminación, ejecutando rutinas de emergencia como el sellado automático de ventanas ante precipitaciones o fugas de gas.",
      tags: ["React", "Tailwind", "C", "Arduino Microcontrollers"],
    },
    {
      id: 11,
      title: "Zapatería POS",
      category: "Full-Stack Web",
      images: generateImages("zapateria", 22, "png"),
      description: "Operar a ciegas en retail inhibe la trazabilidad. Este ERP ligero digitaliza el flujo de ventas, automatizando alertas de inventario, calculando mermas operativas y emitiendo facturación fiscal instantánea directamente al WhatsApp del consumidor.",
      tags: ["Docker", "JavaScript", "HTML", "CSS", "MySQL"],
    },
    {
      id: 12,
      title: "SmartWay",
      category: "IA & Data Science",
      images: generateImages("dijstra", 3, "jpeg"),
      description: "La fricción vial y los peajes merman la rentabilidad logística. Este motor dinámico procesa algoritmos de grafos (Dijkstra) para calcular la ruta matemáticamente óptima, equilibrando en tiempo real el consumo de combustible, costos de peaje y densidad del tráfico.",
      tags: ["Python", "Flask", "HTML", "CSS", "Dijkstra Algorithm"],
    },
    {
      id: 13,
      title: "NovaFilm",
      category: "Cloud & DevOps",
      images: generateImages("Novafilm", 4, "jpeg"),
      description: "Las caídas de servidor durante estrenos degradan la reputación. Construida sobre una arquitectura de microservicios, esta plataforma garantiza streaming de trailers y ticketing ininterrumpido mediante balanceo de carga en Nginx y bases de datos replicadas.",
      tags: ["Docker", "Python", "Nginx", "MySQL", "Microservices"],
    },
    {
      id: 14,
      title: "Reconocimiento Emocional",
      category: "IA & Data Science",
      images: generateImages("sentimientos", 2, "jpeg"),
      description: "Las interfaces tradicionales carecen de empatía contextual. Este motor de IA procesa flujos de video para decodificar micro-expresiones faciales complejas, mapeando e interpretando algorítmicamente el estado anímico del usuario en tiempo real.",
      tags: ["Flask", "Python", "HTML", "CSS", "Computer Vision"],
    },
    {
      id: 15,
      title: "Streaming Pi",
      category: "Hardware & IoT",
      images: generateImages("streaming", 10, "png"),
      description: "El broadcasting profesional suele ser inaccesible para eventos a medida. Esta solución transforma una Raspberry Pi en un poderoso nodo Edge, capturando señales en vivo para inyectar de manera programática cintillas dinámicas y campañas publicitarias.",
      tags: ["Raspberry Pi", "Python", "JavaScript", "HTML", "Tailwind"],
    },
    {
      id: 16,
      title: "Eth-Transfer P2P",
      category: "Redes & Sistemas",
      images: generateImages("compartir_archivos", 6, "jpg"),
      description: "El enrutamiento por nubes de terceros expone datos sensibles. Este protocolo peer-to-peer explota la capa física Ethernet para transferencias de velocidad gigabit, facilitando la migración masiva de archivos en infraestructuras estrictamente aisladas.",
      tags: ["JavaScript", "HTML", "CSS", "Networking Protocols"],
    },
    {
      id: 17,
      title: "Checador Biométrico",
      category: "Hardware & IoT",
      images: ["/projects/checador_huella_digital/1.png"],
      description: "Las credenciales físicas presentan vulnerabilidades por clonación. Este sistema de acceso industrial incorpora sensores dactilares y microcontroladores para generar bitácoras laborales infalsificables, consolidando la información en bases de datos seguras.",
      tags: ["Visual Studio", "C#", "XML", "CSS", "JavaScript", "Arduino"],
    },
    {
      id: 18,
      title: "Forrajera POS",
      category: "Full-Stack Web",
      images: generateImages("forrajera", 11, "png"),
      description: "Los sistemas genéricos no escalan en el sector agrícola. Este punto de venta a la medida estandariza la administración de suministros a granel, agilizando transacciones asimétricas, control de almacén y la proyección de reportes financieros operativos.",
      tags: ["PHP", "HTML", "CSS", "MySQL"],
    },
    {
      id: 19,
      title: "Infovan News",
      category: "Mobile & IA",
      images: ["/projects/noticias/1.jpeg"],
      description: "El ruido mediático actual desorienta al lector. Este agregador consume APIs de periodismo global aplicando filtrado semántico para entregar resúmenes concisos, cronologías de eventos y enlaces directos a fuentes verificadas en una experiencia móvil fluida.",
      tags: ["Android Studio", "XML", "JavaScript", "CSS", "REST APIs"],
    },
    {
      id: 20,
      title: "Math Filters AI",
      category: "IA & Data Science",
      images: ["/projects/filtros/1.jpeg"],
      description: "La manipulación gráfica profunda demanda independencia de librerías comerciales. Este motor procesa imágenes a nivel matricial, aplicando cálculos trigonométricos y núcleos de convolución desde cero para ejecutar filtros visuales y manipulación de señales complejas.",
      tags: ["Python", "Applied Mathematics", "HTML", "CSS"],
    }
  ];

  const filters = ["Todos", "Mobile & IA", "IA & Data Science", "Cloud & DevOps", "Ciberseguridad", "Full-Stack Web", "Hardware & IoT", "Redes & Sistemas"];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="proyectos" className="relative max-w-[1400px] mx-auto px-6 py-32 z-10">
      
      <div className="text-center mb-16 anim-up">
        <h2 className="text-[#86a3ab] text-sm font-bold tracking-widest uppercase mb-3">Portfolio de Ingeniería</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight">Proyectos Destacados</h3>
        <div className="w-12 h-1 bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(169,183,186,0.6)]"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        
        {/* COLUMNA IZQUIERDA: FILTROS */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-32 anim-up z-20">
          <ul className="flex flex-row lg:flex-col gap-2 lg:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar border-b lg:border-b-0 lg:border-l border-[#86a3ab]/20">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`text-left px-6 py-3 w-full rounded-r-lg whitespace-nowrap transition-all duration-300 uppercase tracking-widest text-xs font-bold relative
                    ${activeFilter === filter 
                      ? 'text-[#efe5dc] bg-[#86a3ab]/20' 
                      : 'text-[#86a3ab] hover:text-[#a9b7ba] hover:bg-[#1f272c]/60'
                    }
                  `}
                >
                  {activeFilter === filter && (
                    <span className="absolute left-0 bottom-0 lg:bottom-auto lg:top-0 w-full lg:w-[3px] h-[3px] lg:h-full bg-gradient-to-b from-[#86a3ab] to-[#efe5dc] shadow-[0_0_10px_rgba(239,229,220,0.5)] -ml-[1px]"></span>
                  )}
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA DERECHA: GRID */}
        <div className="w-full lg:w-3/4 z-10">
          {/* Aplicamos alignItems a flex-start para que el acordeón empuje cada carta sin desconfigurar la cuadrícula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-start">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                openLightbox={setSelectedProject} 
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#86a3ab]">
              <i className="fa-solid fa-folder-open text-4xl mb-4 opacity-50"></i>
              <p>No hay proyectos en esta categoría todavía.</p>
            </div>
          )}
        </div>

      </div>

      {selectedProject && (
        <Lightbox 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};