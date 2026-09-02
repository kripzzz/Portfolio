import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, GraduationCap, Award, BadgeCheck, Users, Sparkles, 
  CheckCircle2, BookOpen, Star, Building2, Flame, Clapperboard, 
  Film, Mic, HeartHandshake, Rocket, Calendar, Target, Zap, 
  ShieldCheck, Layers, BarChart3, Sliders, ChevronDown, ChevronUp,
  Eye, MousePointerClick
} from 'lucide-react';

interface TimelinePoint {
  text: string;
  icon: any;
}

interface TimelineEntry {
  period: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  shortSummary: string;
  points: TimelinePoint[];
  highlight: string;
  icon: any;
}

const qualificationsTimeline: TimelineEntry[] = [
  {
    period: '2025 - 2027',
    badge: 'POST GRADUATION',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    title: 'Post Graduate Diploma in Management (PGDM)',
    subtitle: 'Great Lakes Institute of Management, Gurgaon',
    shortSummary: 'Operations, Finance & Analytics Specialization. Elected Vice-President of the Analytics Club.',
    points: [
      { text: 'Executive Leadership: VP of Analytics Club & Hackathon Director', icon: <Users className="w-3.5 h-3.5 text-cyan" /> },
      { text: '2x National Case Competition Winner (MDI, IIM, SIBM Finalist)', icon: <Trophy className="w-3.5 h-3.5 text-amber-400" /> },
      { text: 'Core Studies: ERP Systems, BPMN 2.0 Mapping & Supply Chain Analytics', icon: <Layers className="w-3.5 h-3.5 text-violet" /> }
    ],
    highlight: 'Analytics & Operations Specialization',
    icon: <GraduationCap className="w-5 h-5 text-cyan" />
  },
  {
    period: '2019 - 2022',
    badge: 'GRADUATION',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    title: "Bachelor's Degree in Commerce & Business (B.Com)",
    subtitle: 'Undergraduate Commerce & Management Program',
    shortSummary: 'Comprehensive grounding in Financial Accounting, Corporate Finance, Costing, Auditing, and Statistics.',
    points: [
      { text: '1st Place Winner: Intra-Commerce Business & Finance Quiz (2022)', icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> },
      { text: '1st Place Champion: Intra-Fest Mega Dance Championship (2020)', icon: <Sparkles className="w-3.5 h-3.5 text-pink-400" /> }
    ],
    highlight: 'Commerce & Financial Foundation',
    icon: <BookOpen className="w-5 h-5 text-cyan" />
  },
  {
    period: '2017 - 2019',
    badge: 'HIGHER SECONDARY (12TH)',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    title: 'Class XII — Higher Secondary Certificate',
    subtitle: 'Commerce Stream',
    shortSummary: 'Study of Accountancy, Business Studies, Economics, and Commercial Applications.',
    points: [
      { text: 'Higher Secondary Board Examination Distinction in Commerce', icon: <Award className="w-3.5 h-3.5 text-cyan" /> }
    ],
    highlight: 'Commerce Stream Distinction',
    icon: <GraduationCap className="w-5 h-5 text-cyan" />
  },
  {
    period: '2016 - 2017',
    badge: 'SECONDARY SCHOOL (10TH)',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    title: 'Class X — Secondary School Certificate',
    subtitle: 'Secondary School Education Board',
    shortSummary: 'Foundational schooling with distinction across Mathematics, Science, and Analytical Studies.',
    points: [
      { text: 'All-India 7th Rank in MEC National Merit Scholarship (2012)', icon: <Star className="w-3.5 h-3.5 text-amber-400" /> }
    ],
    highlight: 'All-India Rank 7th — MEC Scholarship Awardee',
    icon: <Award className="w-5 h-5 text-cyan" />
  }
];

const awardsTimeline: TimelineEntry[] = [
  {
    period: '2025 - 2026',
    badge: 'NATIONAL CHAMPION',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    title: 'Winner of 2 National Case Competitions',
    subtitle: 'National B-School Challenges',
    shortSummary: 'Clinched 1st Place across 2 prestigious national management case challenges.',
    points: [
      { text: 'Engineered quantitative ROI, business feasibility & supply chain models', icon: <BarChart3 className="w-3.5 h-3.5 text-amber-400" /> },
      { text: 'Evaluated & awarded by senior corporate industry juries', icon: <Trophy className="w-3.5 h-3.5 text-amber-400" /> }
    ],
    highlight: '1st Place Champion (2 Trophies)',
    icon: <Trophy className="w-5 h-5 text-amber-400" />
  },
  {
    period: '2025 - 2026',
    badge: 'NATIONAL FINALIST',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    title: 'National Finalist in 3 Elite B-School Challenges',
    subtitle: 'MDI Gurgaon | IIM Kashipur | SIBM Pune',
    shortSummary: 'Selected among top national finalists across thousands of competing teams pan-India.',
    points: [
      { text: 'MDI Gurgaon & IIM Kashipur Strategic Operations Finalist', icon: <Target className="w-3.5 h-3.5 text-amber-400" /> },
      { text: 'SIBM Pune Business Strategy Challenge Finalist', icon: <Flame className="w-3.5 h-3.5 text-amber-400" /> }
    ],
    highlight: 'Top 1% Management Teams Pan-India',
    icon: <Flame className="w-5 h-5 text-amber-400" />
  },
  {
    period: 'State Award',
    badge: 'STATE FILM AWARD',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    title: 'Short Film Award — "Neele Neele"',
    subtitle: 'All Kerala Short Film Festival',
    shortSummary: 'State-level felicitation for lead acting performance and creative storytelling.',
    points: [
      { text: 'Recognized for emotive depth and cinematic expression', icon: <Film className="w-3.5 h-3.5 text-pink-400" /> }
    ],
    highlight: 'Award Winner at All Kerala Short Film Festival',
    icon: <Clapperboard className="w-5 h-5 text-pink-400" />
  },
  {
    period: '2024',
    badge: 'CORPORATE RECOGNITION',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    title: 'State Street Corporate Proficiency Award',
    subtitle: 'State Street Corporation',
    shortSummary: 'Awarded for maintaining >98% reconciliation accuracy and Excel automation.',
    points: [
      { text: 'Led break resolution calls cutting discrepancy backlog by 20%', icon: <Zap className="w-3.5 h-3.5 text-cyan" /> },
      { text: 'Built macro automation cutting exception turnaround time by ~25%', icon: <Sliders className="w-3.5 h-3.5 text-cyan" /> }
    ],
    highlight: '>98% Accuracy & Automation Award',
    icon: <Star className="w-5 h-5 text-cyan" />
  },
  {
    period: '2012',
    badge: 'NATIONAL MERIT',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    title: 'All-India Rank 7th — MEC Scholarship',
    subtitle: 'National Talent Examination',
    shortSummary: 'All-India 7th Rank scholarship awardee in competitive quantitative reasoning.',
    points: [
      { text: 'Top 10 national ranking for analytical logic & math aptitude', icon: <Award className="w-3.5 h-3.5 text-amber-400" /> }
    ],
    highlight: 'National Rank 7th Scholar',
    icon: <Award className="w-5 h-5 text-amber-400" />
  }
];

const certificationsTimeline: TimelineEntry[] = [
  {
    period: '2026',
    badge: 'ENTERPRISE ERP',
    badgeColor: 'text-violet bg-violet/10 border-violet/30',
    title: 'Introduction to Microsoft Dynamics 365',
    subtitle: 'Microsoft',
    shortSummary: 'Certified in Microsoft Dynamics 365 cloud enterprise fundamentals and supply chain ERP.',
    points: [
      { text: 'Procure-to-Pay, Order-to-Cash & Inventory Module Interoperability', icon: <ShieldCheck className="w-3.5 h-3.5 text-violet" /> },
      { text: 'Cloud ERP configuration and CRM system integration', icon: <Layers className="w-3.5 h-3.5 text-violet" /> }
    ],
    highlight: 'Microsoft Certified Enterprise Specialist',
    icon: <BadgeCheck className="w-5 h-5 text-violet" />
  },
  {
    period: '2026',
    badge: 'AI & TRANSFORMATION',
    badgeColor: 'text-violet bg-violet/10 border-violet/30',
    title: 'Generative AI: Business Transformation & Career Growth',
    subtitle: 'IBM',
    shortSummary: 'Certified by IBM on enterprise adoption of GenAI, Large Language Models (LLMs), and workflow transformation.',
    points: [
      { text: 'Leveraging LLMs for operational decision intelligence', icon: <Sparkles className="w-3.5 h-3.5 text-violet" /> },
      { text: 'Prompt architecture & automated business reporting', icon: <Zap className="w-3.5 h-3.5 text-violet" /> }
    ],
    highlight: 'IBM Certified Generative AI for Business',
    icon: <Sparkles className="w-5 h-5 text-violet" />
  }
];

const leadershipTimeline: TimelineEntry[] = [
  {
    period: 'Founding Team',
    badge: 'FOUNDING LEADERSHIP',
    badgeColor: 'text-magenta bg-magenta/10 border-magenta/30',
    title: 'Founding Member — Entrepreneurship Cell (E-Cell)',
    subtitle: 'Campus Innovation & Startup Ecosystem',
    shortSummary: 'Co-founded campus E-Cell to foster student ventures and startup incubation.',
    points: [
      { text: 'Drafted institutional bylaws and mentorship governance structure', icon: <Rocket className="w-3.5 h-3.5 text-magenta" /> },
      { text: 'Organized venture ideation bootcamps and investor pitch sessions', icon: <Target className="w-3.5 h-3.5 text-magenta" /> }
    ],
    highlight: 'Founding Leader of Campus E-Cell',
    icon: <Rocket className="w-5 h-5 text-magenta" />
  },
  {
    period: '2026 - 2027',
    badge: 'EXECUTIVE BOARD',
    badgeColor: 'text-magenta bg-magenta/10 border-magenta/30',
    title: 'Vice-President — Analytics Club',
    subtitle: 'Great Lakes Institute of Management, Gurgaon',
    shortSummary: 'Elected executive board lead spearheading analytics workshops and competitions.',
    points: [
      { text: 'Conducting Power BI, SQL & Python analytical training bootcamps', icon: <BarChart3 className="w-3.5 h-3.5 text-cyan" /> },
      { text: 'Organizing national analytics case hackathons & industry talks', icon: <Users className="w-3.5 h-3.5 text-cyan" /> }
    ],
    highlight: 'Elected Vice-President (Analytics Board)',
    icon: <Users className="w-5 h-5 text-magenta" />
  },
  {
    period: '2025',
    badge: 'CAMPUS LEADERSHIP',
    badgeColor: 'text-magenta bg-magenta/10 border-magenta/30',
    title: 'Core Management Coordinator — CREST 2025',
    subtitle: 'Flagship Annual Management Festival',
    shortSummary: 'Managed operations, corporate guest relations, and sponsorship logistics.',
    points: [
      { text: 'Led end-to-end event execution for 1000+ national participants', icon: <Building2 className="w-3.5 h-3.5 text-magenta" /> }
    ],
    highlight: 'Flagship Fest Operations Lead',
    icon: <Building2 className="w-5 h-5 text-magenta" />
  }
];

const hobbiesTimeline: TimelineEntry[] = [
  {
    period: 'Award Winning',
    badge: 'ACTING & CINEMATIC ARTS',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    title: 'Award-Winning Actor — Short Film "Neele Neele"',
    subtitle: 'All Kerala Short Film Festival',
    shortSummary: 'Lead performance in award-winning short film praised for dramatic expression.',
    points: [
      { text: 'State-level award winner at the All Kerala Short Film Festival', icon: <Clapperboard className="w-3.5 h-3.5 text-pink-400" /> },
      { text: 'Nuanced character portrayal and collaborative screen performance', icon: <Film className="w-3.5 h-3.5 text-pink-400" /> }
    ],
    highlight: 'State Film Award Winner',
    icon: <Film className="w-5 h-5 text-pink-400" />
  },
  {
    period: '2020 Champion',
    badge: 'DANCE & CHOREOGRAPHY',
    badgeColor: 'text-cyan bg-cyan/10 border-cyan/30',
    title: '1st Position Champion — Mega Dance Competition',
    subtitle: 'Intra-Fest Mega Dance Championship (2020)',
    shortSummary: 'Trained dancer and choreographer across contemporary and classical styles.',
    points: [
      { text: '1st Position Champion in Intra-Fest Mega Dance Championship', icon: <Trophy className="w-3.5 h-3.5 text-cyan" /> },
      { text: 'Choreographed group stage showcases and cultural events', icon: <Sparkles className="w-3.5 h-3.5 text-cyan" /> }
    ],
    highlight: '1st Place Champion in Mega Dance',
    icon: <Sparkles className="w-5 h-5 text-cyan" />
  },
  {
    period: 'Creative Pursuit',
    badge: 'VOCAL MUSIC',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    title: 'Singing & Vocal Music Performance',
    subtitle: 'Acoustic & Classical Vocal Arts',
    shortSummary: 'Vocal music performer across acoustic and cultural ensemble platforms.',
    points: [
      { text: 'Acoustic and classical vocal performances at collegiate showcases', icon: <Mic className="w-3.5 h-3.5 text-amber-400" /> }
    ],
    highlight: 'Vocal Performer & Cultural Artist',
    icon: <Mic className="w-5 h-5 text-amber-400" />
  }
];

const mindNodes = [
  { id: 'strategy', label: 'STRATEGY', color: 'bg-cyan', desc: 'Connecting strategic intent to actionable roadmaps and long-term operating models.' },
  { id: 'analytics', label: 'ANALYTICS', color: 'bg-violet', desc: 'Quantitative problem solving, Power BI dashboards, SQL, and predictive analytics.' },
  { id: 'finance', label: 'FINANCE', color: 'bg-magenta', desc: 'Multi-asset reconciliations, financial ratio modeling, and risk governance.' },
  { id: 'technology', label: 'OPERATIONS', color: 'bg-electric-blue', desc: 'Enterprise ERP systems (MS Dynamics 365), BPMN 2.0 mapping, and inventory control.' },
  { id: 'execution', label: 'LEADERSHIP', color: 'bg-indigo', desc: 'Founding member of E-Cell, VP Analytics Club, and cross-functional project delivery.' }
];

export default function About() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'education' | 'awards' | 'certifications' | 'leadership' | 'hobbies'>('education');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // all items closed by default

  const getActiveTimeline = () => {
    switch (activeTab) {
      case 'education': return { list: qualificationsTimeline, label: 'Educational Qualifications' };
      case 'awards': return { list: awardsTimeline, label: 'National Awards & Honors' };
      case 'certifications': return { list: certificationsTimeline, label: 'Professional Certifications' };
      case 'leadership': return { list: leadershipTimeline, label: 'Positions of Responsibility' };
      case 'hobbies': return { list: hobbiesTimeline, label: 'Hobbies & Creative Arts' };
    }
  };

  const { list: activeList, label: activeLabel } = getActiveTimeline();

  const handleTabChange = (tabId: any) => {
    setActiveTab(tabId);
    setExpandedIndex(null); // start closed on tab switch
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#0B0F19] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan/10 via-[#0B0F19] to-[#030712] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Top Split: Executive Mindset & Interactive Constellation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-mono tracking-[0.3em] text-cyan mb-4">02 — ABOUT & EXECUTIVE PROFILE</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-white">
                An ecosystem <br /> of <span className="text-gradient">thinking.</span>
              </h3>
              <p className="text-white/80 font-sans leading-relaxed text-base md:text-lg mb-6">
                A results-driven management professional skilled in process optimization, multi-asset financial reconciliations, and cross-functional leadership. I focus on translating strategy into structured plans and delivering actionable outcomes.
              </p>
              <div className="flex gap-3">
                <div className="glass-panel px-4 py-3 rounded-2xl border border-white/10 text-center flex-1 bg-[#030712]/60">
                  <span className="block text-2xl font-display font-bold text-cyan">98%+</span>
                  <span className="text-[10px] font-mono text-white/60 uppercase">Accuracy</span>
                </div>
                <div className="glass-panel px-4 py-3 rounded-2xl border border-white/10 text-center flex-1 bg-[#030712]/60">
                  <span className="block text-2xl font-display font-bold text-violet">35 Mos</span>
                  <span className="text-[10px] font-mono text-white/60 uppercase">Experience</span>
                </div>
                <div className="glass-panel px-4 py-3 rounded-2xl border border-white/10 text-center flex-1 bg-[#030712]/60">
                  <span className="block text-base font-display font-bold text-magenta leading-tight mt-1">Finance • Ops</span>
                  <span className="text-[10px] font-mono text-white/60 uppercase">& Analytics</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Mind Nodes System */}
          <div className="lg:w-6/12 relative h-[400px] w-full flex items-center justify-center">
            {/* Central Node */}
            <motion.div 
              className="absolute z-20 glass-panel rounded-full w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center border-white/20 cursor-pointer hover:border-cyan transition-colors bg-[#030712]/80 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveNode(null)}
            >
              <span className="font-display font-black text-xl tracking-wider text-white">MIND</span>
              <span className="text-[10px] font-mono text-cyan">SYSTEM</span>
            </motion.div>

            {/* Orbiting Nodes */}
            {mindNodes.map((node, index) => {
              const angle = (index * (360 / mindNodes.length)) * (Math.PI / 180);
              const radius = 145;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = activeNode === node.id;

              return (
                <motion.div
                  key={node.id}
                  className="absolute z-30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  style={{
                    x: isActive ? 0 : x,
                    y: isActive ? 0 : y,
                  }}
                  animate={{
                    x: isActive ? 0 : x,
                    y: isActive ? 0 : y,
                    scale: isActive ? 1.15 : 1,
                    zIndex: isActive ? 40 : 30
                  }}
                >
                  <div 
                    className={`relative group cursor-pointer ${isActive ? 'pointer-events-none' : ''}`}
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                  >
                    <div className={`absolute inset-0 ${node.color} blur-xl opacity-20 group-hover:opacity-60 transition-opacity rounded-full`} />
                    <div className={`glass-panel px-4 py-2 rounded-full border ${isActive ? 'border-cyan bg-cyan/20' : 'border-white/10 hover:border-white/30'} hover-glow relative bg-[#030712]/90`}>
                      <span className="text-xs font-mono tracking-widest text-white">{node.label}</span>
                    </div>
                  </div>

                  {/* Connecting Line (SVG) */}
                  {!isActive && activeNode === null && (
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" 
                         style={{ width: radius * 2, height: radius * 2, overflow: 'visible' }}>
                      <motion.line 
                        x1={0} y1={0} x2={-x} y2={-y} 
                        stroke="rgba(0, 229, 255, 0.2)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </svg>
                  )}
                </motion.div>
              );
            })}

            {/* Active Node Info Panel */}
            <AnimatePresence>
              {activeNode && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-sm glass-panel p-5 rounded-2xl z-50 text-center bg-[#030712]/95 border border-cyan/40 shadow-2xl"
                >
                  <h4 className="text-base font-display font-bold mb-1.5 text-cyan">
                    {mindNodes.find(n => n.id === activeNode)?.label}
                  </h4>
                  <p className="text-xs text-white/80 font-sans">
                    {mindNodes.find(n => n.id === activeNode)?.desc}
                  </p>
                  <button 
                    onClick={() => setActiveNode(null)}
                    className="mt-3 text-[11px] font-mono text-cyan hover:text-white transition-colors uppercase tracking-wider"
                  >
                    CLOSE [X]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Chronological Multi-Tab Timeline Section */}
        <div className="pt-10 border-t border-white/10">
          
          <div className="text-center mb-8">
            <h4 className="text-xs font-mono tracking-widest text-cyan uppercase font-bold mb-2">
              Career Journey, Credentials & Leadership
            </h4>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Interactive Profile Timeline.
            </h3>
            <p className="text-white/70 max-w-lg mx-auto text-sm font-sans flex items-center justify-center gap-1.5">
              <MousePointerClick className="w-4 h-4 text-cyan" />
              <span>Click any card to expand full details</span>
            </p>
          </div>

          {/* Small Sleek Category Navigation Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-[#030712]/90 border border-white/15 backdrop-blur-xl shadow-2xl">
              {[
                { id: 'education', label: 'Qualifications', icon: <GraduationCap className="w-3.5 h-3.5" /> },
                { id: 'awards', label: 'Awards & Honors', icon: <Trophy className="w-3.5 h-3.5" /> },
                { id: 'certifications', label: 'Certifications', icon: <BadgeCheck className="w-3.5 h-3.5" /> },
                { id: 'leadership', label: 'Positions of Responsibility', icon: <Users className="w-3.5 h-3.5" /> },
                { id: 'hobbies', label: 'Hobbies & Creative Arts', icon: <Sparkles className="w-3.5 h-3.5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-magenta to-pink-600 text-white font-bold shadow-lg shadow-magenta/30 scale-100' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Header Tag */}
          <div className="flex items-center justify-between max-w-3xl mx-auto mb-8 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan" />
              <h5 className="text-xs font-mono tracking-widest text-cyan uppercase font-bold">
                {activeLabel} Timeline
              </h5>
            </div>
            <span className="text-[11px] font-mono text-cyan bg-cyan/10 border border-cyan/20 px-2.5 py-0.5 rounded-full">
              Click cards to toggle
            </span>
          </div>

          {/* Vertical Glowing Interactive Timeline */}
          <div className="max-w-3xl mx-auto relative">
            
            {/* Central Glowing Timeline Track Line */}
            <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan via-magenta to-violet opacity-30 shadow-[0_0_15px_rgba(0,229,255,0.4)]" />

            <div className="space-y-4 relative">
              {activeList.map((item, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div
                    key={idx}
                    className="relative pl-10 sm:pl-16 group"
                  >
                    {/* Glowing Milestone Timeline Node */}
                    <button 
                      onClick={() => toggleExpand(idx)}
                      aria-label="Toggle details"
                      className={`absolute left-1.5 sm:left-3.5 top-5 -translate-x-1/2 w-5 h-5 rounded-full bg-[#030712] border-2 cursor-pointer transition-all shadow-[0_0_15px_rgba(0,229,255,0.6)] flex items-center justify-center z-20 ${
                        isExpanded ? 'border-magenta scale-125' : 'border-cyan group-hover:border-white'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isExpanded ? 'bg-magenta' : 'bg-cyan'}`} />
                    </button>

                    {/* Interactive Accordion Milestone Card */}
                    <div 
                      onClick={() => toggleExpand(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(idx); }}
                      className={`glass-panel p-4 sm:p-5 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden cursor-pointer select-none ${
                        isExpanded 
                          ? 'bg-[#030712]/95 border-cyan shadow-[0_0_25px_rgba(0,229,255,0.15)] ring-1 ring-cyan/40' 
                          : 'bg-[#030712]/60 border-white/10 hover:border-white/30 hover:bg-[#030712]/85'
                      }`}
                    >
                      {/* Minimal Always-Visible Header Row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor} font-bold uppercase flex-none`}>
                            {item.badge}
                          </span>
                          <span className="text-xs font-mono text-cyan font-bold flex-none flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-cyan" /> {item.period}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-none">
                          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                            {item.icon}
                          </div>
                          <div className={`p-1 rounded-full text-xs font-mono transition-all flex items-center gap-1 ${
                            isExpanded ? 'bg-cyan text-black font-bold px-2' : 'bg-white/5 text-white/60 hover:text-white px-2'
                          }`}>
                            <span className="hidden sm:inline text-[10px] uppercase">{isExpanded ? 'CLOSE' : 'EXPAND'}</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="mt-2.5">
                        <h4 className={`text-base sm:text-lg font-display font-bold transition-colors leading-snug ${isExpanded ? 'text-cyan' : 'text-white'}`}>
                          {item.title}
                        </h4>
                        <h5 className="text-xs font-mono text-white/60 mt-0.5 truncate">
                          {item.subtitle}
                        </h5>
                      </div>

                      {/* Expandable Revealed Content (Instant CSS Grid Animation - 100% Reliable on click) */}
                      <div className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3.5 pt-3.5 border-t border-white/10' : 'grid-rows-[0fr] opacity-0'
                      }`}>
                        <div className="overflow-hidden">
                          {/* Crisp 1-Line Summary */}
                          <p className="text-white/85 font-sans text-xs sm:text-sm leading-relaxed mb-3">
                            {item.shortSummary}
                          </p>

                          {/* Concise Icon-Driven Bullet Points */}
                          {item.points && item.points.length > 0 && (
                            <div className="space-y-1.5 mb-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                              {item.points.map((pt, pIdx) => (
                                <div key={pIdx} className="flex items-start gap-2 text-xs text-white/85 font-sans leading-snug">
                                  <div className="mt-0.5 flex-none p-0.5 rounded bg-white/5">
                                    {pt.icon}
                                  </div>
                                  <span>{pt.text}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Footer Highlight */}
                          <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                            <span className="text-white/40">Status</span>
                            <span className="text-cyan font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-cyan" /> {item.highlight}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
