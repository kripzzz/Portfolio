import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'kruparajuveliyazhathu@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/krupa-raju-6299b2223';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-[#030712] flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-violet/20 via-[#030712] to-[#030712] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 — GET IN TOUCH</span>
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.92] tracking-tighter text-white mb-6">
            LET'S BUILD<br/>
            SOMETHING<br/>
            <span className="text-gradient">WORTH REMEMBERING.</span>
          </h3>
          <p className="text-white/70 max-w-lg mx-auto text-base md:text-lg font-sans">
            Open for strategic roles across Finance, Operations, Analytics, and Enterprise Systems.
          </p>
        </motion.div>

        {/* Contact Links: LinkedIn & Direct Email */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto mb-16"
        >
          {/* LinkedIn Button */}
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cyan text-black font-mono text-sm font-bold shadow-xl shadow-cyan/25 hover:bg-white hover:text-black transition-all group"
          >
            <svg 
              className="w-5 h-5 fill-current text-black group-hover:scale-110 transition-transform" 
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>CONNECT ON LINKEDIN</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </motion.a>

          {/* Email Button */}
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-panel border border-white/20 hover:border-violet bg-[#0B0F19]/90 text-white font-mono text-sm font-bold shadow-xl hover:bg-violet/10 transition-all group"
          >
            <Mail className="w-5 h-5 text-violet group-hover:scale-110 transition-transform" />
            <span>SEND AN EMAIL</span>
          </motion.a>
        </motion.div>

        {/* Click-to-copy email bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          onClick={copyEmail}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan/40 cursor-pointer transition-all group"
        >
          <span className="text-xs md:text-sm font-mono text-white/80 group-hover:text-cyan transition-colors">
            {email}
          </span>
          <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-cyan group-hover:text-black text-white/60 transition-all">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </div>
          {copied && (
            <span className="text-[11px] font-mono text-emerald-400 font-bold animate-fade-in">
              COPIED!
            </span>
          )}
        </motion.div>

        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-white/50 gap-4"
        >
          <span>© {new Date().getFullYear()} KRUPA RAJU. ALL RIGHTS RESERVED.</span>
          <span className="text-cyan">TURNING IDEAS INTO IMPACT</span>
        </motion.div>
      </div>
    </section>
  );
}
