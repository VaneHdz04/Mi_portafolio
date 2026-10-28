import { useEffect, useState } from 'react';
import AdobeLogo from '../assets/adobe.svg';
import ExpressLogo from '../assets/express.svg';

// === COMPONENTE INTERNO: TARJETA DE HABILIDAD (DASHBOARD STYLE) ===
const SkillCard = ({ name, icon, imgUrl, percentage, badge, highlight }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Pequeño retraso para que la barra se anime al renderizar
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className={`group relative backdrop-blur-md p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300
      ${highlight 
        ? 'bg-[#1f272c]/70 border border-[#86a3ab]/50 shadow-[0_0_20px_rgba(134,163,171,0.2)] hover:border-[#efe5dc]/60 hover:shadow-[0_0_25px_rgba(134,163,171,0.35)]' 
        : 'bg-[#1f272c]/40 border border-[#86a3ab]/20 hover:border-[#a9b7ba]/50 hover:bg-[#1f272c]/60'
      }
    `}>
      {badge && (
        <span className="absolute top-3 right-4 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#86a3ab]/25 to-[#efe5dc]/20 text-[#efe5dc] border border-[#86a3ab]/40">
          {badge}
        </span>
      )}
      
      {/* Icono / Logo y Nombre */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-[#121619] border flex items-center justify-center transition-colors shadow-inner overflow-hidden flex-shrink-0
          ${highlight ? 'border-[#86a3ab]/50 group-hover:border-[#efe5dc]/70' : 'border-[#a9b7ba]/20 group-hover:border-[#efe5dc]/50'}
        `}>
          {imgUrl ? (
            <img src={imgUrl} alt={name} className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <i className={`${icon} text-2xl transition-colors ${highlight ? 'text-[#efe5dc]' : 'text-[#86a3ab] group-hover:text-[#efe5dc]'}`}></i>
          )}
        </div>
        <h4 className="text-[#eeede8] font-bold text-base leading-tight min-w-0 flex-1">{name}</h4>
      </div>
      
      {/* Textos de la barra */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-[#cbcac8]/60 text-[10px] font-bold uppercase tracking-widest">Dominio</span>
        <span className="text-[#efe5dc] font-mono text-xs font-bold">{percentage}%</span>
      </div>
      
      {/* Barra de Progreso Animada */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${highlight ? 'bg-gradient-to-r from-[#86a3ab] via-[#a9b7ba] to-[#efe5dc]' : 'bg-gradient-to-r from-[#86a3ab] to-[#efe5dc]'}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>

    </div>
  );
};

// === COMPONENTE PRINCIPAL ===
export const Skills = () => {

  const skillCategories = [
    {
      title: "Ecosistema AEM / CMS",
      subtitle: "Especialidad en gestión de contenidos digitales",
      skills: [
        { name: "Adobe Experience Manager (AEM)", percentage: 95, imgUrl: AdobeLogo, badge: "Core CMS", highlight: true },
        { name: "AEM Sites & Templates", percentage: 90, icon: "fas fa-sitemap", badge: "Sites", highlight: true },
        { name: "AEM Assets (DAM)", percentage: 90, icon: "fas fa-photo-film", badge: "Assets", highlight: true },
        { name: "Apache Sling & Models", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg", highlight: true },
        { name: "HTL / Sightly", percentage: 90, icon: "fas fa-code", highlight: true },
        { name: "Arquitectura OSGi", percentage: 85, icon: "fas fa-cubes", highlight: true },
        { name: "JCR & CRXDE", percentage: 85, icon: "fas fa-folder-tree", highlight: true },
        { name: "Configuration Browser", percentage: 85, icon: "fas fa-sliders", highlight: true },
      ]
    },
    {
      title: "Backend Java & Spring Boot",
      subtitle: "Desarrollo empresarial, microservicios y APIs",
      skills: [
        { name: "Java 17 & POO", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", highlight: true },
        { name: "Spring Boot 3", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", highlight: true },
        { name: "Microservicios", percentage: 90, icon: "fas fa-project-diagram", highlight: true },
        { name: "APIs RESTful", percentage: 95, icon: "fas fa-network-wired" },
        { name: "Spring Data JPA & Hibernate", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
        { name: "Spring MVC / Web", percentage: 90, icon: "fas fa-layer-group" },
        { name: "JUnit (Testing)", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
        { name: "Spring Security", percentage: 85, icon: "fas fa-lock" },
      ]
    },
    {
      title: "Backend JavaScript",
      subtitle: "Servicios web y autenticación",
      skills: [
        { name: "Node.js", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", percentage: 85, imgUrl: ExpressLogo },
        { name: "JWT & Middlewares", percentage: 90, icon: "fas fa-key" },
      ]
    },
    {
      title: "Frontend",
      subtitle: "Interfaces dinámicas y estilos",
      skills: [
        { name: "React", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "JavaScript (ES6+)", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5 / CSS3", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "Figma (UI/UX)", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      ]
    },
    {
      title: "Bases de Datos & Persistencia",
      subtitle: "Relacionales y NoSQL",
      skills: [
        { name: "PostgreSQL", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "SQL Server", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
        { name: "MongoDB", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      title: "DevOps & Herramientas",
      subtitle: "Contenedores, versionado, pruebas y documentación",
      skills: [
        { name: "Docker", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Git", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", percentage: 90, icon: "fab fa-github" },
        { name: "Insomnia", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" },
        { name: "Postman", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Swagger / OpenAPI", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
        { name: "Apache Maven", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
        { name: "AWS Cloud", percentage: 80, icon: "fab fa-aws" },
      ]
    }
  ];

  return (
    <section id="habilidades" className="relative max-w-[1400px] mx-auto px-6 py-32 z-10">
      
      {/* === ENCABEZADO === */}
      <div className="text-center mb-20 anim-up">
        <h2 className="text-[#86a3ab] text-sm font-bold tracking-widest uppercase mb-3">Stack Tecnológico</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight">Habilidades Técnicas</h3>
        <div className="w-12 h-1 bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(169,183,186,0.6)]"></div>
      </div>

      {/* === RENDERIZADO DE CATEGORÍAS === */}
      <div className="space-y-16">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="anim-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            
            {/* Título de la Categoría con línea divisoria y subtítulo */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
              <div className="flex items-center gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#eeede8] whitespace-nowrap">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <span className="hidden sm:inline-block text-xs font-mono text-[#a9b7ba]/70 border-l border-[#86a3ab]/30 pl-3">
                    {category.subtitle}
                  </span>
                )}
              </div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#86a3ab]/40 to-transparent ml-4 hidden md:block"></div>
            </div>

            {/* Cuadrícula de Tarjetas (4 columnas en escritorio) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, i) => (
                <SkillCard 
                  key={i} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  icon={skill.icon} 
                  imgUrl={skill.imgUrl}
                  badge={skill.badge}
                  highlight={skill.highlight}
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
};
