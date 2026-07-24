import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCursor() {
  const [hidden, setHidden] = useState(true);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const innerXSpring = useSpring(cursorX, { damping: 15, stiffness: 400 });
  const innerYSpring = useSpring(cursorY, { damping: 15, stiffness: 400 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dynamic trailing circle */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: hidden ? 0 : 0.7,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] transition-opacity duration-150 hidden md:block"
      />
      {/* Inner dot */}
      <motion.div
        style={{
          x: innerXSpring,
          y: innerYSpring,
          translateX: '12px',
          translateY: '12px',
          opacity: hidden ? 0 : 1,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-opacity duration-150 hidden md:block"
      />
    </>
  );
}
