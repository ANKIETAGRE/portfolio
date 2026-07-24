
import AnimatedCursor from './components/AnimatedCursor';
import LoadingScreen from './components/LoadingScreen';
import StickyNavbar from './components/StickyNavbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-bgDark min-h-screen text-gray-300 antialiased selection:bg-primary/30 selection:text-white">
      {/* Pre-loaders and global animations */}
      <LoadingScreen />
      <AnimatedCursor />
      <ScrollProgressBar />

      {/* Navigation Headers */}
      <StickyNavbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-16 bg-bgDark border-t border-white/5 font-inter">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Card */}
          <div className="bg-cardBg border border-primary/20 rounded-2xl px-6 py-4 shadow-xl max-w-sm w-full md:w-auto text-left">
            <h3 className="text-xl font-bold font-syne text-white tracking-wide mb-1">
              Aniket <span className="text-primary">Agre</span>
            </h3>
            <p className="text-xs font-semibold font-mono tracking-wider">
              <span className="text-primary">AI/ML Engineer</span>
              <span className="text-gray-500"> · GenAI · Python · Full Stack</span>
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-mono text-sm text-gray-400 tracking-wide text-center md:text-right">
              Building intelligent systems, one commit at a time.
            </p>
          </div>
        </div>
      </footer>

      {/* Extra floating elements */}
      <BackToTop />
    </div>
  );
}

export default App;
