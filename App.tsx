import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE_DATA, DESIGN_PROJECTS, PM_CASE_STUDIES, PORTFOLIO_OWNER, PORTFOLIO_SUMMARY } from './constants';

// Custom Cursor Component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-terracotta rounded-full pointer-events-none z-[60] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-terracotta rounded-full pointer-events-none z-[60] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 40, mass: 0.3 }}
      />
    </>
  );
};

// All Work Page Component
const AllWorkPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-cream p-6 md:p-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="uppercase tracking-widest text-sm">Back to Home</span>
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif text-terracotta"
          >
            All Case Studies
          </motion.h2>
        </div>

        {/* Header Text */}
        <div className="mb-24 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-8"
          >
            The Archive.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg font-light leading-relaxed"
          >
            A comprehensive list of product strategies, research findings, and design executions.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {PM_CASE_STUDIES.map((study, idx) => (
            <motion.a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              whileHover={{ y: -10 }}
              className="group block h-full"
            >
              <div className="bg-stone-800 p-8 md:p-12 rounded-sm transition-all duration-500 border border-stone-700 hover:border-terracotta/50 h-full flex flex-col relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-terracotta/5">
                {/* Hover Glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="flex justify-between items-start mb-10">
                  <span className="text-xs font-mono text-terracotta border border-terracotta/30 px-3 py-1 rounded-full bg-terracotta/5">PRODUCT</span>
                  <span className="text-stone-400 text-sm font-light">{study.metric}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 group-hover:text-terracotta-light transition-colors">{study.title}</h3>
                <p className="text-stone-500 text-sm mb-8 uppercase tracking-widest">{study.role}</p>
                <p className="text-stone-300 leading-relaxed mb-10 flex-grow text-lg font-light">{study.summary}</p>
                <div className="flex justify-between items-end">
                  <div className="flex gap-2 flex-wrap">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-xs text-stone-500 border border-stone-700 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center pt-12 border-t border-stone-800">
          <p className="text-stone-500 text-sm">More case studies coming soon.</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'all-works'>('home');
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (view === 'all-works') {
    return (
      <>
        <CustomCursor />
        <AllWorkPage onBack={() => setView('home')} />
      </>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-cream text-stone-800 relative overflow-x-hidden selection:bg-terracotta selection:text-white cursor-none">
      <CustomCursor />

      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-40 pointer-events-none z-0"></div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-terracotta origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${scrolled ? 'bg-cream/90 backdrop-blur-md py-4 border-b border-stone-200/50' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-serif font-bold tracking-tighter text-stone-900 z-50 relative group"
          >
            {PORTFOLIO_OWNER.toLowerCase()}.
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-wide text-stone-600"
          >
            {['About', 'Experience', 'Work'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-terracotta transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-2 border border-stone-800 text-stone-800 rounded-full hover:bg-stone-800 hover:text-white transition-colors duration-300"
            >
              Connect
            </motion.a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
        {/* Animated Abstract Background */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-terracotta-light/20 to-transparent rounded-full mix-blend-multiply filter blur-[80px] opacity-70"
        ></motion.div>
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-olive/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <span className="py-2 px-4 border border-stone-300 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-stone-500 bg-white/40 backdrop-blur-sm">
              Computer Science Graduate
            </span>
          </motion.div>

          <div className="relative">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-900 leading-[0.9] mb-8 tracking-tight">
              <motion.div
                initial={{ opacity: 0, y: 100, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Logic meets
              </motion.div>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 100, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block font-serif-italic text-terracotta font-light relative"
              >
                Intuition.
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-6 text-terracotta" viewBox="0 0 200 20" fill="none"
                >
                  <path d="M5 15 Q 100 5 195 15" stroke="currentColor" strokeWidth="2" fill="none" />
                </motion.svg>
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl mx-auto text-stone-600 text-lg md:text-xl leading-relaxed mb-12 font-light"
          >
            Exploring the intersection of <span className="font-medium text-stone-800 bg-terracotta/10 px-1 rounded">Product Management</span> & <span className="font-medium text-stone-800 bg-olive/10 px-1 rounded">Graphic Design</span>.
            Creating data-driven solutions with visual soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="#work" className="group flex items-center gap-2 text-stone-800 border-b border-stone-800 pb-1 hover:text-terracotta hover:border-terracotta transition-all duration-300">
              View Selected Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-stone-400">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-justify">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/5"
            >
              <div className="w-full aspect-[3/4] bg-stone-200 relative group overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-stone-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"
                ></motion.div>
                <img
                  src="/portrait1.jpg"
                  alt="Abstract Portrait"
                  className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-110"

                />
                {/* Decorative geometric element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-terracotta rounded-full z-20"></div>
              </div>
            </motion.div>
            <div className="w-full md:w-3/5">
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl md:text-5xl text-stone-800 mb-8 leading-tight"
              >
                Bridging <span className="italic text-terracotta">analytical thinking</span> with creativity.
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-stone-600 text-lg leading-loose font-light"
              >
                {PORTFOLIO_SUMMARY.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16"
              >
                <div>
                  <h4 className="font-serif text-xl mb-2 text-stone-800 border-b border-terracotta inline-block pb-1">Education</h4>
                  <p className="text-sm text-stone-500 mt-2">B.Tech in Computer Science</p> 
                  <p className="text-sm text-stone-500 mt-0">Arya College of Engineering & I.T</p>
                  <p className="text-sm text-stone-400">Class of 2025</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 text-stone-800 border-b border-terracotta inline-block pb-1">Interests</h4>
                  <p className="text-sm text-stone-500 mt-2">Reading, Design & Sketching</p>
                  <p className="text-sm text-stone-500">Volleyball, Badmintion</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-sand/30">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-stone-800 mb-20 text-center"
          >
            Experience
          </motion.h2>

          <div className="space-y-4">
            {EXPERIENCE_DATA.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative bg-white p-8 md:p-12 hover:shadow-xl transition-all duration-500 border border-transparent hover:border-terracotta/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-baseline">
                  <div className="md:col-span-1">
                    <span className="text-xs font-bold text-terracotta uppercase tracking-widest border border-terracotta/20 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-3xl font-serif text-stone-800 group-hover:text-terracotta transition-colors">{job.role}</h3>
                      <p className="text-stone-400 font-medium uppercase tracking-wide text-xs mt-2 md:mt-0">{job.company}</p>
                    </div>
                    <p className="text-stone-600 leading-relaxed max-w-2xl">{job.description}</p>
                  </div>
                </div>
                {/* Hover reveal line */}
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-terracotta transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mixed Work Section */}
      <section id="work" className="py-32 bg-stone-900 text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-800 pb-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-terracotta text-xs uppercase tracking-widest block mb-2"
              >
                Portfolio
              </motion.span>
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-5xl md:text-7xl"
              >
                Selected Works
              </motion.h2>
            </div>

            <div className="flex flex-col items-end gap-4 mt-8 md:mt-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-stone-400 max-w-sm text-right font-light"
              >
                A collection of product case studies and visual experiments.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setView('all-works')}
                className="group flex items-center gap-2 text-white border-b border-terracotta pb-1 hover:text-terracotta transition-colors"
              >
                <span className="uppercase tracking-widest text-sm">View All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Product Case Studies (Home View - Limited to 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-40 auto-rows-fr">
            {PM_CASE_STUDIES.slice(0, 2).map((study, idx) => (
              <motion.a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="group block h-full"
              >
                <div className="bg-stone-800 p-8 md:p-12 rounded-sm transition-all duration-500 border border-stone-700 hover:border-terracotta/50 h-full flex flex-col relative overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="flex justify-between items-start mb-10">
                    <span className="text-xs font-mono text-terracotta border border-terracotta/30 px-3 py-1 rounded-full bg-terracotta/5">PRODUCT</span>
                    <span className="text-stone-400 text-sm font-light">{study.metric}</span>
                  </div>
                  <h3 className="text-4xl font-serif mb-4 group-hover:text-terracotta-light transition-colors">{study.title}</h3>
                  <p className="text-stone-500 text-sm mb-8 uppercase tracking-widest">{study.role}</p>
                  <p className="text-stone-300 leading-relaxed mb-10 flex-grow text-lg font-light">{study.summary}</p>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-2 flex-wrap">
                      {study.tags.map(tag => (
                        <span key={tag} className="text-xs text-stone-500 border border-stone-700 px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Design Grid */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-4">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-serif text-4xl text-stone-200 flex items-center gap-6"
              >
                <span className="w-16 h-[1px] bg-terracotta"></span>
                Visual Playground
              </motion.h3>
              <a
                href="https://www.behance.net/augustyayadav"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-stone-400 hover:text-terracotta transition-colors duration-300 text-sm tracking-wide mt-4 sm:mt-0"
              >
                <span>View Full Archive</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DESIGN_PROJECTS.map((project, idx) => (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group overflow-hidden block aspect-[3/4]"
                >
                  <div className="w-full h-full bg-stone-800 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/60 backdrop-blur-[2px]">
                    <div className="self-end">
                      <div className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-terracotta text-xs uppercase tracking-widest mb-2 font-bold">{project.category}</p>
                      <h4 className="text-2xl font-serif text-white">{project.title}</h4>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 bg-cream text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta-light/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-6xl md:text-8xl text-stone-800 mb-8"
          >
            Let's <span className="text-terracotta font-serif-italic">create.</span>
          </motion.h2>
          <p className="text-stone-600 text-lg mb-12 max-w-xl mx-auto">
            I'm currently open to full-time roles in Product Management or Graphic Design.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:augustya@gmail.com"
            className="inline-block bg-stone-900 text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-terracotta transition-colors duration-300 shadow-xl shadow-stone-900/10"
          >
            Get in Touch
          </motion.a>

          <div className="mt-24 flex justify-center space-x-12">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/augustyayv/' },
              { label: 'GitHub', href: 'https://github.com/Augustya19' },
              /*{ label: 'Behance', href: 'https://www.behance.net/YOUR_USERNAME' },*/
              { label: 'Resume', href: '/resume.pdf' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 text-sm font-medium tracking-wide transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white border-t border-stone-100 text-center">
        <p className="text-stone-400 text-xs tracking-wider uppercase">&copy; 2025 Augustya.</p>
      </footer>
    </div>
  );
};

export default App;