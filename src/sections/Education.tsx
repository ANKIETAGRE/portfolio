import { motion } from 'framer-motion';
import { EDUCATION_LIST } from '../constants';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Light glow backdrops */}
      <div className="absolute top-1/4 right-1/4 w-84 h-84 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-3 font-poppins">Background</span>
          <h2 className="text-3xl md:text-5xl font-black font-syne text-white tracking-tight">Education</h2>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12 ml-4">
          {EDUCATION_LIST.map((edu, index) => (
            <motion.div
              key={edu.university}
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

              {/* Education Card */}
              <div className="p-6 bg-cardBg/40 border border-white/5 rounded-2xl backdrop-blur-md hover:border-primary/10 transition-colors shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-bold font-poppins text-white flex items-center gap-2">
                      <FiBookOpen className="text-primary text-sm flex-shrink-0" />
                      <span>{edu.university}</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-semibold mt-0.5">{edu.degree} &mdash; {edu.major}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 flex-shrink-0">
                    <FiCalendar size={12} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 bg-primary/10 border border-primary/20 text-primary font-bold text-xs tracking-wide px-3 py-1.5 rounded-lg">
                  <FiAward size={13} />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
