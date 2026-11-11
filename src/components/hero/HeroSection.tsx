import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Shield } from 'lucide-react';
import { HeroScene } from '../three/scenes/HeroScene';
import { personalData } from '../../data/personal';
import { cyberAudio } from '../../utils/audio';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDownloadResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDownloadResume,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden bg-[#090909]"
    >
      {/* Three.js 3D Background Scene */}
      <HeroScene />

      {/* Subtle Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.035]">
        <span className="text-[22vw] font-display font-black tracking-tighter text-[#F2F0EB]">
          CYBER
        </span>
      </div>

      {/* Top Meta info */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-editorial-secondary">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
          <span className="tracking-widest uppercase">PORTFOLIO / 2026</span>
          <span className="text-editorial-muted">|</span>
          <span className="text-cyber-gold tracking-widest">{personalData.education.institution}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 text-[11px] text-editorial-muted uppercase tracking-wider"
        >
          <Shield className="w-3.5 h-3.5 text-cyber-accent" />
          <span>CYBERSECURITY SPECIALIZATION • III SEMESTER</span>
        </motion.div>
      </div>

      {/* Center Cinematic Hero Typography */}
      <div className="relative z-10 my-auto py-8 max-w-5xl">
        {/* Roles Badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-2.5 mb-5"
        >
          {personalData.roleTitles.map((role, idx) => (
            <span
              key={role}
              className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider border backdrop-blur-md ${
                idx === 0
                  ? 'bg-cyber-accent/15 border-cyber-accent/40 text-[#F2F0EB]'
                  : idx === 1
                  ? 'bg-cyber-gold/10 border-cyber-gold/30 text-cyber-gold'
                  : 'bg-white/5 border-white/10 text-editorial-secondary'
              }`}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Large Editorial Headline: Keerthi Vaasan T */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.92] text-[#F2F0EB]"
        >
          KEERTHI<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F0EB] via-[#D5D5D5] to-[#969696]">
            VAASAN <span className="text-cyber-accent">T</span>.
          </span>
        </motion.h1>

        {/* Explicit Name Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-3 flex items-center gap-2"
        >
          <span className="px-3 py-1 rounded-full bg-cyber-accent/10 border border-cyber-accent/30 font-mono text-xs sm:text-sm text-cyber-accent font-semibold tracking-wider">
            Keerthi Vaasan T
          </span>
        </motion.div>

        {/* Tagline & Supporting text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-2xl space-y-2.5"
        >
          <p className="font-mono text-xs sm:text-sm text-cyber-gold tracking-widest font-semibold uppercase">
            "{personalData.tagline}"
          </p>
          <p className="text-base sm:text-xl text-editorial-secondary font-light leading-relaxed">
            Exploring the digital world through code, creativity, and cybersecurity.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => {
              cyberAudio.playClick();
              onExploreClick();
            }}
            className="group px-7 py-4 rounded-full bg-cyber-accent text-[#090909] font-mono text-xs font-bold tracking-widest hover:bg-[#F2F0EB] transition-all duration-300 shadow-xl shadow-cyber-accent/20 flex items-center gap-3"
          >
            <span>EXPLORE 02 — ABOUT</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onDownloadResume();
            }}
            className="px-7 py-4 rounded-full bg-[#141414] border border-white/15 text-editorial-primary font-mono text-xs font-semibold tracking-wider hover:border-cyber-accent/60 hover:text-cyber-accent transition-all duration-300 flex items-center gap-2.5 backdrop-blur-xl"
          >
            <Download className="w-4 h-4 text-cyber-accent" />
            <span>DOWNLOAD RESUME</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Status & Section Prompt */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono text-xs text-editorial-muted">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald" />
          <span className="text-editorial-secondary">{personalData.status}</span>
        </div>

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 text-editorial-secondary hover:text-[#F2F0EB] transition-colors"
        >
          <span>PROCEED TO 02 ABOUT</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyber-accent" />
        </button>
      </div>
    </section>
  );
};
