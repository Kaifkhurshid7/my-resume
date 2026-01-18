import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Download, Terminal, 
  Database, Brain, Globe, ExternalLink, Menu, X, 
  Zap, Award, ChevronRight, Code
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Intro', id: 'home' },
    { name: 'Tech', id: 'tech' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-400 font-sans selection:bg-white selection:text-black">
      
      {/* 1. ADAPTIVE NAVIGATION */}
      <nav className="fixed w-full z-[100] px-4 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/5 p-3 md:p-4 rounded-full">
          <div className="flex items-center gap-3 pl-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-black text-xs">K</div>
            <span className="text-white font-bold tracking-tighter uppercase text-xs">Kaif Khurshid</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="mailto:kaifkhurshid18@gmail.com" className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors"><Mail size={18} className="text-white"/></a>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-white"><Menu size={20}/></button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] bg-black p-10 flex flex-col justify-center">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-white"><X size={32}/></button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ x: -20 }} animate={{ x: 0 }} transition={{ delay: i * 0.1 }}
                  key={link.id} onClick={() => setIsMenuOpen(false)} href={`#${link.id}`} 
                  className="text-5xl font-black text-white uppercase tracking-tighter italic"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* 2. HERO SECTION: PHOTO FIRST ON MOBILE, ASYMMETRICAL ON DESKTOP */}
        <section id="home" className="pt-32 md:pt-48 pb-20 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-start">
          
          {/* PHOTO: COMES FIRST ON MOBILE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-sm lg:max-w-none lg:col-span-5 lg:order-2 relative"
          >
            <div className="aspect-[4/5] bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="/my-photo.jpg" 
                alt="Kaif Khurshid" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">
              Backend Pro
            </div>
          </motion.div>

          {/* DESCRIPTION: COMES SECOND ON MOBILE */}
          <div className="lg:col-span-7 lg:order-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-black mb-6 flex items-center justify-center lg:justify-start gap-2">
                <Zap size={12}/> Software Engineer & Student Leader
              </h2>
              <h1 className="text-5xl md:text-[100px] leading-[0.85] font-black text-white tracking-tighter mb-8 uppercase">
                Building <br/> <span className="text-neutral-700 italic">Scalable</span> <br/> Systems.
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
Kaif Khurshid is a pre-final year B.Tech (Hons.) CSE student at XIM University, Bhubaneswar, passionate about building impactful solutions. He works with the MERN stack and is actively exploring Data Science and Machine Learning, while strengthening his problem-solving and core computer science fundamentals. Strongly inclined toward entrepreneurship and leadership, with a focus on innovation and collaboration.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3">
                  <Download size={18}/> Get Resume
                </button>
                <div className="flex gap-4">
                  <a href="https://github.com/Kaifkhurshid7" className="p-4 bg-white/5 rounded-full hover:text-white transition-colors"><Github size={20}/></a>
                  <a href="https://linkedin.com/in/kaif-khurshid" className="p-4 bg-white/5 rounded-full hover:text-white transition-colors"><Linkedin size={20}/></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

     {/* TECHNICAL ARSENAL SECTION */}
<section id="tech" className="py-24 md:py-32 bg-[#050505] border-t border-white/5 px-6">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
      <div className="space-y-4">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-blue-500 font-black flex items-center gap-3">
          <div className="w-8 h-[1px] bg-blue-500"></div> Technical Capabilities
        </h2>
        <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
          The <span className="text-neutral-800 italic">Arsenal.</span>
        </h3>
      </div>
      <div className="max-w-xs text-right hidden md:block border-l border-white/10 pl-6">
        <p className="text-xs text-neutral-500 font-medium leading-relaxed uppercase tracking-widest">
          Specialized in backend architectures, machine learning integration, and scalable system design.
        </p>
      </div>
    </div>

    {/* The Modular Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      
      {/* CARD 1: CORE LANGUAGES */}
      <div className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:bg-[#0f0f0f] hover:border-blue-500/30 transition-all duration-500">
        <Terminal className="text-blue-500 mb-8 group-hover:scale-110 transition-transform" size={32}/>
        <h4 className="text-white font-black text-lg mb-6 tracking-widest uppercase italic">Languages</h4>
        <ul className="space-y-3">
          {['Python', 'Java', 'C / C++', 'JavaScript', 'SQL'].map((lang) => (
            <li key={lang} className="flex items-center justify-between group/item border-b border-white/5 pb-2">
              <span className="text-sm text-neutral-400 group-hover/item:text-white transition-colors">{lang}</span>
              <div className="w-1 h-1 rounded-full bg-neutral-800 group-hover/item:bg-blue-500"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD 2: BACKEND ECOSYSTEM */}
      <div className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:bg-[#0f0f0f] hover:border-purple-500/30 transition-all duration-500">
        <Database className="text-purple-500 mb-8 group-hover:scale-110 transition-transform" size={32}/>
        <h4 className="text-white font-black text-lg mb-6 tracking-widest uppercase italic">Backend</h4>
        <div className="space-y-5">
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-bold">Frameworks</p>
            <p className="text-xs text-neutral-300 font-mono">Node.js, Express, Flask</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-bold">Persistence</p>
            <p className="text-xs text-neutral-300 font-mono">MySQL, MongoDB, Redis</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-bold">Infrastructure</p>
            <p className="text-xs text-neutral-300 font-mono">Docker, Git, AWS S3/EC2</p>
          </div>
        </div>
      </div>

      {/* CARD 3: ML & DATA */}
      <div className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:bg-[#0f0f0f] hover:border-green-500/30 transition-all duration-500">
        <Brain className="text-green-500 mb-8 group-hover:scale-110 transition-transform" size={32}/>
        <h4 className="text-white font-black text-lg mb-6 tracking-widest uppercase italic">AI & Research</h4>
        <div className="grid grid-cols-2 gap-2">
          {['TensorFlow', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy', 'NLTK', 'Librosa'].map((tool) => (
            <div key={tool} className="px-2 py-2 bg-white/5 border border-white/5 rounded-lg text-[9px] text-center text-neutral-400 hover:text-white transition-colors">
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* CARD 4: HIGHLIGHT / LEADERSHIP */}
      <div className="relative p-8 bg-white rounded-[2.5rem] flex flex-col justify-between overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <div className="relative z-10">
          <Award className="text-black mb-6" size={32}/>
          <h4 className="text-black font-black text-2xl mb-4 leading-tight tracking-tighter uppercase italic">ACM <br/> Leadership</h4>
          <p className="text-black/60 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
            Chairperson @ Student Chapter. Managing a community of 60+ engineers.
          </p>
        </div>
        <div className="mt-8 pt-4 border-t border-black/10 flex justify-between items-center text-black font-black text-[10px] tracking-widest uppercase">
          <span>XIM University</span>
          <ChevronRight size={14} />
        </div>
        {/* Background Decorative Icon */}
        <Code className="absolute -bottom-6 -right-6 text-black/5" size={160} />
      </div>

    </div>
  </div>
</section>
{/* FEATURED WORKS SECTION */}
<section id="work" className="py-24 md:py-32 px-6 bg-[#050505]">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div className="space-y-4">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-blue-500 font-black flex items-center gap-3">
          <div className="w-8 h-[1px] bg-blue-500"></div> Portfolio Selection
        </h2>
        <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
          Featured <br/> <span className="text-neutral-800 italic">Projects.</span>
        </h3>
      </div>
      
      {/* Sidebar-style GitHub Link for Mobile/Desktop */}
      <a 
        href="https://github.com/Kaifkhurshid7" 
        target="_blank" 
        className="group flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-500"
      >
        <div className="text-right">
          <p className="text-[9px] font-black uppercase tracking-widest opacity-50">View Archive</p>
          <p className="text-sm font-bold">More on GitHub</p>
        </div>
        <Github size={24} className="group-hover:rotate-12 transition-transform" />
      </a>
    </div>

    {/* Project Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {[
        {
          title: "ACM-XIM Envoy",
          type: "Fullstack System",
          desc: "A real-time engagement and communication platform designed for the ACM Student Chapter. Features secure JWT authentication, real-time messaging via Socket.io, and a modular dashboard.",
          tech: ["Node.js", "MongoDB", "Socket.io", "React"],
          github: "https://github.com/Kaifkhurshid7/ACM-XIM-Envoy",
          live: "#"
        },
        {
          title: "Instrument Recognition",
          type: "AI & Signal Processing",
          desc: "A machine learning pipeline for automated musical instrument identification. Utilizes Librosa for spectral feature extraction and a custom-trained model for high-accuracy classification.",
          tech: ["Python", "Flask", "Librosa", "TensorFlow"],
          github: "https://github.com/Kaifkhurshid7/Instrument-Recognition",
          live: "#"
        }
      ].map((project, i) => (
        <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-700">
          
          {/* Decorative Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 blur-[100px] group-hover:bg-blue-500/10 transition-all"></div>
          
          <div className="p-8 md:p-12 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-white/5 rounded-2xl">
                <Code className="text-blue-500" size={24} />
              </div>
              <div className="flex gap-3">
                <a href={project.github} className="p-3 bg-white/5 hover:bg-white hover:text-black rounded-full transition-all">
                  <Github size={20} />
                </a>
                <a href={project.live} className="p-3 bg-white/5 hover:bg-white hover:text-black rounded-full transition-all">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="flex-grow">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-3">{project.type}</p>
              <h4 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:italic transition-all">{project.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-md">
                {project.desc}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
              {project.tech.map(tag => (
                <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* 5. CONTACT & FOOTER */}
        <footer id="contact" className="py-24 text-center border-t border-white/5">
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-10 uppercase">Let's <br/> Connect.</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <a href="mailto:kaifkhurshid18@gmail.com" className="text-sm font-bold text-neutral-500 hover:text-white underline underline-offset-8 transition-colors">EMAIL</a>
            <a href="https://linkedin.com/in/kaif-khurshid" className="text-sm font-bold text-neutral-500 hover:text-white underline underline-offset-8 transition-colors">LINKEDIN</a>
            <a href="https://github.com/Kaifkhurshid7" className="text-sm font-bold text-neutral-500 hover:text-white underline underline-offset-8 transition-colors">GITHUB</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-800">© 2026 KAIF KHURSHID • XIM UNIVERSITY</p>
        </footer>

      </main>
    </div>
  );
};

export default App;