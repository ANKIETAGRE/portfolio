import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { FiExternalLink } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Light glow backdrops */}
      <div className="absolute bottom-10 right-10 w-90 h-90 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-3 font-poppins">Credentials</span>
          <h2 className="text-3xl md:text-5xl font-black font-syne text-white tracking-tight">
            Certifications - <span className="text-primary uppercase font-black">Learning Milestones!</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 bg-cardBg/40 border border-white/5 rounded-3xl backdrop-blur-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between shadow-xl group overflow-hidden"
            >
              <div>
                {/* Certificate Image preview */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-5 select-none bg-slate-100 border border-black/5 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating Link icon over the image (only if link is not empty/hash) */}
                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-colors shadow-md cursor-pointer"
                      title="Verify Credential"
                    >
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Issuer & Date */}
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-2 uppercase tracking-wide">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-poppins text-slate-900 group-hover:text-primary transition-colors duration-200 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs font-medium leading-relaxed mt-3 mb-4 select-none">
                  {cert.description}
                </p>
              </div>

              {/* Verify Link (Bottom Action) */}
              {cert.link && cert.link !== "#" && (
                <div className="pt-3 border-t border-black/5 flex justify-end">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-primary hover:text-primary/80 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <FiExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
