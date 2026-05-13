import { useEffect, useState } from 'react';

// === COMPONENTE INTERNO: TARJETA DE HABILIDAD (DASHBOARD STYLE) ===
const SkillCard = ({ name, icon, imgUrl, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Pequeño retraso para que la barra se anime al renderizar
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="group relative bg-[#1f272c]/40 backdrop-blur-md border border-[#86a3ab]/20 p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:border-[#a9b7ba]/50 transition-all duration-300">
      
      {/* Icono / Logo y Nombre */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#121619] border border-[#a9b7ba]/20 flex items-center justify-center group-hover:border-[#efe5dc]/50 transition-colors shadow-inner overflow-hidden">
          {/* Lógica: Si hay una URL de imagen, mostramos la imagen. Si no, mostramos el Icono */}
          {imgUrl ? (
            <img src={imgUrl} alt={name} className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <i className={`${icon} text-2xl text-[#86a3ab] group-hover:text-[#efe5dc] transition-colors`}></i>
          )}
        </div>
        <h4 className="text-[#eeede8] font-bold text-base leading-tight">{name}</h4>
      </div>
      
      {/* Textos de la barra */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-[#cbcac8]/60 text-[10px] font-bold uppercase tracking-widest">Dominio</span>
        <span className="text-[#efe5dc] font-mono text-xs font-bold">{percentage}%</span>
      </div>
      
      {/* Barra de Progreso Animada */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>

    </div>
  );
};

// === COMPONENTE PRINCIPAL ===
export const Skills = () => {

  // Habilidades con enlaces (imgUrl) a SVGs originales de repositorios oficiales (Devicon)
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "Python", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "SQL", percentage: 90, icon: "fas fa-database" }, // Concepto abstracto, se queda en icono
        { name: "PHP", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "Dart", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
        { name: "C", percentage: 75, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5 / CSS3", percentage: 95, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "Figma (UI/UX)", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Flask (Python)", percentage: 95, imgUrl: "https://www.manualweb.net/img/logos/flask.png" }, // Flask se ve mejor como icono blanco/gris en fondos oscuros
        { name: "APIs RESTful", percentage: 95, icon: "fas fa-network-wired" },
        { name: "Microservicios", percentage: 85, icon: "fas fa-project-diagram" },
        { name: "Spring Boot", percentage: 80, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MySQL", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "Firebase", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "MongoDB", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Nginx", percentage: 85, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
        { name: "AWS Cloud", percentage: 80, icon: "fab fa-aws" }, // AWS se ve increíble como icono monocromo
        { name: "Proxmox", percentage: 80, imgUrl: "https://camo.githubusercontent.com/deb848279f14aca7545274d26d2c8b785fd6232d6864243f630457c7f43103f9/68747470733a2f2f7777772e70726f786d6f782e636f6d2f696d616765732f70726f786d6f782f50726f786d6f785f73796d626f6c5f7374616e646172645f6865782e706e67" },
        { name: "Git / GitHub", percentage: 85, icon: "fab fa-github" },
      ]
    },
    {
      title: "IA & Mobile",
      skills: [
        { name: "Flutter", percentage: 90, imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
        { name: "Gemini API", percentage: 95, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" }, // Logo original de Gemini
        { name: "Ollama (LLMs Locales)", percentage: 90, imgUrl: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/ollama.png" },
        { name: "N8N Automatización", percentage: 85, imgUrl: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png" },
        { name: "Ciberseguridad", percentage: 80, icon: "fas fa-shield-halved" },
      ]
    }
  ];

  return (
    <section id="habilidades" className="relative max-w-[1400px] mx-auto px-6 py-32 z-10">
      
      {/* === ENCABEZADO === */}
      <div className="text-center mb-20 anim-up">
        <h2 className="text-[#86a3ab] text-sm font-bold tracking-widest uppercase mb-3">Stack Tecnológico</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight">Mis Habilidades</h3>
        <div className="w-12 h-1 bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(169,183,186,0.6)]"></div>
      </div>

      {/* === RENDERIZADO DE CATEGORÍAS === */}
      <div className="space-y-16">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="anim-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            
            {/* Título de la Categoría con línea divisoria */}
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#eeede8] whitespace-nowrap">
                {category.title}
              </h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#86a3ab]/40 to-transparent"></div>
            </div>

            {/* Cuadrícula de Tarjetas (4 columnas en escritorio) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, i) => (
                <SkillCard 
                  key={i} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  icon={skill.icon} 
                  imgUrl={skill.imgUrl} // Pasamos el imgUrl a la tarjeta
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
};