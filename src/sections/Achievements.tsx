import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiActivity, FiChevronLeft, FiChevronRight, FiGrid } from 'react-icons/fi';

const ACHIEVEMENTS_DATA = [
  {
    year: "2025",
    title: "Oracle Cloud Infrastructure GenAI Professional",
    description: "Completed rigorous evaluation on LLMs, prompt engineering, RAG frameworks, and deployment on Oracle Cloud infrastructure.",
    category: "Certification",
    icon: "award"
  },
  {
    year: "2024",
    title: "PHP and MySQL Training (IIT Bombay)",
    description: "Secured course training certification on database structures and backend scripting from Spoken Tutorial IIT Bombay.",
    category: "Academic",
    icon: "academic"
  },
  {
    year: "2024",
    title: "HackerRank Competency Badges",
    description: "Secured top credentials and badges in Python and SQL programming competencies on HackerRank.",
    category: "Competition",
    icon: "competition"
  },
  {
    year: "2024",
    title: "Power BI Professional (Simplilearn)",
    description: "Completed training certification on data analytics, ETL processing, modeling, and desktop dashboard designs.",
    category: "Certification",
    icon: "award"
  }
];

export default function Achievements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <FiAward className="text-primary text-xl" />;
      case 'academic':
        return <FiBookOpen className="text-secondary text-xl" />;
      case 'competition':
        return <FiActivity className="text-accent text-xl" />;
      default:
        return <FiAward className="text-primary text-xl" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black font-syne text-white tracking-tight">
            Achievements
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl font-medium leading-relaxed">
            A collection of my professional accomplishments, awards, and certifications earned throughout my journey.
          </p>
        </div>

        {/* Controls Row */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 font-poppins">
            <FiGrid className="text-primary animate-pulse" />
            <span>Drag or scroll to explore</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all bg-cardBg/20 active:scale-95"
              title="Scroll Left"
            >
              <FiChevronLeft />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all bg-cardBg/20 active:scale-95"
              title="Scroll Right"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel viewport container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 select-none cursor-grab active:cursor-grabbing"
        >
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex-shrink-0 w-80 bg-cardBg/40 border border-white/5 rounded-2xl p-6 snap-start backdrop-blur-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between h-56 shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-11 h-11 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center shadow-md">
                    {renderIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 font-mono tracking-wider">
                    {item.year}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-bold text-sm md:text-base font-poppins leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center">
                <span className={`text-[9px] font-bold uppercase tracking-wider font-poppins px-2.5 py-1 rounded-full border ${
                  item.category === "Certification"
                    ? "text-primary bg-primary/10 border-primary/20"
                    : "text-[#0284c7] bg-[#f0f9ff] border-[#e0f2fe]"
                }`}>
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
