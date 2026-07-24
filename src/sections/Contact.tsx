import { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const { socials } = PERSONAL_INFO;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bgDark relative border-t border-white/5 font-inter">
      {/* Light glow backdrops */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-3 font-poppins">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-black font-syne text-white tracking-tight">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-cardBg/40 border border-white/5 rounded-3xl backdrop-blur-md space-y-6 shadow-xl">
              <h3 className="text-xl font-bold font-poppins text-white mb-4">Contact Information</h3>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-lg flex-shrink-0">
                  <FiMail />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold font-poppins">Email</span>
                  <a href={socials.email} className="text-sm font-semibold text-gray-200 hover:text-primary transition-colors">{socials.rawEmail}</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-lg flex-shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest font-bold font-poppins">Location</span>
                  <span className="text-sm font-semibold text-gray-200">{socials.location}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex space-x-4 text-xl text-gray-400">
                <a href={socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:text-primary hover:border-primary/20 transition-all">
                  <FiGithub />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:text-primary hover:border-primary/20 transition-all">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-cardBg/40 border border-white/5 rounded-3xl backdrop-blur-md shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-xl text-center"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-2 font-poppins">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/3 border border-white/5 focus:border-primary rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-2 font-poppins">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/3 border border-white/5 focus:border-primary rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-2 font-poppins">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Describe your project, question, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/3 border border-white/5 focus:border-primary rounded-xl px-4 py-3 text-white text-sm focus:outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-primary hover:bg-primary/90 text-bgDark font-bold text-sm tracking-wide rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-bgDark border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
