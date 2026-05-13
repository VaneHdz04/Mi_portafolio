import { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import HeroImage from '../assets/vanesa.png';

// === COMPONENTE DE PARTÍCULAS (RED DE CONSTELACIÓN) ===
const ParticlesNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const colors = ['#86a3ab', '#a9b7ba', '#efe5dc'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2; 
        this.vy = (Math.random() - 0.5) * 1.2; 
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        this.x += this.vx;
        this.y += this.vy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor(window.innerWidth / 15), 90); 
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color; 
            ctx.globalAlpha = 1 - (distance / 150); 
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-60 pointer-events-none" />;
};


// === COMPONENTE PRINCIPAL HERO ===
export const Hero = () => {
  const words = ["Ingeniera de Software", "Dev Full-Stack", "Especialista en IA", "Desarrolladora Móvil", "Desarrolladora Web"];
  const typewrittenText = useTypewriter(words);

  return (
    <main id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 px-4 lg:px-8">
      
      {/* 1. ANIMACIÓN DE PARTÍCULAS (Malla Constelación en el fondo absoluto) */}
      <ParticlesNetwork />

      {/* 2. EFECTOS AURORA MULTICOLOR */}
      <div className="absolute top-[0%] -left-10 w-[30rem] h-[30rem] bg-[#86a3ab] rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob pointer-events-none z-[1]"></div>
      <div className="absolute bottom-[-10%] right-10 w-[30rem] h-[30rem] bg-[#a9b7ba] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000 pointer-events-none z-[1]"></div>
      <div className="absolute top-[20%] left-[30%] w-[25rem] h-[25rem] bg-[#efe5dc] rounded-full mix-blend-screen filter blur-[130px] opacity-10 animate-blob animation-delay-4000 pointer-events-none z-[1]"></div>

      {/* ========================================================= */}
      {/* EL GRAN RECUADRO DE CRISTAL EXTENDIDO */}
      {/* ========================================================= */}
      <div className="relative w-full max-w-[1300px] mx-auto rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center z-10 anim-fade-in">
        
        {/* --- SECCIÓN IZQUIERDA: Textos --- */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center z-20 relative pr-0 lg:pr-10">
          
          <h2 className="text-[#a9b7ba] text-xs md:text-sm font-bold tracking-widest uppercase mb-5 max-w-lg leading-relaxed">
            Para mí, el desarrollo es el arte de tomar el caos del mundo real y convertirlo en <span className="text-[#eeede8]">sistemas lógicos e intuitivos.</span>
          </h2>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#eeede8] mb-6 min-h-[120px] sm:min-h-0">
            Hola, soy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86a3ab] to-[#efe5dc]">{typewrittenText}</span>
            <span className="text-[#86a3ab] animate-pulse">|</span>
          </h1>

          <p className="text-[#cbcac8] leading-relaxed max-w-lg text-lg mb-10 font-medium border-l-4 border-[#86a3ab] pl-5">
            Desarrolladora Full-Stack enfocada en la automatización de procesos y arquitecturas modernas. Combino Inteligencia Artificial, pensamiento analítico y desarrollo multiplataforma para crear soluciones que redefinen la eficiencia.
          </p>
          
          {/* BOTÓN CON EFECTO SWEEP */}
          <div className="flex items-center gap-6">
            <a 
              href="https://drive.google.com/uc?export=download&id=1XBsv_AX5TlFmaVWOkii3e-5PXUp7UQow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-sweep group relative flex items-center gap-4 px-10 py-5 font-bold text-[#1f272c] bg-gradient-to-r from-[#a9b7ba] to-[#eeede8] transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(134,163,171,0.3)] border border-[#eeede8]"
              style={{ borderRadius: '2.5rem 10px 2.5rem 10px' }} 
            >
              <i className="fas fa-file-pdf text-2xl group-hover:-rotate-12 transition-transform duration-300"></i>
              <span className="tracking-wider uppercase text-sm font-extrabold z-20">Descargar CV</span>
              <i className="fas fa-arrow-right opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20"></i>
            </a>
          </div>
        </div>

        {/* --- SECCIÓN DERECHA: TARJETAS DE CRISTAL 3D --- */}
        <div className="w-full lg:w-[45%] relative h-[500px] lg:h-[600px] flex justify-center z-30 perspective-[1200px] mt-16 lg:mt-0">
          
          {/* Foco de luz central detrás del gafete */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#86a3ab]/30 rounded-full blur-[80px] animate-glow pointer-events-none"></div>

          {/* CORDÓN */}
          <div className="absolute -top-16 lg:-top-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none">
            <div className="w-8 h-32 lg:h-40 lanyard-strap shadow-lg rounded-b-md relative">
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1f272c] border border-gray-500"></div>
            </div>
            <div className="w-4 h-6 metal-clip rounded-sm mt-1 shadow-md"></div>
            <div className="w-6 h-6 border-4 border-gray-400 rounded-full -mt-2 shadow-md"></div>
          </div>

          {/* CONTENEDOR INTERACTIVO (Las Tarjetas) */}
          <div className="absolute top-[4.5rem] lg:top-[5.5rem] flex justify-center w-full group animate-swing transition-transform duration-500 cursor-grab active:cursor-grabbing active:translate-y-12">
            
            {/* TARJETA TRASERA 2 (Ajustada para Imagen) */}
            <div className="absolute w-72 h-[400px] bg-[#75868d] rounded-2xl border border-[#a9b7ba]/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out transform rotate-[-4deg] translate-x-0 group-hover:rotate-[-25deg] group-hover:-translate-x-28 group-hover:translate-y-6 z-0 overflow-hidden">
              <img 
                src="../../src/assets/1.jpg" 
                alt="Proyecto 1" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* TARJETA TRASERA 1 (Ajustada para Imagen) */}
            <div className="absolute w-72 h-[400px] bg-[#86a3ab] rounded-2xl border border-[#efe5dc]/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out transform rotate-[4deg] translate-x-0 group-hover:rotate-[22deg] group-hover:translate-x-28 group-hover:translate-y-4 z-0 overflow-hidden">
              <img 
                src="../../src/assets/2.jpg" 
                alt="Proyecto 2" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* TARJETA PRINCIPAL (El Gafete) */}
            <div className="relative w-72 h-[420px] bg-[#eeede8] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-300 group-active:scale-[0.97] z-20 border border-white/40">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#1f272c] rounded-full z-20 shadow-inner border border-gray-600"></div>

              <div className="absolute top-0 left-0 w-full h-[65%] bg-gradient-to-b from-[#a9b7ba] to-[#75868d] flex items-end justify-center overflow-hidden">
                 <img 
                   src={HeroImage} 
                   alt="Vanesa Hernández" 
                   className="w-[90%] h-auto object-cover relative translate-y-6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                 />
              </div>

              <div className="absolute bottom-0 w-full h-[40%] bg-[#eeede8] rounded-tl-[3.5rem] shadow-[-10px_-10px_20px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-between z-20">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#1f272c] leading-none mb-1">Vanesa</h2>
                  <h2 className="text-2xl font-medium text-[#1f272c] leading-none">Hernández</h2>
                </div>
                <div className="flex justify-between items-end w-full border-t border-[#cbcac8] pt-3 mt-2">
                  <span className="text-[10px] font-bold text-[#75868d] tracking-wider uppercase">Full-Stack Eng.</span>
                  <span className="text-[10px] font-mono text-[#1f272c] bg-[#cbcac8]/40 px-2 py-1 rounded">ID VHM-04</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN EXTREMA DERECHA (REDES SOCIALES FLOTANDO AL BORDE) --- */}
        <div className="absolute right-0 translate-x-[40%] lg:translate-x-[50%] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 justify-center items-center z-50 anim-right delay-5">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#86a3ab]/70 mb-2"></div>
          
          {[
            { icon: "fas fa-envelope", url: "mailto:vanehdzmtz04@gmail.com", tooltip: "Email" },
            { icon: "fab fa-github", url: "https://github.com/VaneHdz04", tooltip: "GitHub" },
            { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1P29F1QEUk/", tooltip: "Facebook" },
            { icon: "fab fa-instagram", url: "https://www.instagram.com/vanesa23791?igsh=YWZyd2VrcnNuNTVz", tooltip: "Instagram" }
          ].map((social, idx) => (
            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" title={social.tooltip}
               className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-[#1f272c] border border-[#a9b7ba]/50 text-[#eeede8] hover:bg-[#86a3ab] hover:border-[#86a3ab] hover:scale-110 hover:shadow-[0_0_20px_rgba(134,163,171,0.6)] transition-all duration-300 shadow-lg">
              <i className={`${social.icon} text-xl`}></i>
            </a>
          ))}
          
          <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-[#86a3ab]/70 mt-2"></div>
        </div>

      </div>
    </main>
  );
};
