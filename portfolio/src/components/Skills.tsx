import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2, ChevronDown } from 'lucide-react';

const resumeCoreSkills = [
  'DATA ANALYSIS',
  'POWER BI',
  'PROBLEM SOLVING',
  'MS OFFICE SUITE',
  'STAKEHOLDER MANAGEMENT'
];

const skillCategories = [
  {
    id: 'analytics',
    label: 'DATA ANALYSIS & BI',
    color: 'text-violet border-violet/40 bg-violet/10',
    skills: [
      'Power BI Dashboards',
      'Data Analysis & Cleaning',
      'Excel Macros & VBA Automation',
      'SQL & Dataset Mapping',
      'Predictive Analytics',
      'Variance & Turnaround Modeling'
    ]
  },
  {
    id: 'finance',
    label: 'FINANCE & RECONCILIATIONS',
    color: 'text-magenta border-magenta/40 bg-magenta/10',
    skills: [
      'Multi-Asset Reconciliations (>98% Accuracy)',
      'Cash, Collateral & Holdings Controls',
      'FX Forwards & Securities Lending',
      'SmartStream TLM Platform',
      'Financial Ratio & Valuation Analysis (HPCL)',
      'Weekly Management Break Resolution'
    ]
  },
  {
    id: 'operations',
    label: 'OPERATIONS & ERP',
    color: 'text-cyan border-cyan/40 bg-cyan/10',
    skills: [
      'Microsoft Dynamics 365 (Certified)',
      'Field Stock Audits & Leakage Tracking',
      'Departmental PAR Level Calibration',
      'BPMN 2.0 Process Modeling (Bizagi)',
      'Order-to-Cash & P2P Architecture',
      'Predictive Procurement Reorder Planning'
    ]
  },
  {
    id: 'leadership',
    label: 'LEADERSHIP & PROBLEM SOLVING',
    color: 'text-emerald-400 border-emerald-400/40 bg-emerald-500/10',
    skills: [
      'Cross-Functional Stakeholder Management',
      'Strategic Problem Solving',
      'Generative AI Business Transformation (IBM)',
      'Enterprise Client Onboarding (5+ Clients)',
      'Founding Member E-Cell Governance',
      'MS Office Suite (Advanced Excel / PowerPoint)'
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative min-h-screen py-24 bg-[#030712] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 — CORE SKILLS & CAPABILITIES</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Capabilities Constellation.
          </h3>
          <p className="text-white/70 text-base max-w-xl mx-auto font-sans">
            Click any constellation node to explore domain skillsets across Analytics, Finance, ERP Operations, and Leadership.
          </p>
        </motion.div>

        {/* Primary Resume Skills Banner */}
        <div className="glass-panel p-6 rounded-3xl bg-[#0B0F19]/90 border border-cyan/30 shadow-2xl mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan" />
              <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
                Key Skills (Direct from Resume / CV)
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full">
              5 Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {resumeCoreSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/50 hover:bg-cyan/10 transition-all flex items-center justify-center text-center group"
              >
                <span className="text-xs font-mono font-bold text-white group-hover:text-cyan transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Interactive Constellation View */}
        <div className="hidden lg:flex relative h-[520px] w-full items-center justify-center">
          {/* Constellation Center */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan rounded-full shadow-[0_0_35px_#00E5FF] z-30 flex items-center justify-center cursor-pointer"
            onClick={() => setActiveCategory(null)}
          >
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>

          {skillCategories.map((cat, i) => {
            const angle = (i * (360 / skillCategories.length)) * (Math.PI / 180);
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeCategory === cat.id;

            return (
              <React.Fragment key={cat.id}>
                {/* Connecting Line to Center */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" 
                     style={{ width: 600, height: 600, overflow: 'visible' }}>
                  <motion.line 
                    x1={0} y1={0} x2={x} y2={y}
                    stroke="rgba(0, 229, 255, 0.35)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Category Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute z-40"
                  style={{ x, y }}
                >
                  <div 
                    className="relative group cursor-pointer"
                    onClick={() => setActiveCategory(isActive ? null : cat.id)}
                  >
                    <div className={`absolute inset-0 bg-cyan blur-xl transition-opacity duration-300 rounded-full ${isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'}`} />
                    <div className={`glass-panel px-6 py-3 rounded-full border transition-all duration-300 bg-[#0B0F19]/90 shadow-lg ${isActive ? 'border-cyan bg-cyan/20 shadow-[0_0_20px_rgba(0,229,255,0.4)]' : 'border-white/20 group-hover:border-white/40'}`}>
                      <span className={`text-xs font-mono tracking-widest ${isActive ? 'text-cyan font-bold' : 'text-white'}`}>
                        {cat.label}
                      </span>
                    </div>
                  </div>

                  {/* Skills Nodes (Expanded) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        {cat.skills.map((skill, skillIdx) => {
                          const skillAngle = (skillIdx * (360 / cat.skills.length)) * (Math.PI / 180);
                          const skillRadius = 120;
                          const sX = Math.cos(skillAngle) * skillRadius;
                          const sY = Math.sin(skillAngle) * skillRadius;

                          return (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1, x: sX, y: sY }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ type: 'spring', delay: skillIdx * 0.04 }}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-50 pointer-events-auto"
                            >
                              <div className="bg-[#030712] border border-cyan/40 px-3.5 py-1.5 rounded-xl text-xs font-sans text-white shadow-2xl hover:border-cyan hover:bg-cyan/10 transition-colors">
                                {skill}
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile / Tablet Interactive Accordion View */}
        <div className="lg:hidden space-y-4 max-w-lg mx-auto">
          {skillCategories.map((cat) => {
            const isExpanded = activeCategory === cat.id;
            return (
              <div 
                key={cat.id} 
                className="glass-panel rounded-2xl border border-white/15 bg-[#0B0F19]/90 overflow-hidden"
              >
                <button
                  onClick={() => setActiveCategory(isExpanded ? null : cat.id)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="text-xs font-mono font-bold text-white tracking-wider">{cat.label}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="p-4 pt-0 border-t border-white/5 space-y-2"
                    >
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="text-xs text-white/80 font-sans flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
