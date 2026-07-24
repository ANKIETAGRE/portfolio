import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const SECTIONS = [
  { id: 'home', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

export default function SideScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  // Sync scroll progress value for active states
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest);
  });

  const scaleYPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSectionIndex(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center justify-center select-none pointer-events-none">
      
      {/* Outline Active Section Number */}
      <div className="absolute right-12 flex items-center pr-4">
        <motion.span
          key={activeSectionIndex}
          initial={{ opacity: 0, x: -15, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 15, scale: 0.9 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="font-syne font-black text-6xl text-transparent [-webkit-text-stroke:1.5px_#a855f7] tracking-tighter"
        >
          {`0${activeSectionIndex + 1}`}
        </motion.span>
      </div>

      {/* Vertical Progress Bar */}
      <div className="w-[2px] h-[280px] bg-white/10 relative rounded-full">
        
        {/* Growing Progress Fill */}
        <motion.div
          style={{ height: scaleYPercent }}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent to-secondary origin-top w-full rounded-full"
        >
          {/* Glowing Scroll Head Dot */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-secondary border border-white/20 shadow-[0_0_12px_#a855f7] z-20" />
        </motion.div>

        {/* Section Circle Markers */}
        {SECTIONS.map((sec, idx) => {
          const targetProgress = idx / (SECTIONS.length - 1);
          // Light up marker when scroll has passed it, or it is active
          const isPassedOrActive = scrollValue >= targetProgress * 0.98 || activeSectionIndex === idx;
          const topPercent = (idx / (SECTIONS.length - 1)) * 100;

          return (
            <button
              key={sec.id}
              onClick={() => {
                document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full z-10 transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none"
              style={{
                top: `${topPercent}%`,
                backgroundColor: isPassedOrActive ? '#a855f7' : '#050816',
                border: `1.5px solid ${isPassedOrActive ? '#00e5ff' : 'rgba(255,255,255,0.2)'}`,
                boxShadow: isPassedOrActive ? '0 0 8px rgba(0, 229, 255, 0.6)' : 'none'
              }}
              title={`Scroll to ${sec.label}`}
            />
          );
        })}
      </div>
    </div>
  );
}
