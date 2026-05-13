import { useEffect, useRef, useState } from 'react';

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
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
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
      const numParticles = Math.min(Math.floor(window.innerWidth / 20), 50); 
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
    setTimeout(resize, 100); 
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none" />;
};

// === COMPONENTE PRINCIPAL ===
export const Contact = () => {
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('loading');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vanehdzmtz04@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); 
        // El pop-up se quedará abierto hasta que el usuario lo cierre manualmente
        // Ocultamos el status de éxito del botón después de 5s para que vuelva a su estado normal
        setTimeout(() => {
          if (status !== 'success_modal_open') { // Evitamos cerrar el modal si sigue viéndolo
             // No hacemos nada aquí para que el modal decida cuándo cerrarse
          }
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative w-full overflow-hidden px-6 py-32 z-10 min-h-screen flex flex-col justify-center">
      
      {/* FONDO DE CONSTELACIONES */}
      <ParticlesNetwork />

      {/* EFECTOS DE LUZ DE FONDO (Aurora) */}
      <div className="absolute top-[20%] -left-20 w-[30rem] h-[30rem] bg-[#86a3ab] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none z-[1]"></div>
      <div className="absolute bottom-[-10%] right-0 w-[25rem] h-[25rem] bg-[#efe5dc] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none z-[1]"></div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* === 1. ENCABEZADO MEJORADO === */}
        <div className="text-center mb-16 anim-up">
          <h2 className="text-[#86a3ab] text-sm font-bold tracking-widest uppercase mb-3"><i className="fas fa-terminal mr-2"></i> Inicia una conversación</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#eeede8] tracking-tight">Diseñemos el futuro juntos</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] mx-auto mt-6 mb-6 rounded-full shadow-[0_0_15px_rgba(169,183,186,0.6)]"></div>
          <p className="text-[#cbcac8] max-w-3xl mx-auto text-lg font-light leading-relaxed">
            ¿Buscando transformar un problema complejo en una solución digital escalable? Ya sea para optimizar tu infraestructura, integrar IA en tus procesos, o sumar visión arquitectónica a tu equipo: <span className="text-[#efe5dc] font-medium">hablemos. El mejor código es el que impulsa tu negocio.</span>
          </p>
        </div>

        {/* === 2. TARJETAS DE INFORMACIÓN === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 anim-up delay-1">
          {[
            { title: "Email Principal", value: "vanehdzmtz04@gmail.com", icon: "fa-regular fa-envelope" },
            { title: "Teléfono Directo", value: "+52 55 3501 7315", icon: "fa-solid fa-phone" },
            { title: "Ubicación", value: "Jilotepec, Estado de México", icon: "fa-solid fa-location-dot" }
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center bg-[#1f272c]/40 backdrop-blur-xl border border-[#86a3ab]/20 p-8 rounded-3xl hover:-translate-y-2 hover:border-[#efe5dc]/40 transition-all duration-300 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="w-14 h-14 rounded-full bg-[#121619] border border-[#a9b7ba]/30 flex items-center justify-center group-hover:border-[#efe5dc]/50 transition-colors shadow-inner mb-4 relative z-10">
                <i className={`${item.icon} text-xl text-[#86a3ab] group-hover:text-[#efe5dc] transition-colors`}></i>
              </div>
              <h4 className="text-[#86a3ab] text-[11px] font-bold uppercase tracking-widest mb-2 relative z-10">{item.title}</h4>
              <p className="text-[#eeede8] font-medium relative z-10">{item.value}</p>
            </div>
          ))}
        </div>

        {/* === 3. EL FORMULARIO PREMIUM CON ICONOS INTERNOS === */}
        <div className="max-w-4xl mx-auto anim-up delay-2">
          <div className="bg-[#1f272c]/60 backdrop-blur-3xl border border-[#86a3ab]/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#efe5dc] to-transparent opacity-30"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <input type="hidden" name="_subject" value="¡Nuevo mensaje desde tu Portafolio Profesional!" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nombre */}
                <div className="relative group flex items-center bg-[#121619]/60 border border-[#86a3ab]/30 rounded-xl px-5 focus-within:border-[#efe5dc] focus-within:bg-[#121619]/80 transition-all shadow-inner hover:border-[#86a3ab]/60">
                  <i className="fa-regular fa-user text-xl text-[#86a3ab] group-focus-within:text-[#efe5dc] transition-colors mr-4"></i>
                  <div className="relative w-full py-2">
                    <input 
                      type="text" name="nombre" id="nombre" required 
                      className="peer w-full bg-transparent text-[#eeede8] focus:outline-none pt-5 pb-1 placeholder-transparent"
                      placeholder="Nombre Completo"
                    />
                    <label htmlFor="nombre" className="absolute left-0 cursor-text text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#cbcac8]/50 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-[#efe5dc] top-1">
                      Nombre Completo
                    </label>
                  </div>
                </div>

                {/* Input Email */}
                <div className="relative group flex items-center bg-[#121619]/60 border border-[#86a3ab]/30 rounded-xl px-5 focus-within:border-[#efe5dc] focus-within:bg-[#121619]/80 transition-all shadow-inner hover:border-[#86a3ab]/60">
                  <i className="fa-regular fa-envelope text-xl text-[#86a3ab] group-focus-within:text-[#efe5dc] transition-colors mr-4"></i>
                  <div className="relative w-full py-2">
                    <input 
                      type="email" name="email" id="email" required 
                      className="peer w-full bg-transparent text-[#eeede8] focus:outline-none pt-5 pb-1 placeholder-transparent"
                      placeholder="Correo Electrónico"
                    />
                    <label htmlFor="email" className="absolute left-0 cursor-text text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#cbcac8]/50 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-[#efe5dc] top-1">
                      Correo Electrónico
                    </label>
                  </div>
                </div>
              </div>

              {/* Input Asunto */}
              <div className="relative group flex items-center bg-[#121619]/60 border border-[#86a3ab]/30 rounded-xl px-5 focus-within:border-[#efe5dc] focus-within:bg-[#121619]/80 transition-all shadow-inner hover:border-[#86a3ab]/60">
                <i className="fa-solid fa-briefcase text-lg text-[#86a3ab] group-focus-within:text-[#efe5dc] transition-colors mr-4"></i>
                <div className="relative w-full py-2">
                  <input 
                    type="text" name="asunto" id="asunto" required 
                    className="peer w-full bg-transparent text-[#eeede8] focus:outline-none pt-5 pb-1 placeholder-transparent"
                    placeholder="Asunto / Empresa"
                  />
                  <label htmlFor="asunto" className="absolute left-0 cursor-text text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#cbcac8]/50 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-[#efe5dc] top-1">
                    Asunto / Propuesta
                  </label>
                </div>
              </div>

              {/* Textarea Mensaje */}
              <div className="relative group flex items-start bg-[#121619]/60 border border-[#86a3ab]/30 rounded-xl px-5 pt-4 pb-2 focus-within:border-[#efe5dc] focus-within:bg-[#121619]/80 transition-all shadow-inner hover:border-[#86a3ab]/60">
                <i className="fa-regular fa-comment-dots text-xl text-[#86a3ab] group-focus-within:text-[#efe5dc] transition-colors mr-4 mt-2"></i>
                <div className="relative w-full">
                  <textarea 
                    name="mensaje" id="mensaje" required rows="4" 
                    className="peer w-full bg-transparent text-[#eeede8] focus:outline-none pt-5 pb-2 placeholder-transparent resize-none"
                    placeholder="Detalles del Mensaje"
                  ></textarea>
                  <label htmlFor="mensaje" className="absolute left-0 cursor-text text-[#86a3ab] text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#cbcac8]/50 peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-focus:-top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-[#efe5dc] -top-1">
                    Detalles de tu proyecto
                  </label>
                </div>
              </div>

              {/* Botón dinámico */}
              <div className="flex justify-end pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full md:w-auto px-10 py-4 rounded-xl font-extrabold tracking-wide uppercase text-sm transition-all duration-300 flex items-center justify-center gap-3
                    ${status === 'loading' 
                      ? 'bg-[#1f272c] border border-[#86a3ab] text-[#86a3ab] opacity-80 cursor-wait' 
                      : 'bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] text-[#1f272c] hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(134,163,171,0.3)]'
                    }`}
                >
                  {status === 'loading' ? (
                    <><i className="fa-solid fa-circle-notch fa-spin text-lg"></i> Procesando...</>
                  ) : (
                    <>Enviar Mensaje <i className="fa-solid fa-paper-plane"></i></>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* === 4. REDES SOCIALES (CIERRE INFERIOR) === */}
        <div className="mt-20 flex flex-col items-center justify-center anim-up delay-3 relative z-10">
          <p className="text-[#a9b7ba] text-xs font-bold uppercase tracking-widest mb-6"><i className="fas fa-hashtag mr-2 text-[#86a3ab]"></i> Conecta Conmigo</p>
          <div className="flex gap-6">
            {[
              { icon: "fab fa-github", url: "https://github.com/VaneHdz04", tooltip: "GitHub" },
              { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1P29F1QEUk/", tooltip: "Facebook" },
              { icon: "fab fa-instagram", url: "https://www.instagram.com/vanesa23791?igsh=YWZyd2VrcnNuNTVz", tooltip: "Instagram" }
            ].map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" title={social.tooltip}
                 className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1f272c]/80 backdrop-blur-md border border-[#a9b7ba]/30 text-[#eeede8] hover:bg-[#86a3ab] hover:border-[#efe5dc] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(134,163,171,0.5)] transition-all duration-300 shadow-xl group">
                <i className={`${social.icon} text-xl group-hover:scale-110 transition-transform`}></i>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* === MODAL POP-UP DE ÉXITO === */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Fondo oscuro desenfocado */}
          <div 
            className="absolute inset-0 bg-[#0b0d14]/80 backdrop-blur-md transition-opacity"
            onClick={() => setStatus('')}
          ></div>
          
          {/* Tarjeta del Pop-up */}
          <div className="relative w-full max-w-md bg-[#1f272c]/90 backdrop-blur-2xl border border-[#efe5dc]/30 rounded-[2.5rem] p-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform transition-all duration-500 scale-100 opacity-100">
            
            {/* Botón de cierre en la esquina */}
            <button 
              onClick={() => setStatus('')}
              className="absolute top-6 right-6 text-[#86a3ab] hover:text-[#efe5dc] transition-colors"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>

            {/* Icono animado de éxito */}
            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[#86a3ab]/20 to-[#efe5dc]/20 border border-[#efe5dc]/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,229,220,0.2)]">
              <i className="fa-solid fa-paper-plane text-4xl text-[#efe5dc] transform -translate-x-1 translate-y-1"></i>
            </div>
            
            <h3 className="text-3xl font-extrabold text-[#eeede8] tracking-tight mb-4">¡Mensaje Enviado!</h3>
            
            <p className="text-[#cbcac8] font-light leading-relaxed mb-8 text-sm">
              Agradezco sinceramente tu interés. He recibido tu mensaje de forma exitosa y me aseguraré de darle lectura para ponerme en contacto contigo a la brevedad posible.
            </p>

            {/* Botón de Acción */}
            <button 
              onClick={() => setStatus('')}
              className="w-full bg-gradient-to-r from-[#86a3ab] to-[#efe5dc] text-[#1f272c] font-bold py-4 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(134,163,171,0.3)] uppercase tracking-widest text-sm"
            >
              Excelente, Gracias
            </button>
            
          </div>
        </div>
      )}

    </section>
  );
};