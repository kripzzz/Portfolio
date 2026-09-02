import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT', id: 'about' },
  { name: 'EXPERIENCE', id: 'experience' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'ACHIEVEMENTS', id: 'achievements' },
  { name: 'CONTACT', id: 'contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel bg-[#030712]/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-display font-black tracking-tighter text-white hover:text-cyan transition-colors">
          PORTFOLIO<span className="text-cyan">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8 items-center text-xs font-mono tracking-widest">
          {navItems.map((item, index) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="relative group py-2"
            >
              <span className={`transition-colors duration-300 ${activeSection === item.id ? 'text-cyan font-bold' : 'text-white/70 hover:text-white'}`}>
                {String(index + 1).padStart(2, '0')} — {item.name}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan shadow-[0_0_8px_#00E5FF]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="md:hidden flex flex-col items-end text-white font-mono text-xs">
          <span className="text-white/60">{String(navItems.findIndex(i => i.id === activeSection) + 1).padStart(2, '0')} / {String(navItems.length).padStart(2, '0')}</span>
          <span className="text-cyan font-bold">{activeSection.toUpperCase()}</span>
        </div>
      </div>
    </motion.nav>
  );
}
