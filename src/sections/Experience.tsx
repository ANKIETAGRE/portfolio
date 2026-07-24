import { motion } from 'framer-motion';
import { EXPERIENCE_TIMELINE } from '../constants';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-3 font-poppins">My Journey</span>
          <h2 className="text-3xl md:text-5xl font-black font-syne text-white tracking-tight">Work Experience</h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12 ml-4">
          {EXPERIENCE_TIMELINE.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Bullet circle */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4.5 h-4.5 rounded-full bg-bgDark border-2 border-primary group-hover:bg-primary transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-bgDark transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="p-6 bg-cardBg/40 border border-white/5 rounded-2xl backdrop-blur-md hover:border-primary/10 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-bold font-poppins text-white flex items-center gap-2">
                      <FiBriefcase className="text-primary text-sm flex-shrink-0" />
                      <span>{exp.role}</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-semibold mt-0.5">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar size={12} className="text-primary" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin size={12} className="text-primary" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 list-disc pl-4 text-sm text-gray-300 font-medium">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-relaxed hover:text-white transition-colors">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
