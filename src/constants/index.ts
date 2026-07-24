import oracleCert from '../assets/oracle_cert.png';
import ibmCert from '../assets/ibm_cert.png';
import ociCert from '../assets/oci_cert.png';
import simplilearnCert from '../assets/simplilearn_cert.png';

export const PERSONAL_INFO = {
  name: "Aniket Agre",
  titles: [
    "Generative AI Developer",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Python Developer"
  ],
  description: "Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Generative AI, and Full Stack Development. I enjoy building AI-powered applications using LangChain, OpenAI APIs, RAG, FastAPI, and modern web technologies.",
  about: "I am a final-year B.Tech Computer Science student at Amity University Rajasthan with hands-on experience in Machine Learning, Data Science, Python, and Generative AI. I have developed AI-powered healthcare systems, Retrieval-Augmented Generation (RAG) applications, and full-stack AI platforms. I enjoy solving real-world problems using AI technologies and continuously learning modern tools.",
  resumeUrl: "#", // will trigger a mockup PDF download or alert
  socials: {
    github: "https://github.com/ANKIETAGRE",
    linkedin: "https://linkedin.com/in/aniket-agre-164194305",
    email: "mailto:agre.aniket2004@gmail.com",
    phone: "tel:+918529118926",
    location: "Jaipur, Rajasthan",
    rawEmail: "agre.aniket2004@gmail.com",
    rawPhone: "+91 8529118926"
  }
};

export const SKILLS_CATEGORIES = [
  {
    title: "Generative AI & LLMs",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "OpenAI API", level: 90 },
      { name: "HuggingFace", level: 85 },
      { name: "Prompt Engineering", level: 95 },
      { name: "RAG & Embeddings", level: 90 },
      { name: "FAISS & ChromaDB", level: 85 }
    ]
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      { name: "Python", level: 95 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Matplotlib & Seaborn", level: 85 },
      { name: "Scikit-Learn", level: 90 },
      { name: "TensorFlow & Keras", level: 80 },
      { name: "NLP", level: 80 }
    ]
  },
  {
    title: "Backend & Development",
    skills: [
      { name: "FastAPI / REST APIs", level: 90 },
      { name: "C++ / SQL", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git / GitHub", level: 90 }
    ]
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    role: "Gen AI Intern",
    company: "YBI Foundation",
    location: "Remote",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Developed RAG chatbots and integrated OpenAI APIs with custom data structures.",
      "Utilized LangChain workflows and ChromaDB vector databases for semantic data retrieval.",
      "Built performant REST APIs using FastAPI and deployed HuggingFace models."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Zyneto Global Technologies",
    location: "Onsite",
    period: "Jun 2024 – Aug 2024",
    highlights: [
      "Created a full-stack corporate web application.",
      "Integrated secure authentication and real-time functions using Firebase.",
      "Performed validation tests and collaborated on requirement analysis."
    ]
  }
];

export const PROJECTS_LIST = [
  {
    title: "AroVeda-X",
    description: "AI-powered Healthcare Management System with Disease Prediction, Appointment Booking, Conversational AI Assistant, RAG workflows, FastAPI, Firebase, and cloud deployment.",
    tech: ["Python", "FastAPI", "LangChain", "OpenAI", "Firebase", "Railway", "ML", "React"],
    github: "https://github.com/ANKIETAGRE",
    demo: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    framework: "FastAPI / React"
  },
  {
    title: "AI-Powered Learning Management System",
    description: "Full Stack LMS with Student & Teacher Portals, AI Question Answering, RAG Pipeline, LangChain integrations, MongoDB database, and Groq API LLM pipelines.",
    tech: ["Python", "FastAPI", "MongoDB", "LangChain", "Groq", "React"],
    github: "https://github.com/ANKIETAGRE",
    demo: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    framework: "FastAPI / MongoDB"
  },
  {
    title: "InsightFlow AI",
    description: "Advanced machine learning pipeline for predictive customer analytics and sentiment analysis, utilizing custom XGBoost models, PyTorch NLP models, and real-time visualization dashboards.",
    tech: ["Python", "PyTorch", "XGBoost", "Scikit-Learn", "Streamlit", "ML"],
    github: "https://github.com/ANKIETAGRE",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    framework: "Python / ML"
  },
  {
    title: "FocusBento",
    description: "Minimalist, high-performance personal productivity bento-board organizer featuring real-time task sync, Pomodoro timers, and interactive widgets built on a modern stack.",
    tech: ["TypeScript", "React", "TailwindCSS", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/ANKIETAGRE",
    demo: "#",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=600&auto=format&fit=crop",
    framework: "React / Node.js"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "July 2026",
    link: "https://education.oracle.com/learning-path/pLP_AgenticAIFndAssoc",
    image: oracleCert,
    description: "Validates foundational expertise in building Agentic AI systems, multi-agent frameworks, task delegation strategies, and LLM integrations."
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM / Cognitive Class",
    date: "July 2026",
    link: "https://courses.cognitiveclass.ai/certificates/52334e14db354f53bd3051d085a68fef",
    image: ibmCert,
    description: "Covers data cleaning, wrangling, exploratory data analysis, statistics, linear regressions, and predictive modeling using Pandas, NumPy, and Scikit-Learn."
  },
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle Cloud",
    date: "2025",
    link: "#",
    image: ociCert,
    description: "Advanced certification covering LLM architecture, prompt engineering, RAG pipelines, fine-tuning, and deployment on Oracle Cloud Infrastructure."
  },
  {
    title: "PHP and MySQL Training",
    issuer: "IIT Bombay",
    date: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=600&auto=format&fit=crop",
    description: "Completed full-stack training covering database design, relational tables, SQL queries, PHP backend validation, and secure web application flows."
  },
  {
    title: "HackerRank Skill Assessments (Python, SQL)",
    issuer: "HackerRank",
    date: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
    description: "Verified problem-solving competency in algorithms, complex SQL operations (joins, subqueries, aggregates), and idiomatic Python programming."
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    date: "October 2025",
    link: "#",
    image: simplilearnCert,
    description: "Earned credential validating core concepts in Artificial Intelligence, machine learning algorithms, deep learning neural networks, and prompt engineering."
  }
];

export const EDUCATION_LIST = [
  {
    university: "Amity University Rajasthan",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science Engineering",
    cgpa: "8.13",
    period: "2022 - 2026"
  }
];
