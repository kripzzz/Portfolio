import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Award, Star, Flame, Clapperboard, CheckCircle2, 
  Sparkles, ShieldCheck, ArrowUpRight 
} from 'lucide-react';

const achievementCards = [
  {
    title: 'Winner of 2 National Case Competitions',
    org: 'Premier National B-School Challenges',
    year: '2025 - 2026',
    tag: 'National Champion',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    desc: 'Secured 1st Place across 2 prestigious national-level management case challenges, delivering data-driven business models and executive strategy solutions.',
    icon: <Trophy className="w-6 h-6 text-amber-400" />
  },
  {
    title: 'National Finalist — MDI, IIM & SIBM',
    org: 'MDI Gurgaon | IIM Kashipur | SIBM Pune',
    year: '2025 - 2026',
    tag: 'Top 1% Nationwide',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    desc: 'Selected as National Finalist in flagship case competitions hosted by top Indian management institutes among thousands of pan-India teams.',
    icon: <Flame className="w-6 h-6 text-amber-400" />
  },
  {
    title: 'State Street Corporate Proficiency Award',
    org: 'State Street Corporation',
    year: '2024',
    tag: 'Corporate Excellence',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    desc: 'Recognized for >98% reconciliation accuracy across cash, collateral, and FX forwards, leading break calls, and macro automation.',
    icon: <Star className="w-6 h-6 text-cyan" />
  },
  {
    title: 'State Film Award — "Neele Neele"',
    org: 'All Kerala Short Film Festival',
    year: 'Award Winning',
    tag: 'Cinematic Recognition',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    desc: 'Awarded state-level felicitation for lead acting performance and creative storytelling in the critically acclaimed short film "Neele Neele".',
    icon: <Clapperboard className="w-6 h-6 text-pink-400" />
  },
  {
    title: 'All-India Rank 7th — MEC Scholarship',
    org: 'MEC National Talent Search',
    year: '2012',
    tag: 'National Merit',
    badgeColor: 'text-violet bg-violet/10 border-violet/30',
    desc: 'Conferred National 7th Rank scholarship award for exceptional quantitative reasoning and logical problem-solving aptitude.',
    icon: <Award className="w-6 h-6 text-violet" />
  },
  {
    title: '1st Position — Business Quiz Championship',
    org: 'Intra-Commerce Management Fest',
    year: '2022',
    tag: '1st Place Winner',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    desc: 'Secured 1st Place in inter-departmental quiz evaluating financial acumen, macroeconomic indicators, and corporate business strategy.',
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-magenta/30 bg-magenta/10 text-magenta text-xs font-mono tracking-widest uppercase mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>06 — MILESTONES & RECOGNITION</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Awards & Key Accolades.
          </h3>
          <p className="text-white/70 max-w-xl mx-auto text-base font-sans">
            Competitive trophies, corporate proficiency honors, and artistic recognition earned across national platforms.
          </p>
        </motion.div>

        {/* Accolades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementCards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-7 rounded-3xl border border-white/15 bg-[#030712]/80 hover:border-magenta/50 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${item.badgeColor} font-bold uppercase tracking-wider`}>
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-white/50">{item.year}</span>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform flex-none">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-magenta transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <h5 className="text-xs font-mono text-cyan mt-1 font-semibold">{item.org}</h5>
                  </div>
                </div>

                <p className="text-white/80 font-sans text-sm leading-relaxed mt-4">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>VERIFIED RECOGNITION</span>
                <span className="text-magenta font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-magenta" /> RECORDED
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
