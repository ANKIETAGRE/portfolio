import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string; // hex color for line and text
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Python", level: 92, color: "#d946ef" },
      { name: "JavaScript", level: 78, color: "#facc15" },
      { name: "TypeScript", level: 74, color: "#3b82f6" },
      { name: "SQL", level: 88, color: "#a855f7" },
    ]
  },
  {
    category: "GENERATIVE AI & LLM ENGINEERING",
    skills: [
      { name: "LangChain", level: 82, color: "#10b981" },
      { name: "LangGraph", level: 78, color: "#10b981" },
      { name: "RAG Pipelines", level: 85, color: "#3b82f6" },
      { name: "Prompt Engineering", level: 90, color: "#facc15" },
      { name: "Agentic Workflows", level: 80, color: "#a855f7" },
      { name: "Hugging Face Transformers", level: 83, color: "#f97316" },
    ]
  },
  {
    category: "AI · ML · DATA SCIENCE",
    skills: [
      { name: "PyTorch", level: 85, color: "#ef4444" },
      { name: "TensorFlow", level: 80, color: "#f97316" },
      { name: "scikit-learn", level: 90, color: "#facc15" },
      { name: "Pandas", level: 88, color: "#3b82f6" },
      { name: "NumPy", level: 86, color: "#3b82f6" },
      { name: "spaCy", level: 80, color: "#10b981" },
      { name: "NLTK", level: 75, color: "#3b82f6" },
    ]
  },
  {
    category: "BACKEND & APIS",
    skills: [
      { name: "FastAPI", level: 90, color: "#10b981" },
      { name: "Flask", level: 82, color: "#3b82f6" },
      { name: "Django", level: 76, color: "#10b981" },
    ]
  },
  {
    category: "DATABASES",
    skills: [
      { name: "PostgreSQL", level: 85, color: "#3b82f6" },
      { name: "Redis", level: 72, color: "#ef4444" },
    ]
  },
  {
    category: "VECTOR DATABASES",
    skills: [
      { name: "FAISS", level: 82, color: "#3b82f6" },
      { name: "Pinecone", level: 78, color: "#a855f7" },
    ]
  },
  {
    category: "DEVOPS & TOOLS",
    skills: [
      { name: "Docker", level: 80, color: "#3b82f6" },
      { name: "Git", level: 90, color: "#f97316" },
      { name: "Linux", level: 88, color: "#facc15" },
      { name: "AWS", level: 74, color: "#f97316" },
      { name: "GitHub Actions", level: 80, color: "#3b82f6" },
      { name: "Jupyter", level: 85, color: "#d946ef" },
    ]
  },
  {
    category: "FRONTEND",
    skills: [
      { name: "React", level: 80, color: "#3b82f6" },
      { name: "Next.js", level: 72, color: "#a855f7" },
      { name: "TailwindCSS", level: 85, color: "#10b981" },
      { name: "Responsive Design", level: 88, color: "#10b981" },
    ]
  }
];

// Stagger animation variants for children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 220,
      damping: 20
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Title & JSON Tagline */}
        <div className="mb-16 text-left select-none">
          <span className="text-primary font-mono text-sm block mb-2">&lt;&gt; ~/skill</span>
          <h2 className="text-4xl md:text-5xl font-black font-syne text-white tracking-tight mb-3">
            Skills
          </h2>
          <p className="text-gray-400 text-sm font-mono tracking-wide leading-relaxed">
            {`{ "status": "always_learning", "passion": "immeasurable" }`}
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
          {SKILLS_DATA.map((cat) => (
            <motion.div
              key={cat.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col"
            >
              {/* Category Header */}
              <div className="border-b border-[#3e4135]/50 pb-2 mb-4">
                <h3 className="text-[#c2c5a0] text-sm md:text-base font-bold tracking-wider uppercase select-none">
                  {cat.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={rowVariants}
                    className="flex items-center justify-between text-sm py-0.5 group cursor-default"
                  >
                    {/* Skill Name */}
                    <span className="text-gray-300 w-[160px] md:w-[200px] flex-shrink-0 group-hover:text-white transition-colors duration-200 truncate">
                      {skill.name}
                    </span>

                    {/* Progress Line */}
                    <div className="flex-grow mx-4 h-[2px] bg-zinc-800 relative rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>

                    {/* Percentage Text */}
                    <span 
                      className="font-bold text-right w-[45px] flex-shrink-0 select-none group-hover:scale-105 transition-transform duration-200"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
