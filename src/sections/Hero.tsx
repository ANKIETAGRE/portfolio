import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const { name, titles, description, socials } = PERSONAL_INFO;
  const [typedText, setTypedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing Loop Effect
  useEffect(() => {
    let timer: any;
    const currentWord = titles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && typedText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIndex, titles]);

  // Floating Particles Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 800);
        this.y = Math.random() * (canvas?.height || 600);
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(0, 229, 255, 0.15)' : 'rgba(124, 58, 237, 0.15)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (canvas) {
          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 bg-bgDark">
      {/* Background Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating Blobs Backdrop */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col justify-center items-center text-center">
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary font-semibold text-xs tracking-widest px-4 py-2 rounded-full mb-8 font-poppins uppercase"
        >
          <span>Welcome to my digital space</span>
        </motion.div>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black font-syne text-slate-900 tracking-tight leading-none mb-6"
        >
          Hi, I'm <span className="text-primary">{name}</span>
        </motion.h1>

        {/* Dynamic Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-[40px] md:min-h-[48px] flex items-center justify-center mb-8 w-full px-2"
        >
          <span className="text-lg sm:text-2xl md:text-3xl font-bold font-inter text-slate-700 text-center leading-tight">
            I'm a{' '}
            <span 
              key={typedText}
              className="inline-block whitespace-nowrap text-primary font-extrabold pr-2"
            >
              {typedText}
            </span>
            <span className="inline-block w-[3px] h-[20px] sm:h-[26px] md:h-[32px] bg-primary ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-12 font-inter"
        >
          {description}
        </motion.p>

        {/* Buttons CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-bgDark rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          
          <a
            href={socials.email}
            className="px-8 py-3.5 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Social Icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex space-x-6 text-xl text-gray-400"
        >
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <FiGithub />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <FiLinkedin />
          </a>
          <a href={socials.email} className="hover:text-primary transition-colors">
            <FiMail />
          </a>
        </motion.div>

        {/* Bottom arrow scroll down link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          onClick={handleScrollDown}
          className="absolute bottom-8 text-gray-500 hover:text-white transition-colors"
        >
          <FiArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
}
