import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollUp}
          className="fixed bottom-6 right-6 w-11 h-11 bg-primary text-bgDark rounded-xl flex items-center justify-center shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-200 z-40 text-lg border border-primary/20"
          title="Back to Top"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
