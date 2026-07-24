import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiFileText, FiExternalLink } from 'react-icons/fi';

const JOURNEY_DATA = [
  {
    year: "2022",
    type: "Education",
    title: "B.Tech In Computer Science & Engineering",
    institution: "Amity University, Rajasthan",
    description: "Started my B.Tech journey, diving deep into algorithms, data structures, operating systems, computer networks, and programming. Actively built personal projects and explored open-source contribution patterns.",
    certificateText: "Degree Admission",
    linkText: "Amity University",
    linkUrl: "https://www.amity.edu/jaipur/"
  },
  {
    year: "2024",
    type: "Experience",
    title: "Web Development Intern",
    company: "Zyneto Global Technologies",
    description: "Developed and maintained corporate web services during an onsite internship. Integrated secure Firebase authentication, optimized API endpoints, and worked with design teams to enforce responsive UI layout practices.",
    certificateText: "Experience Certificate",
    linkText: "Zyneto Global",
    linkUrl: "https://github.com/ANKIETAGRE"
  },
  {
    year: "2025",
    type: "Experience",
    title: "Gen AI Intern",
    company: "YBI Foundation",
    description: "Developed Retrieval-Augmented Generation (RAG) chatbot models and integrated OpenAI API pipelines. Formulated document chunks embedding indexing using ChromaDB and built REST endpoints in FastAPI.",
    certificateText: "Experience Certificate",
    linkText: "YBI Foundation",
    linkUrl: "https://www.ybifoundation.org/"
  },
  {
    year: "2026",
    type: "Education",
    title: "B.Tech CSE — Graduating",
    institution: "Amity University, Rajasthan",
    description: "Graduated with a CGPA of 8.13. Completed 4 years of Computer Science Engineering with rich hands-on project experiences, internships, and a strong foundation in software engineering principles.",
    certificateText: "Degree Transcript",
    linkText: "Amity University",
    linkUrl: "https://www.amity.edu/jaipur/"
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-3 font-poppins">My Timeline</span>
          <h2 className="text-4xl md:text-5xl font-black font-syne text-white tracking-tight">
            My Journey
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg mx-auto font-medium leading-relaxed">
            From a curious CS student to an AI/ML developer — 2 internships, 6+ projects, and a CGPA of 8.13.
          </p>
        </div>

        {/* Alternating Timeline container */}
        <div ref={containerRef} className="relative">
          {/* Vertical timeline line centered on desktop, left on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-primary origin-top w-full shadow-[0_0_8px_rgba(0,229,255,0.4)]"
            />
          </div>

          <div className="space-y-12">
            {JOURNEY_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isEdu = item.type === "Education";

              return (
                <div key={`${item.year}-${item.title}`} className="relative flex flex-col md:flex-row md:items-center group">


                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-bgDark border-4 border-primary/80 z-10 -translate-x-1/2 shadow-[0_0_12px_rgba(0,229,255,0.4)] transition-colors duration-300 hover:bg-primary" />

                  {/* Left Side Container (Desktop only) */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 md:text-right hidden md:block">
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-6 bg-cardBg/40 border border-white/5 rounded-2xl backdrop-blur-md hover:border-primary/10 transition-colors shadow-xl text-left"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-lg flex-shrink-0">
                            {isEdu ? <FiBookOpen /> : <FiBriefcase />}
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-base font-poppins">{item.title}</h3>
                            <p className="text-gray-500 text-xs font-semibold">{isEdu ? item.institution : item.company}</p>
                          </div>
                        </div>

                        <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-2.5 py-1 bg-primary text-white border border-primary text-[10px] font-bold rounded-md font-mono shadow-sm">
                            {item.year}
                          </span>
                          <button className="px-3 py-1 bg-primary hover:bg-primary/90 text-white font-bold text-[10px] rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm">
                            <FiFileText size={10} />
                            <span>{item.certificateText}</span>
                          </button>
                          <a
                            href={item.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white text-[10px] font-bold inline-flex items-center gap-1.5 transition-colors"
                          >
                            <span>{item.linkText}</span>
                            <FiExternalLink size={10} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side Container / Mobile Container */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-12 text-left">
                    {(isEven || true) && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`p-6 bg-cardBg/40 border border-white/5 rounded-2xl backdrop-blur-md hover:border-primary/10 transition-colors shadow-xl ${!isEven ? 'md:hidden' : ''
                          }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-lg flex-shrink-0">
                            {isEdu ? <FiBookOpen /> : <FiBriefcase />}
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-base font-poppins">{item.title}</h3>
                            <p className="text-gray-500 text-xs font-semibold">{isEdu ? item.institution : item.company}</p>
                          </div>
                        </div>

                        <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-2.5 py-1 bg-primary text-white border border-primary text-[10px] font-bold rounded-md font-mono shadow-sm">
                            {item.year}
                          </span>
                          <button className="px-3 py-1 bg-primary hover:bg-primary/90 text-white font-bold text-[10px] rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm">
                            <FiFileText size={10} />
                            <span>{item.certificateText}</span>
                          </button>
                          <a
                            href={item.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white text-[10px] font-bold inline-flex items-center gap-1.5 transition-colors"
                          >
                            <span>{item.linkText}</span>
                            <FiExternalLink size={10} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
