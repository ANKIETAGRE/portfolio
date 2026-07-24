import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import profileImg from '../assets/profile.jpg';
import { FiDatabase, FiCpu, FiCode, FiCheckSquare } from 'react-icons/fi';

export default function About() {
  const { name, socials } = PERSONAL_INFO;

  return (
    <section id="about" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Monospace tag & Title */}
        <div className="mb-12">
          <span className="text-primary font-mono text-sm block mb-2">&lt;&gt; ~/about</span>
          <h2 className="text-4xl md:text-5xl font-black font-syne text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Sub-header paragraph */}
        <p className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-16">
          I'm an <span className="text-primary font-bold">AI/ML Engineer & Generative AI Developer</span> passionate about building intelligent systems using LangChain, OpenAI APIs, vector databases, and modern full-stack web technologies.
        </p>

        {/* Main Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl max-w-sm w-full bg-cardBg/20"
            >
              {/* Profile Image */}
              <img
                src={profileImg}
                alt={name}
                className="w-full h-auto object-cover object-top transition-all duration-500 ease-in-out"
              />

              {/* Open to Work Badge */}
              <div className="absolute top-4 right-4 bg-[#e6fbf4]/90 backdrop-blur-sm border border-[#b2f3dd] px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#10b981] absolute left-3.5" />
                <span className="text-[#065f46] text-xs font-bold font-poppins tracking-wide">Open to Work</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative bio & Snapshot panels */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
              <p>
                I am a final-year B.Tech Computer Science student at <span className="text-white font-semibold">Amity University Rajasthan</span> with hands-on experience developing Retrieval-Augmented Generation (RAG) applications, healthcare predictors, and full-stack API platforms.
              </p>
              <p>
                I enjoy designing scalable software engines, studying intelligent architectures, and translating complex challenges into robust, maintainable engineering solutions.
              </p>
            </div>

            {/* Sub-grids: Snapshot & Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

              {/* Snapshot Terminal Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-cardBg/60 border border-white/5 rounded-2xl p-6 backdrop-blur-md shadow-lg font-mono text-xs text-gray-300"
              >
                {/* Header dots */}
                <div className="flex items-center space-x-1.5 mb-5 border-b border-white/5 pb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-gray-500 text-[10px] ml-2">~/snapshot</span>
                </div>

                {/* Key value fields */}
                <div className="space-y-3.5">
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">Name</span>
                    <span className="text-white font-semibold">{name}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">Current Role</span>
                    <span className="text-white font-semibold">Gen AI Intern</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">Degree</span>
                    <span className="text-white font-semibold">B.Tech CSE</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">Graduation</span>
                    <span className="text-white font-semibold">2026</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">CGPA</span>
                    <span className="text-primary font-bold">8.13</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-24 flex-shrink-0">Location</span>
                    <span className="text-white font-semibold">{socials.location}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 w-24 flex-shrink-0">Looking For</span>
                    <span className="text-accent font-semibold leading-relaxed">AI/ML | GenAI | Python Roles</span>
                  </div>
                </div>
              </motion.div>

              {/* Grid cards highlight */}
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: AI & RAG */}
                <div className="p-4 bg-cardBg/40 border border-white/5 rounded-xl flex flex-col justify-between h-36 hover:border-primary/20 transition-colors shadow-md">
                  <div className="text-primary text-xl"><FiDatabase /></div>
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1 font-poppins">AI & RAG</h4>
                    <p className="text-gray-500 text-[10px] leading-normal font-medium">Embeddings, ChromaDB, vector indexes.</p>
                  </div>
                </div>

                {/* Card 2: ML Engine */}
                <div className="p-4 bg-cardBg/40 border border-white/5 rounded-xl flex flex-col justify-between h-36 hover:border-primary/20 transition-colors shadow-md">
                  <div className="text-secondary text-xl"><FiCpu /></div>
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1 font-poppins">ML Engine</h4>
                    <p className="text-gray-500 text-[10px] leading-normal font-medium">Scikit-learn models & TensorFlow evaluations.</p>
                  </div>
                </div>

                {/* Card 3: Clean Code */}
                <div className="p-4 bg-cardBg/40 border border-white/5 rounded-xl flex flex-col justify-between h-36 hover:border-primary/20 transition-colors shadow-md">
                  <div className="text-accent text-xl"><FiCode /></div>
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1 font-poppins">Clean Code</h4>
                    <p className="text-gray-500 text-[10px] leading-normal font-medium">FastAPI structures & modular setups.</p>
                  </div>
                </div>

                {/* Card 4: DevOps */}
                <div className="p-4 bg-cardBg/40 border border-white/5 rounded-xl flex flex-col justify-between h-36 hover:border-primary/20 transition-colors shadow-md">
                  <div className="text-white text-xl"><FiCheckSquare /></div>
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1 font-poppins">DevOps</h4>
                    <p className="text-gray-500 text-[10px] leading-normal font-medium">Git pipelines, Docker, & Firebase deploys.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
