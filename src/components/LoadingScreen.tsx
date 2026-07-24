import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 6) + 3;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 bg-bgDark z-[99999] flex flex-col items-center justify-center font-inter select-none"
        >
          {/* Centered Circle Section */}
          <div className="relative w-36 h-36 mb-10 flex items-center justify-center">
            
            {/* Gradient orbiting border */}
            <div className="absolute inset-0 rounded-full border-2 border-white/5" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary border-l-transparent border-b-transparent"
            />
            
            {/* Initials AA inside circle */}
            <h1 className="text-3xl font-extrabold tracking-tight font-poppins text-white flex select-none">
              A<span className="text-primary">A</span>
            </h1>

            {/* Orbiting Sparkle Star */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute w-full h-full inset-0 pointer-events-none"
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-primary">
                <svg className="w-4 h-4 fill-current animate-pulse" viewBox="0 0 24 24">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </div>
            </motion.div>

          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-black font-syne text-white tracking-tight mb-2 text-center">
            Welcome to My <span className="text-primary">Portfolio</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-gray-400 text-xs md:text-sm font-mono text-center max-w-lg mb-12 leading-relaxed">
            Crafting digital experiences with creativity and code
          </p>

          {/* Progress Section */}
          <div className="w-80 md:w-96 space-y-4">
            {/* Progress Bar container */}
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700 shadow-inner">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full bg-accent rounded-full"
              />
            </div>

            {/* Preparing Experience and % label */}
            <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
              <span>&lt;&gt; Preparing experience</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
