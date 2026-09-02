import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, ExternalLink, CheckCircle2, Shield, Layers, BarChart3, 
  Database, GitCommit, Network, Workflow, Activity, FileSpreadsheet, ArrowDown,
  TrendingDown, AlertCircle, Building2, Check, Sparkles, LayoutDashboard,
  ShieldAlert, Sliders, PackageCheck, Monitor, FileKey, Repeat, ShieldCheck,
  FileCheck, RefreshCw, BedDouble, Box, Calculator, ZoomIn, Eye, Image as ImageIcon,
  Maximize2
} from 'lucide-react';

interface DeliverableItem {
  title: string;
  desc: string;
  iconName: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  liveUrl?: string;
  valueProp: string;
  color: string;
  accent: string;
  borderHover: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  stat3: string;
  stat3Label: string;
  problem: string;
  whatIDid: string[];
  deliverables: DeliverableItem[];
  tools: string[];
  impact: string;
  diagramType: 'linen-flow' | 'blockchain-flow' | 'erp-architecture' | 'bpmn-swimlane';
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Healthcare Linen Inventory & Lifecycle System',
    category: 'OPERATIONS / SUPPLY CHAIN',
    tag: 'Quick Clean Laundry Solutions',
    valueProp: 'Optimizing healthcare linen rental inventory management through physical audits, PAR modeling & custom platforms.',
    color: 'from-cyan/20 to-blue-900/40',
    accent: 'text-cyan',
    borderHover: 'hover:border-cyan/50',
    stat1: '₹3.13L',
    stat1Label: 'Missing Linen Uncovered',
    stat2: '39%',
    stat2Label: 'Stock Deficits Quantified',
    stat3: '8',
    stat3Label: 'Analytical Assessments',
    diagramType: 'linen-flow',
    problem: 'Critical operational gaps in linen tracking and inventory controls at client hospitals leading to significant untracked loss, stockouts, and inefficient procurement replenishment cycles.',
    whatIDid: [
      'Conducted extensive on-ground physical stock audits across partner healthcare facility laundry operations.',
      'Uncovered ₹3.13 Lakh worth of missing linen within a single quarter, exposing governance breakdowns in circulation.',
      'Designed and executed 8 analytical models spanning PAR level optimization, daily variance tracking, discard rate analysis, and procurement forecasting.',
      'Quantified inventory deficits up to 39% below target thresholds to justify strategic procurement recommendations.',
      'Designed and built an Inventory Tracking Portal and Linen Lifecycle Management Platform to standardize workflows, centralize visibility, and ensure traceability.'
    ],
    deliverables: [
      {
        title: 'Inventory Tracking Portal',
        desc: 'Custom-built software application enabling daily logging of clean linen dispatches, soiled returns, and real-time ward balances.',
        iconName: 'LayoutDashboard'
      },
      {
        title: 'Linen Lifecycle Management Platform',
        desc: 'End-to-end operating platform tracking linen from procurement, ward distribution, laundry wash cycles, to discard disposal.',
        iconName: 'Workflow'
      },
      {
        title: 'Physical Audit & Leakage Investigation',
        desc: 'Complete on-ground stock count framework that uncovered ₹3.13 Lakh of unrecorded missing linen across hospital wards in a quarter.',
        iconName: 'ShieldAlert'
      },
      {
        title: '8 Analytical Assessment Models',
        desc: 'Comprehensive analytical suite covering PAR optimization, daily variance tracking, wear/tear discard ratios, and turnaround times.',
        iconName: 'BarChart3'
      },
      {
        title: 'Departmental PAR Benchmark Calibration',
        desc: 'Quantified critical stock deficits up to 39% below required PAR thresholds (OT, ICU, General Wards) to rebalance stock levels.',
        iconName: 'Sliders'
      },
      {
        title: 'Predictive Procurement Reorder Calculator',
        desc: 'Automated procurement planning formulas linked directly to hospital bed occupancy and turnaround rates to stop stockouts.',
        iconName: 'PackageCheck'
      }
    ],
    tools: ['Data Analytics', 'Physical Stock Audits', 'Process Optimization', 'Inventory Portal', 'PAR Level Modeling', 'Reorder Formulation'],
    impact: 'Established complete end-to-end inventory transparency, created standard operating procedures for daily circulation, and provided leadership with data-driven procurement models to prevent recurring financial leakages.'
  },
  {
    id: '02',
    title: 'Vishvasya Blockchain Land Registry & e-Registry',
    category: 'FINTECH / BLOCKCHAIN',
    tag: 'Live Web3 Prototype',
    liveUrl: 'https://nandhkishor3.github.io/Fintech_BlockChain_Project/',
    valueProp: 'Role-based government blockchain simulator for property title transfers, liens, and judicial oversight.',
    color: 'from-emerald-500/20 to-teal-900/40',
    accent: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/50',
    stat1: '100%',
    stat1Label: 'Immutable Traceability',
    stat2: '0',
    stat2Label: 'Title Tampering Risk',
    stat3: 'Live',
    stat3Label: 'Interactive Demo',
    diagramType: 'blockchain-flow',
    problem: 'Traditional land and property registries suffer from fraudulent title deeds, hidden encumbrances, overlapping liens, and lack of real-time multi-agency coordination between the judiciary, banks, and registrars.',
    whatIDid: [
      'Architected and deployed the "Vishvasya e-Registry" interactive role-based government blockchain prototype.',
      'Engineered a dual-panel interface: Left-side RBAC Government Portal (Citizen, Registrar, Judiciary, Bank) and Right-side live "mempool.space"-style ledger & consensus visualizer.',
      'Implemented strict constitutional separation of powers where the Judiciary mandates decrees and the Registrar executes on-chain.',
      'Built live mempool transaction queues, multi-node consensus algorithms (NIC Node network), and cryptographic SHA-256 block hashing.',
      'Enabled real-time encumbrance tracking, mortgage lien registrations, and automated audit trail generation.'
    ],
    deliverables: [
      {
        title: 'Dual-Panel Web3 Prototype',
        desc: 'Interactive dual-screen interface pairing an RBAC citizen/official portal with a live mempool and block explorer visualizer.',
        iconName: 'Monitor'
      },
      {
        title: 'Separation of Powers Smart Engine',
        desc: 'Constitutional rule framework guaranteeing only the Judiciary can mandate overrides while the Registrar executes on-chain.',
        iconName: 'Shield'
      },
      {
        title: 'NIC Consensus Node Simulator',
        desc: 'Multi-node network validator (Nodes 1-4) simulating block verification, pulse health checks, and Byzantine fault tolerance.',
        iconName: 'Network'
      },
      {
        title: 'Encumbrance & Mortgage Lien Registry',
        desc: 'Cryptographic property locking mechanism allowing commercial banks to register housing loans and prevent fraudulent resale.',
        iconName: 'FileKey'
      }
    ],
    tools: ['Blockchain Architecture', 'Smart Contract Logic', 'Fintech Systems', 'RBAC Security', 'Consensus Visualization'],
    impact: 'Demonstrated an airtight digital governance framework eliminating title fraud, streamlining dispute resolution, and providing tamper-proof public transparency with instant verification.'
  },
  {
    id: '03',
    title: 'Hospital Enterprise ERP System Design',
    category: 'ERP / SYSTEMS STRATEGY',
    tag: '200-Bed Multi-Specialty Hospital',
    valueProp: 'Enterprise ERP architecture connecting clinical, pharmacy, billing, and diagnostic ecosystems.',
    color: 'from-violet/20 to-purple-900/40',
    accent: 'text-violet',
    borderHover: 'hover:border-violet/50',
    stat1: '200+',
    stat1Label: 'Bed Hospital Scope',
    stat2: '8',
    stat2Label: 'Master Data Sets',
    stat3: '3',
    stat3Label: 'High-Volume Workflows',
    diagramType: 'erp-architecture',
    problem: 'Hospital functional silos between front-desk, pharmacy, laboratory, and billing causing delayed patient discharges, frequent drug stockouts, duplicate patient records, and revenue leakage from uncoordinated TPA claims.',
    whatIDid: [
      'Acted as ERP implementation consultant designing enterprise architecture for a 200-bed multi-specialty facility operating OPD, IPD, diagnostics, pharmacy, and OT.',
      'Formulated 8 essential master data sets (Patient Master, Item Master, Doctor Roster, Service Catalog, etc.) required prior to system go-live.',
      'Engineered 3 high-volume transaction lifecycles: Patient Registration-to-Discharge (Order-to-Cash), Pharmacy Procure-to-Dispense (P2P + Inventory), and Diagnostic Order-to-Result.',
      'Designed value-based approval workflows for high-value pharmaceuticals and medical equipment backed by strict automated budget checks.',
      'Identified and architected critical integration pipelines between Pharmacy/Inventory with Finance and EMR with Insurance/TPA.'
    ],
    deliverables: [
      {
        title: '8 Core Master Data Sets',
        desc: 'Standardized foundational master registries for Patients, Drugs, Services, Doctors, Tariffs, Beds, Vendors, and TPAs.',
        iconName: 'Database'
      },
      {
        title: 'Order-to-Cash (O2C) Hospital Blueprint',
        desc: 'Complete clinical-to-financial workflow integrating patient registration, consultations, pharmacy fulfillment, and final billing.',
        iconName: 'Repeat'
      },
      {
        title: 'Pharmacy P2P & 3-Way Match Control',
        desc: 'Procure-to-dispense architecture with automated 3-way matching between Purchase Orders, GRNs, and Supplier Invoices.',
        iconName: 'Layers'
      },
      {
        title: 'Value-Based Procurement Approval Matrix',
        desc: 'Automated expenditure governance with hard budget validations to prevent rogue orders and ensure NABH compliance.',
        iconName: 'ShieldCheck'
      }
    ],
    tools: ['ERP Strategy', 'Master Data Governance', 'Order-to-Cash (O2C)', 'Procure-to-Pay (P2P)', 'TPA Integration'],
    impact: 'Created a unified "one system, one patient record, one source of truth" blueprint that eliminates operational silos, prevents billing leaks, and ensures stringent NABH & regulatory compliance.'
  },
  {
    id: '04',
    title: 'Patient Discharge Process Model (BPMN 2.0)',
    category: 'BPMN / PROCESS DESIGN',
    tag: 'Healthcare Workflow Automation',
    valueProp: 'End-to-End BPMN 2.0 Process Documentation for patient discharge and cross-functional coordination.',
    color: 'from-magenta/20 to-pink-900/40',
    accent: 'text-magenta',
    borderHover: 'hover:border-magenta/50',
    stat1: '40%',
    stat1Label: 'Target Wait Reduction',
    stat2: '4',
    stat2Label: 'Integrated Swimlanes',
    stat3: 'BPMN 2.0',
    stat3Label: 'Standardized Model',
    diagramType: 'bpmn-swimlane',
    problem: 'Discharge delays caused by lack of sequential coordination between physician clearance, final billing calculation, pharmacy fulfillment, and bed-release management.',
    whatIDid: [
      'Documented and automated the cross-functional Patient Discharge process ahead of an enterprise ERP rollout.',
      'Designed a multi-lane BPMN 2.0 architecture spanning 4 distinct swimlanes: Physician, Billing / Finance, Pharmacy, and Nursing.',
      'Engineered 10+ core activities, 2 decision gateways, and dedicated exception handling for rejected cashless insurance claims with auto-conversion to self-pay.',
      'Configured business rules enforcing clinical fitness confirmation as an immutable prerequisite gate before downstream financial billing.',
      'Streamlined final bed-turnover coordination to optimize hospital bed occupancy and reduce overall patient turnaround time.'
    ],
    deliverables: [
      {
        title: '4-Swimlane BPMN 2.0 Model',
        desc: 'Comprehensive process diagram synchronizing Physician clearance, Billing, Pharmacy medication, and Nursing handoff.',
        iconName: 'Workflow'
      },
      {
        title: 'Clinical Fitness Prerequisite Gatekeeper',
        desc: 'Configured business rule that blocks downstream financial clearance until the attending physician signs the fitness gate.',
        iconName: 'FileCheck'
      },
      {
        title: 'Cashless TPA Exception Loop',
        desc: 'Dedicated recovery pathway that instantly converts rejected cashless claims into revised self-pay bills without stalling discharge.',
        iconName: 'RefreshCw'
      },
      {
        title: 'Bed Turnover & Release Coordination',
        desc: 'Integrated room sanitization triggers and porter dispatch to accelerate bed availability for incoming emergencies.',
        iconName: 'BedDouble'
      }
    ],
    tools: ['BPMN 2.0', 'Bizagi Process Modeler', 'Exception Flow Design', 'Swimlane Architecture', 'Workflow Automation'],
    impact: 'Provided leadership with an execution-ready baseline for ERP/EHR workflow automation, eliminating cross-departmental bottlenecks and slashing patient discharge wait times.'
  }
];

function getDeliverableIcon(iconName: string, accentClass: string) {
  const props = { className: `w-5 h-5 ${accentClass}` };
  switch (iconName) {
    case 'LayoutDashboard': return <LayoutDashboard {...props} />;
    case 'Workflow': return <Workflow {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'BarChart3': return <BarChart3 {...props} />;
    case 'Sliders': return <Sliders {...props} />;
    case 'PackageCheck': return <PackageCheck {...props} />;
    case 'Monitor': return <Monitor {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'Network': return <Network {...props} />;
    case 'FileKey': return <FileKey {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Repeat': return <Repeat {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'FileCheck': return <FileCheck {...props} />;
    case 'RefreshCw': return <RefreshCw {...props} />;
    case 'BedDouble': return <BedDouble {...props} />;
    default: return <CheckCircle2 {...props} />;
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'deliverables' | 'diagram' | 'overview' | 'data'>('diagram');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const openLightbox = (src: string, title: string, desc: string) => {
    setLightboxImage({ src, title, desc });
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-[#0B0F19] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-sm font-mono tracking-[0.3em] text-cyan mb-4">04 — ACADEMIC PROJECTS</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Academic Projects.</h3>
              <p className="text-white/70 max-w-xl text-lg font-sans">
                Explore deliverables, software portals, and high-resolution Bizagi process diagrams built across Operations, Blockchain Fintech, and Hospital ERP Systems.
              </p>
            </div>
            <div className="text-xs font-mono text-cyan bg-cyan/10 border border-cyan/30 px-4 py-2 rounded-full w-fit">
              CLICK ANY PROJECT TO VIEW
            </div>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                setSelectedProject(project);
                setActiveTab('diagram');
              }}
              className={`relative min-h-[460px] rounded-3xl p-8 md:p-10 cursor-pointer overflow-hidden group bg-gradient-to-br ${project.color} bg-[#030712] border border-white/15 ${project.borderHover} transition-all duration-500 shadow-2xl flex flex-col justify-between`}
            >
              <div className="absolute inset-0 bg-[#030712]/65 group-hover:bg-[#030712]/45 transition-colors duration-500" />
              
              <div className="relative h-full flex flex-col justify-between z-10">
                {/* Top Row */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-3xl font-black ${project.accent}`}>
                        {project.id}
                      </span>
                      <span className="text-[11px] font-mono tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10">
                        {project.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500 hover:text-black transition-all text-xs font-mono font-bold"
                          title="Open Live Demo"
                        >
                          <span>LIVE DEMO</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <div className="p-2.5 rounded-full bg-white/10 group-hover:bg-cyan group-hover:text-black transition-all duration-300">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  <span className={`text-xs font-mono tracking-widest uppercase mb-2 block ${project.accent}`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-white transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-sans">
                    {project.valueProp}
                  </p>
                </div>

                {/* Delivered Highlights Badge List */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.deliverables.slice(0, 3).map((del, dIdx) => (
                      <span key={dIdx} className="text-[11px] font-mono text-white/90 flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {getDeliverableIcon(del.iconName, project.accent)}
                        <span className="truncate max-w-[170px]">{del.title}</span>
                      </span>
                    ))}
                    {project.deliverables.length > 3 && (
                      <span className="text-[11px] font-mono text-cyan bg-cyan/10 border border-cyan/20 px-2 py-1 rounded-md">
                        +{project.deliverables.length - 3} More
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                    <div>
                      <span className={`block text-xl md:text-2xl font-black ${project.accent}`}>{project.stat1}</span>
                      <span className="text-[10px] font-mono text-white/60 uppercase block leading-tight mt-0.5">{project.stat1Label}</span>
                    </div>
                    <div>
                      <span className="block text-xl md:text-2xl font-black text-white">{project.stat2}</span>
                      <span className="text-[10px] font-mono text-white/60 uppercase block leading-tight mt-0.5">{project.stat2Label}</span>
                    </div>
                    <div>
                      <span className="block text-xl md:text-2xl font-black text-cyan">{project.stat3}</span>
                      <span className="text-[10px] font-mono text-white/60 uppercase block leading-tight mt-0.5">{project.stat3Label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Expansion Modal (Full Case Study with Bizagi Diagrams & Deliverables) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="w-full max-w-6xl max-h-[94vh] rounded-3xl bg-[#0B0F19] border border-white/20 relative overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                
                {/* Modal Header */}
                <div className="border-b border-white/10 pb-6 mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`font-mono tracking-widest text-xs uppercase font-bold ${selectedProject.accent}`}>
                      PROJECT {selectedProject.id} // {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/90">
                      {selectedProject.tag}
                    </span>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-black text-xs font-mono font-bold hover:bg-emerald-400 transition-all shadow-lg"
                      >
                        <span>OPEN LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-display font-black mb-3 text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
                    {selectedProject.valueProp}
                  </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('diagram')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${activeTab === 'diagram' ? 'bg-cyan text-black font-bold shadow-lg shadow-cyan/20' : 'text-white/60 hover:text-white bg-white/5 border border-white/10'}`}
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>BIZAGI DIAGRAMS & FLOWCHARTS</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('deliverables')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${activeTab === 'deliverables' ? 'bg-cyan text-black font-bold shadow-lg shadow-cyan/20' : 'text-white/60 hover:text-white bg-white/5 border border-white/10'}`}
                  >
                    <PackageCheck className="w-4 h-4" />
                    <span>WHAT I ACTUALLY DELIVERED</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${activeTab === 'overview' ? 'bg-cyan text-black font-bold shadow-lg shadow-cyan/20' : 'text-white/60 hover:text-white bg-white/5 border border-white/10'}`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>METHODOLOGY & EXECUTION</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('data')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${activeTab === 'data' ? 'bg-cyan text-black font-bold shadow-lg shadow-cyan/20' : 'text-white/60 hover:text-white bg-white/5 border border-white/10'}`}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>METRICS & IMPACT</span>
                  </button>
                </div>

                {/* Tab 1: Bizagi Diagrams & Process Visualizations */}
                {activeTab === 'diagram' && (
                  <div className="mb-8">
                    {selectedProject.diagramType === 'linen-flow' && <LinenSystemDiagram onOpenImage={openLightbox} />}
                    {selectedProject.diagramType === 'blockchain-flow' && <BlockchainArchitectureDiagram />}
                    {selectedProject.diagramType === 'erp-architecture' && <HospitalERPArchitectureDiagram onOpenImage={openLightbox} />}
                    {selectedProject.diagramType === 'bpmn-swimlane' && <BPMNDischargeDiagram onOpenImage={openLightbox} />}
                  </div>
                )}

                {/* Tab 2: What I Actually Delivered (With Icons) */}
                {activeTab === 'deliverables' && (
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-mono tracking-widest text-cyan uppercase font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan" />
                        Tangible Deliverables & Platforms Shipped
                      </h3>
                      <span className="text-[11px] font-mono text-white/50">{selectedProject.deliverables.length} Key Outputs</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.deliverables.map((item, dIdx) => (
                        <div 
                          key={dIdx}
                          className="glass-panel p-5 rounded-2xl bg-[#030712]/70 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                                {getDeliverableIcon(item.iconName, selectedProject.accent)}
                              </div>
                              <h4 className="text-sm font-display font-bold text-white leading-tight">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-xs font-sans text-white/80 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                            <span>DELIVERABLE 0{dIdx + 1}</span>
                            <span className="text-cyan font-bold">VERIFIED OUTPUT</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Overview & Execution */}
                {activeTab === 'overview' && (
                  <div className="space-y-6 mb-8">
                    {/* Problem Statement */}
                    <div className="glass-panel p-6 rounded-2xl bg-[#030712]/60 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-white/5 ${selectedProject.accent}`}>
                          <Layers className="w-5 h-5" />
                        </div>
                        <h3 className="text-xs font-mono tracking-widest text-white/70 uppercase">01 / The Business Challenge & Root Cause</h3>
                      </div>
                      <p className="text-base text-white/90 leading-relaxed font-sans">
                        {selectedProject.problem}
                      </p>
                    </div>

                    {/* What Exactly I Did */}
                    <div className="glass-panel p-6 rounded-2xl bg-[#030712]/60 border border-white/10">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`p-2 rounded-lg bg-white/5 ${selectedProject.accent}`}>
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-xs font-mono tracking-widest text-white/70 uppercase">02 / What Exactly I Did (Execution & Steps)</h3>
                      </div>

                      <div className="space-y-3">
                        {selectedProject.whatIDid.map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                            <div className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs flex-none mt-0.5 ${selectedProject.accent}`}>
                              {i + 1}
                            </div>
                            <p className="text-sm md:text-base text-white/90 font-sans leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h3 className="text-xs font-mono tracking-widest text-white/60 mb-3 uppercase">Methodologies & Core Competencies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool) => (
                          <span key={tool} className="px-3.5 py-1.5 rounded-lg bg-[#030712] border border-white/15 text-xs font-mono text-cyan">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 4: Metrics & Impact */}
                {activeTab === 'data' && (
                  <div className="space-y-6 mb-8">
                    <div className="text-center bg-[#030712]/90 rounded-2xl p-8 border border-white/15 shadow-2xl">
                      <h3 className="text-xs font-mono tracking-widest text-white/60 mb-3 uppercase">Measurable Impact & Quantitative Results</h3>
                      <p className="text-xl font-display font-medium text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                        {selectedProject.impact}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                          <span className={`block text-3xl font-black ${selectedProject.accent}`}>{selectedProject.stat1}</span>
                          <span className="text-xs font-mono text-white/60 uppercase mt-1 block">{selectedProject.stat1Label}</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                          <span className="block text-3xl font-black text-white">{selectedProject.stat2}</span>
                          <span className="text-xs font-mono text-white/60 uppercase mt-1 block">{selectedProject.stat2Label}</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                          <span className="block text-3xl font-black text-cyan">{selectedProject.stat3}</span>
                          <span className="text-xs font-mono text-white/60 uppercase mt-1 block">{selectedProject.stat3Label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal Footer */}
                <div className="flex flex-wrap justify-between items-center gap-4 pt-4 border-t border-white/10">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="font-mono text-xs tracking-widest text-cyan hover:text-white transition-colors border-b border-cyan/40 hover:border-white pb-1"
                  >
                    ← BACK TO ALL PROJECTS
                  </button>

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-black text-xs font-mono font-bold hover:bg-emerald-400 transition-all shadow-lg"
                    >
                      <span>LAUNCH VISHVASYA e-REGISTRY</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Lightbox for Bizagi High-Resolution Diagrams */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setLightboxImage(null)}
          >
            <div 
              className="relative max-w-7xl max-h-[92vh] w-full flex flex-col items-center bg-[#0B0F19] border border-white/20 rounded-3xl p-6 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center w-full mb-4 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-white">{lightboxImage.title}</h3>
                  <p className="text-xs font-mono text-cyan mt-0.5">{lightboxImage.desc}</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex-1 w-full overflow-auto flex items-center justify-center p-2 custom-scrollbar bg-[#030712] rounded-2xl border border-white/10">
                <img 
                  src={lightboxImage.src} 
                  alt={lightboxImage.title} 
                  className="max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl transition-transform hover:scale-105 duration-300"
                />
              </div>

              <div className="mt-4 flex justify-between items-center w-full text-xs font-mono text-white/50">
                <span>Bizagi Process Modeler Export • Full Resolution</span>
                <span className="text-cyan">Click and scroll to inspect workflow details</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================================
   DIAGRAM 1: Healthcare Linen Inventory Lifecycle & Audit Graph
   ========================================================================= */
function LinenSystemDiagram({ onOpenImage }: { onOpenImage?: (src: string, title: string, desc: string) => void }) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { title: '01. Ward Allocation', desc: 'Linen dispatched from central store to Wards (OT, ICU, General) based on PAR targets.', tag: 'PAR Benchmark: 3.5' },
    { title: '02. Clinical Usage', desc: 'Bed turnover, surgeries & patient care cycle generating soiled linen.', tag: 'Daily Circulation' },
    { title: '03. Soiled Collection & Sorting', desc: 'Floor collection, categorization (hazard vs standard) and initial weight log.', tag: 'Weight Verification' },
    { title: '04. Industrial Disinfection', desc: 'Quick Clean high-temp washing, chemical disinfection and drying cycle.', tag: 'Wash Cycle Tracking' },
    { title: '05. Quality & Deficit Audit', desc: 'Physical verification uncovering ₹3.13L quarterly deficit & wear discard rate.', tag: 'Discrepancy Audit' },
    { title: '06. Clean Linen Replenish', desc: 'Standardized restocking via automated Portal to prevent ward stockouts.', tag: 'Portal Reorder' }
  ];

  const deficits = [
    { dept: 'General Wards', target: '3.5 PAR', actual: '2.1 PAR', deficit: '-39%', loss: '₹1.22 Lakh', color: 'bg-rose-500' },
    { dept: 'Operation Theatre (OT)', target: '4.0 PAR', actual: '2.5 PAR', deficit: '-38%', loss: '₹0.98 Lakh', color: 'bg-amber-500' },
    { dept: 'Intensive Care (ICU)', target: '4.0 PAR', actual: '2.9 PAR', deficit: '-26%', loss: '₹0.58 Lakh', color: 'bg-cyan-500' },
    { dept: 'Emergency & OPD', target: '3.0 PAR', actual: '2.45 PAR', deficit: '-18%', loss: '₹0.35 Lakh', color: 'bg-emerald-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Interactive Process Flowchart */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/80 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-cyan" />
            <h4 className="text-xs font-mono tracking-widest text-cyan uppercase font-bold">Linen Lifecycle & Governance Flowchart</h4>
          </div>
          <span className="text-[11px] font-mono text-white/50">Click any step to inspect flow</span>
        </div>

        {/* Step Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${activeStep === idx ? 'border-cyan bg-cyan/15 shadow-lg shadow-cyan/10' : 'border-white/10 bg-white/[0.02] hover:border-white/20'}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold ${activeStep === idx ? 'text-cyan' : 'text-white/60'}`}>STAGE {idx + 1}</span>
                {activeStep === idx && <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />}
              </div>
              <h5 className="text-xs font-display font-bold text-white mb-1 leading-snug">{step.title}</h5>
              <span className="text-[9px] font-mono text-white/50 block">{step.tag}</span>
            </div>
          ))}
        </div>

        {/* Active Stage Description Box */}
        <div className="p-4 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-bold">Active Stage Details:</span>
            <p className="text-xs md:text-sm text-white/90 mt-0.5">{steps[activeStep].desc}</p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan text-black font-bold flex-none ml-4">
            {steps[activeStep].tag}
          </span>
        </div>
      </div>

      {/* Audit Data & Deficit Analysis Graph */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/80 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-rose-400" />
            <h4 className="text-xs font-mono tracking-widest text-rose-400 uppercase font-bold">Field Audit: Departmental PAR Deficit Analysis</h4>
          </div>
          <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
            Total Uncovered: ₹3.13 Lakh
          </span>
        </div>

        <div className="space-y-4">
          {deficits.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-white font-bold">{item.dept}</span>
                <div className="flex items-center gap-3">
                  <span className="text-white/50">Target: {item.target} | Actual: {item.actual}</span>
                  <span className="text-rose-400 font-bold">{item.deficit} Deficit ({item.loss})</span>
                </div>
              </div>

              {/* Progress Bar Visualizer */}
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden flex">
                <div 
                  className={`h-full ${item.color} rounded-full transition-all duration-700`}
                  style={{ width: `${100 - parseInt(item.deficit.replace('-', ''))}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   DIAGRAM 2: Vishvasya Blockchain Architecture & Consensus Visualizer
   ========================================================================= */
function BlockchainArchitectureDiagram() {
  const [selectedBlock, setSelectedBlock] = useState<number>(1);

  const blocks = [
    { num: '#001', type: 'GENESIS BLOCK', tag: 'Registry Initialized', hash: '0000a4b7...9c81', fee: '0.00 MATIC', desc: 'Government land title authority genesis state configuration.' },
    { num: '#002', type: 'TITLE TRANSFER', tag: 'Sale Deed Executed', hash: '0000f28e...33b9', fee: '0.002 MATIC', desc: 'Citizen A transfers Property PID: MH-PUN-0941 to Citizen B. Verified by Sub-Registrar.' },
    { num: '#003', type: 'BANK LIEN / ENCUMBRANCE', tag: 'Mortgage Registered', hash: '000089c1...dd20', fee: '0.003 MATIC', desc: 'State Bank attaches ₹45L housing mortgage lien. Locks title from unauthorized resale.' },
    { num: '#004', type: 'JUDICIAL DECREE', tag: 'Court Override Executed', hash: '0000e572...fa49', fee: '0.001 MATIC', desc: 'High Court Mandate: Dispute resolved. Registrar executes judicial title re-assignment on-chain.' }
  ];

  return (
    <div className="space-y-6">
      {/* Blockchain Dual-Panel Architecture Map */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/80 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-emerald-400" />
            <h4 className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">Vishvasya Web3 Dual-Panel Architecture</h4>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            Strict Separation of Powers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Left Panel Architecture */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-cyan uppercase font-bold block mb-2">Panel 01: Citizen & Government RBAC Portal</span>
            <ul className="space-y-2 text-xs font-sans text-white/80">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan" /> <span><strong>Citizen Portal:</strong> Title verification, encumbrance search & transfer request.</span></li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan" /> <span><strong>Registrar Portal:</strong> Biometric verification, stamp validation & on-chain execution.</span></li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan" /> <span><strong>Judiciary Portal:</strong> Civil court decree issuance with mandatory audit trail.</span></li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan" /> <span><strong>Banking Portal:</strong> Real-time home loan mortgage registration & lien lock.</span></li>
            </ul>
          </div>

          {/* Right Panel Architecture */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block mb-2">Panel 02: Mempool & Consensus Visualizer</span>
            <ul className="space-y-2 text-xs font-sans text-white/80">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> <span><strong>Mempool Queue:</strong> Live unconfirmed transaction buffer.</span></li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> <span><strong>NIC Nodes Network:</strong> Multi-signature consensus validation.</span></li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> <span><strong>Block Minting Engine:</strong> SHA-256 hash generation & ledger commit.</span></li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> <span><strong>Public Explorer:</strong> Real-time block explorer and property history.</span></li>
            </ul>
          </div>
        </div>

        {/* Chained Ledger Simulator */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-white/70 uppercase">Immutable Chained Ledger (Click a block):</span>
            <span className="text-[10px] font-mono text-cyan">SHA-256 Verified</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {blocks.map((block, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedBlock(idx)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${selectedBlock === idx ? 'border-emerald-400 bg-emerald-500/15 shadow-lg shadow-emerald-500/10' : 'border-white/10 bg-white/[0.02] hover:border-white/20'}`}
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400 mb-1">
                  <span>{block.num}</span>
                  <span>{block.fee}</span>
                </div>
                <h5 className="text-xs font-bold text-white font-display mb-1">{block.type}</h5>
                <span className="text-[9px] font-mono text-white/50 block truncate">{block.hash}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-white/90">
            <strong className="text-emerald-400 font-mono">Block {blocks[selectedBlock].num} ({blocks[selectedBlock].type}): </strong>
            {blocks[selectedBlock].desc}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   DIAGRAM 3: Hospital ERP Architecture Diagram (200-Bed Hospital) WITH BIZAGI IMAGES
   ========================================================================= */
function HospitalERPArchitectureDiagram({ onOpenImage }: { onOpenImage?: (src: string, title: string, desc: string) => void }) {
  const [activeBizagiTab, setActiveBizagiTab] = useState<'o2c' | 'p2p' | 'modules'>('o2c');

  const bizagiDiagrams = {
    o2c: {
      src: './diagrams/erp_image5.png',
      title: 'Order-to-Cash (O2C): Patient Registration to Discharge Workflow',
      figure: 'Figure 4.1',
      desc: 'Bizagi Process Model showing clinical order generation, diagnostics, pharmacy dispensing, TPA pre-authorization, and billing clearance.'
    },
    p2p: {
      src: './diagrams/erp_image6.png',
      title: 'Procure-to-Pay (P2P): Pharmacy Procure-to-Dispense Workflow',
      figure: 'Figure 4.2',
      desc: 'Bizagi Process Model showing stock reorder trigger, value-based PO approval matrix, GRN verification, and 3-way matching.'
    },
    modules: {
      src: './diagrams/erp_image1.png',
      title: 'Connected Hospital ERP Architecture Ecosystem',
      figure: 'Figure 1.1',
      desc: 'Core architecture connecting Patient Master, EMR, Billing, Pharmacy Inventory, and Insurance/TPA Interfaces.'
    }
  };

  const masterData = [
    'Patient Master', 'Item & Drug Master', 'Doctor & Staff Roster', 
    'Service Tariff Master', 'Room / Bed Master', 'Vendor & Supplier Master',
    'TPA / Payer Master', 'General Ledger Chart'
  ];

  return (
    <div className="space-y-6">
      {/* Bizagi Process Model Picture Viewer */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/90 border border-violet/30 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-violet" />
            <div>
              <h4 className="text-sm font-display font-bold text-white">Actual Bizagi ERP Process Model Pictures</h4>
              <span className="text-[11px] font-mono text-cyan">Exported directly from Bizagi Process Modeler Report</span>
            </div>
          </div>

          {/* Sub-tabs for Bizagi diagrams */}
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveBizagiTab('o2c')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${activeBizagiTab === 'o2c' ? 'bg-violet text-white font-bold' : 'text-white/60 hover:text-white'}`}
            >
              Order-to-Cash (O2C)
            </button>
            <button
              onClick={() => setActiveBizagiTab('p2p')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${activeBizagiTab === 'p2p' ? 'bg-violet text-white font-bold' : 'text-white/60 hover:text-white'}`}
            >
              Procure-to-Pay (P2P)
            </button>
            <button
              onClick={() => setActiveBizagiTab('modules')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${activeBizagiTab === 'modules' ? 'bg-violet text-white font-bold' : 'text-white/60 hover:text-white'}`}
            >
              ERP Ecosystem
            </button>
          </div>
        </div>

        {/* Image Display Card with Zoom trigger */}
        <div 
          onClick={() => onOpenImage && onOpenImage(bizagiDiagrams[activeBizagiTab].src, bizagiDiagrams[activeBizagiTab].title, bizagiDiagrams[activeBizagiTab].desc)}
          className="relative group rounded-2xl overflow-hidden border border-white/15 bg-white/[0.02] cursor-pointer hover:border-violet transition-all duration-300"
        >
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-white text-xs font-mono group-hover:bg-violet group-hover:border-violet transition-all shadow-lg backdrop-blur-md">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>CLICK TO EXPAND FULLSCREEN</span>
          </div>

          <div className="p-4 flex items-center justify-center min-h-[280px] md:min-h-[380px] bg-slate-950/90">
            <img 
              src={bizagiDiagrams[activeBizagiTab].src} 
              alt={bizagiDiagrams[activeBizagiTab].title} 
              className="max-h-[360px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="p-4 bg-[#0B0F19] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-xs font-mono text-cyan font-bold block">{bizagiDiagrams[activeBizagiTab].figure}: {bizagiDiagrams[activeBizagiTab].title}</span>
              <p className="text-xs text-white/70 font-sans mt-0.5">{bizagiDiagrams[activeBizagiTab].desc}</p>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase flex-none">Bizagi BPMN Standard</span>
          </div>
        </div>
      </div>

      {/* Master Data Foundation Layer */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/80 border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-4 h-4 text-violet" />
          <h4 className="text-xs font-mono tracking-widest text-violet uppercase font-bold">Foundation Layer: 8 Core Master Data Sets (Prerequisite for Go-Live)</h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {masterData.map((master, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-violet/10 border border-violet/20 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-violet/20 text-violet text-[10px] font-mono flex items-center justify-center font-bold flex-none">
                {idx + 1}
              </span>
              <span className="text-xs font-sans text-white/90 font-medium">{master}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   DIAGRAM 4: BPMN 2.0 Patient Discharge Swimlane Workflow WITH BIZAGI PICTURE
   ========================================================================= */
function BPMNDischargeDiagram({ onOpenImage }: { onOpenImage?: (src: string, title: string, desc: string) => void }) {
  const lanes = [
    {
      role: 'Physician Lane',
      color: 'border-cyan text-cyan bg-cyan/10',
      activities: ['1. Assess Clinical Readiness', '2. Clinical Fitness Gateway [Fit / Unfit]', '3. Confirm Fitness & Sign Summary', '4. Prescribe Discharge Medications']
    },
    {
      role: 'Billing & Finance Lane',
      color: 'border-violet text-violet bg-violet/10',
      activities: ['5. Compile All Ward Charges', '6. Payment Gateway [Cashless TPA vs Self-Pay]', '7. Submit TPA Claim [Approved / Rejected?]', '8. *Exception: Convert to Self-Pay*', '9. Collect Balance & Issue Financial Clearance']
    },
    {
      role: 'Pharmacy Lane',
      color: 'border-emerald-400 text-emerald-400 bg-emerald-500/10',
      activities: ['10. Receive e-Prescription', '11. Drug Interaction & Dosage Verification', '12. Dispense Discharge Medication Kit']
    },
    {
      role: 'Nursing & Ward Lane',
      color: 'border-magenta text-magenta bg-magenta/10',
      activities: ['13. Patient Counselling & Drug Instructions', '14. Triple Clearance Audit (Clinical + Bill + Meds)', '15. Porter Transport Coordination', '16. Trigger Bed Release & Room Sanitization']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Actual Bizagi Diagram Picture Card */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/90 border border-magenta/30 shadow-2xl">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-magenta" />
            <div>
              <h4 className="text-sm font-display font-bold text-white">Actual Bizagi BPMN 2.0 Discharge Process Model Picture</h4>
              <span className="text-[11px] font-mono text-cyan">Complete multi-lane workflow diagram with gateways & exception paths</span>
            </div>
          </div>
          <span className="text-xs font-mono text-magenta bg-magenta/10 border border-magenta/20 px-3 py-1 rounded-full">
            BPMN 2.0 Certified
          </span>
        </div>

        {/* Image Display */}
        <div 
          onClick={() => onOpenImage && onOpenImage('./diagrams/bpmn_image1.png', 'Patient Discharge BPMN 2.0 Process Model', 'End-to-end 4-swimlane workflow model mapped in Bizagi Process Modeler.')}
          className="relative group rounded-2xl overflow-hidden border border-white/15 bg-white/[0.02] cursor-pointer hover:border-magenta transition-all duration-300 mb-4"
        >
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-white text-xs font-mono group-hover:bg-magenta group-hover:border-magenta transition-all shadow-lg backdrop-blur-md">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>CLICK TO VIEW FULL RESOLUTION</span>
          </div>

          <div className="p-4 flex items-center justify-center min-h-[260px] md:min-h-[340px] bg-slate-950/90">
            <img 
              src="./diagrams/bpmn_image1.png" 
              alt="Bizagi BPMN 2.0 Patient Discharge Model" 
              className="max-h-[320px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="p-3.5 bg-[#0B0F19] border-t border-white/10 flex justify-between items-center text-xs font-mono text-white/70">
            <span className="text-magenta font-bold">Figure 3.1: Bizagi Multi-Lane BPMN 2.0 Model</span>
            <span className="text-cyan">Click to zoom & inspect</span>
          </div>
        </div>
      </div>

      {/* Structured Swimlanes Visualizer */}
      <div className="glass-panel p-6 rounded-2xl bg-[#030712]/80 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4 text-magenta" />
            <h4 className="text-xs font-mono tracking-widest text-magenta uppercase font-bold">4-Swimlane Activity Breakdown & Responsibilities</h4>
          </div>
          <span className="text-[11px] font-mono text-magenta bg-magenta/10 border border-magenta/20 px-2.5 py-1 rounded-full">
            Cross-Departmental Governance
          </span>
        </div>

        <div className="space-y-3">
          {lanes.map((lane, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${lane.color}`}>
                  {lane.role}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {lane.activities.map((act, aIdx) => (
                  <div 
                    key={aIdx} 
                    className={`p-2.5 rounded-lg border text-xs font-sans leading-snug ${act.includes('Exception') ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 font-bold' : 'border-white/10 bg-white/5 text-white/90'}`}
                  >
                    {act}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Business Rule / Decision Gate Highlight */}
        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-white/80 font-mono">
          <AlertCircle className="w-4 h-4 text-cyan flex-none mt-0.5" />
          <div>
            <strong className="text-cyan">Configured ERP Business Rule: </strong>
            Patient record cannot proceed to financial discharge or pharmacy dispensing until Physician explicitly signs the clinical fitness gate. Rejected cashless TPA claims automatically route to the Self-Pay recalculation exception gateway.
          </div>
        </div>
      </div>
    </div>
  );
}
