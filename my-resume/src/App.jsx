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
                As the Chairperson of ACM Student Chapter at XIM University, I engineer intelligent backend solutions and bridge the gap between AI and core architecture.
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

        {/* 3. BENTO SKILLS: FULLY STACKABLE GRID */}
        <section id="tech" className="py-20 border-t border-white/5">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-bold mb-12 text-center">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* CARD 1 */}
            <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-[2rem] group hover:border-blue-500/50 transition-all">
              <Terminal className="text-blue-500 mb-6" size={32}/>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Core Tech</h3>
              <p className="text-sm leading-relaxed text-gray-500">Python, Java, Node.js, Express, Flask, MySQL, MongoDB</p>
            </div>

            {/* CARD 2 */}
            <div className="p-8 bg-[#0c0c0c] border border-white/5 rounded-[2rem] group hover:border-purple-500/50 transition-all">
              <Brain className="text-purple-500 mb-6" size={32}/>
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">AI & ML</h3>
              <p className="text-sm leading-relaxed text-gray-500">TensorFlow, Scikit-Learn, OpenCV, NLP, Data Analytics</p>
            </div>

            {/* CARD 3 - SPANS FULL WIDTH ON TABLET */}
            <div className="md:col-span-2 lg:col-span-1 p-8 bg-white text-black rounded-[2rem]">
              <Award className="mb-6" size={32}/>
              <h3 className="font-black mb-2 uppercase tracking-tight text-xl">ACM Chairperson</h3>
              <p className="text-xs font-bold opacity-60 uppercase tracking-widest leading-relaxed">Leading tech community & 60+ members at XIM University.</p>
            </div>
          </div>
        </section>

        {/* 4. WORK SECTION: CLEAN CARDS */}
        <section id="work" className="py-20">
          <div className="space-y-4">
            {[
              { title: "ACM-XIM Envoy", role: "Fullstack Platform", year: "2024" },
              { title: "Instrument AI", role: "Signal Processing", year: "2025" }
            ].map((p, i) => (
              <div key={i} className="group border-b border-white/5 py-10 flex flex-col md:flex-row md:items-center justify-between transition-all px-4 hover:bg-white/5 rounded-2xl">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-white group-hover:italic transition-all uppercase tracking-tighter">{p.title}</h3>
                  <p className="text-gray-600 uppercase text-[10px] tracking-[0.3em] mt-2 font-bold">{p.role}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <span className="text-neutral-700 font-mono">{p.year}</span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100">
                    <ExternalLink size={16}/>
                  </div>
                </div>
              </div>
            ))}
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