import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_LIST } from '../constants';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const FILTERS = ['All', 'AI/ML', 'React/FastAPI'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Simple filtering based on tags
  const filteredProjects = PROJECTS_LIST.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI/ML') {
      return project.tech.some(t => ['ML', 'LangChain', 'OpenAI', 'Groq'].includes(t));
    }
    if (activeFilter === 'React/FastAPI') {
      return project.tech.includes('React') || project.tech.includes('FastAPI');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Light glow backdrops */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-3 font-poppins">My Works</span>
          <h2 className="text-3xl md:text-5xl font-black font-syne text-white tracking-tight">Recent Projects</h2>
        </div>

        {/* Filter controls */}
        <div className="flex justify-center space-x-3 mb-16 font-poppins">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-bold tracking-wide rounded-full transition-all border ${
                activeFilter === filter
                  ? 'bg-primary text-bgDark border-primary'
                  : 'bg-cardBg/40 text-gray-400 border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-5 bg-cardBg/40 border border-white/5 rounded-3xl backdrop-blur-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between shadow-xl group overflow-hidden"
              >
                <div>
                  {/* Image container with rounded corners and zoom-on-hover */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 select-none">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Star Favorite Button floating at top-right of image */}
                    <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-colors cursor-pointer">
                      <FiStar size={14} className="fill-current text-yellow-400 border-none" />
                    </button>
                    
                    {/* Top links overlay bottom-left of image */}
                    <div className="absolute bottom-4 left-4 flex space-x-2.5">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#4422EF] hover:text-white transition-all duration-200 flex items-center justify-center text-white border border-white/5 shadow-md"
                        title="GitHub Code"
                      >
                        <FiGithub size={14} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#4422EF] hover:text-white transition-all duration-200 flex items-center justify-center text-white border border-white/5 shadow-md"
                        title="Live Demo"
                      >
                        <FiExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Title & Framework Header */}
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-lg font-bold font-poppins text-slate-900 group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                    <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/10 text-primary text-[10px] font-bold rounded-md font-mono flex-shrink-0 uppercase tracking-wide">
                      {project.framework}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-5 select-none">{project.description}</p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 rounded-full hover:text-primary hover:border-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
