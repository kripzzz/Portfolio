import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Workflow, ShieldAlert, BarChart3, Sliders, CheckCircle2, Award, Zap } from 'lucide-react';

const experiences = [
  {
    year: '2026',
    period: 'Apr 2026 - Jun 2026',
    role: 'Operations Intern',
    company: 'Quick Clean Laundry Solutions',
    desc: 'Conducted field audits & data analysis across healthcare linen inventory workflows. Designed & built an Inventory Tracking Portal & a Linen Lifecycle Management Platform.',
    deliverablesList: [
      { text: 'Designed & deployed the Inventory Tracking Portal for daily dispatch and ward count logging', icon: <LayoutDashboard className="w-4 h-4 text-cyan" /> },
      { text: 'Built the Linen Lifecycle Management Platform standardizing circulation & wash tracking', icon: <Workflow className="w-4 h-4 text-cyan" /> },
      { text: 'Executed physical stock audits uncovering ₹3.13L of missing linen in a single quarter', icon: <ShieldAlert className="w-4 h-4 text-cyan" /> },
      { text: 'Formulated 8 analytical models (PAR optimization, variance tracking & discard rate analysis)', icon: <BarChart3 className="w-4 h-4 text-cyan" /> },
      { text: 'Quantified stock deficits up to 39% below benchmark to guide procurement replenishment', icon: <Sliders className="w-4 h-4 text-cyan" /> }
    ],
    impact: '₹3.13L',
    impactLabel: 'Missing Linen Uncovered',
    skills: ['Data Analysis', 'Procurement', 'Inventory', 'Platform Design', 'PAR Modeling']
  },
  {
    year: '2022 - 2025',
    period: 'Jul 2022 - Jun 2025',
    role: 'Associate 2 Reconciliations',
    company: 'State Street',
    desc: 'Executed reconciliations across cash, collateral, FX forwards, securities lending & holdings with >98% accuracy. Streamlined client onboarding and enhanced process efficiency via automation.',
    deliverablesList: [
      { text: 'Conducted high-volume reconciliations across cash, collateral, FX & holdings (>98% accuracy)', icon: <CheckCircle2 className="w-4 h-4 text-violet" /> },
      { text: 'Led weekly break resolution calls with senior management cutting discrepancies by 20%', icon: <Zap className="w-4 h-4 text-violet" /> },
      { text: 'Streamlined client onboarding for 5+ major financial institutions through automated data mapping', icon: <Award className="w-4 h-4 text-violet" /> },
      { text: 'Built Excel macro automation & Smart Stream TLM rules reducing manual errors by ~40%', icon: <Sliders className="w-4 h-4 text-violet" /> }
    ],
    impact: '20%',
    impactLabel: 'Discrepancies Cut',
    skills: ['Reconciliations', 'Automation', 'Risk Controls', 'Smart Stream TLM']
  }
];

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0); // default to latest (2026)

  return (
    <section id="experience" className="relative min-h-screen py-24 bg-[#030712] overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet/10 via-[#030712] to-[#030712] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-violet mb-4">03 — EXPERIENCE & TRACK RECORD</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Professional Journey.</h3>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          {/* Timeline Nodes */}
          <div className="md:w-1/4 relative flex md:flex-col justify-between md:justify-start space-y-0 md:space-y-12 items-center md:items-start border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 pl-0 md:pl-8">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.year}
                className="relative cursor-pointer group w-full"
                onClick={() => setActiveExp(idx)}
              >
                {/* Active Indicator Line */}
                {activeExp === idx && (
                  <motion.div 
                    layoutId="active-timeline"
                    className="hidden md:block absolute top-0 -left-[33px] w-[2px] h-full bg-violet shadow-[0_0_10px_#8B5CF6]"
                  />
                )}
                
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeExp === idx ? 'bg-violet ring-4 ring-violet/20' : 'bg-white/20 group-hover:bg-white/40'}`} />
                  <span className={`text-2xl font-display font-bold transition-colors ${activeExp === idx ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                    {exp.year}
                  </span>
                </div>
                <div className="text-xs font-mono text-cyan mt-1 pl-6 hidden md:block">
                  {exp.company}
                </div>
              </div>
            ))}
          </div>

          {/* Details Card */}
          <div className="md:w-3/4 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 md:p-12 rounded-3xl border border-white/15 relative overflow-hidden bg-[#0B0F19]/80 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-cyan tracking-widest uppercase mb-1 block">
                      {experiences[activeExp].period || experiences[activeExp].year}
                    </span>
                    <h4 className="text-3xl font-display font-bold text-white">
                      {experiences[activeExp].role}
                    </h4>
                    <h5 className="text-lg font-sans text-violet mt-1">
                      {experiences[activeExp].company}
                    </h5>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
                    <span className="text-3xl font-display font-black text-cyan">
                      {experiences[activeExp].impact}
                    </span>
                    <span className="text-xs font-mono text-white/60 uppercase">
                      {experiences[activeExp].impactLabel}
                    </span>
                  </div>
                </div>

                <p className="text-white/80 font-sans text-base leading-relaxed mb-6">
                  {experiences[activeExp].desc}
                </p>

                {/* What I Actually Delivered with Custom Icons */}
                {experiences[activeExp].deliverablesList && (
                  <div className="mb-8">
                    <h5 className="text-xs font-mono text-white/50 tracking-widest uppercase mb-3">
                      Key Deliverables & Responsibilities
                    </h5>
                    <div className="space-y-2.5">
                      {experiences[activeExp].deliverablesList.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                          <div className="mt-0.5 flex-none p-1 rounded-lg bg-white/5">
                            {deliv.icon}
                          </div>
                          <span className="text-sm font-sans text-white/90 leading-snug">
                            {deliv.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h5 className="text-xs font-mono text-white/50 tracking-widest uppercase mb-3">
                    Technologies & Methodologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExp].skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/90">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
