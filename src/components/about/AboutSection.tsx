import React from 'react';
import { Shield, Terminal, Fingerprint, CheckCircle } from 'lucide-react';
import { personalData } from '../../data/personal';
import { HobbiesSection } from '../hobbies/HobbiesSection';
import { SectionPagination } from '../navigation/SectionPagination';
import { MicrosoftIcon } from '../ui/BrandIcons';

interface AboutSectionProps {
  onNavigate: (id: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] w-full py-28 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyber-accent" />
              <span>02 — IDENTITY // ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F2F0EB]">
              THE MIND BEHIND<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-[#F2F0EB] to-cyber-gold">
                THE MACHINE.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm font-mono text-editorial-secondary leading-relaxed">
            [VERIFIED_DOSSIER: B.TECH CYBERSECURITY // AMRITA VISHWA VIDYAPEETHAM]
          </div>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-lg sm:text-xl text-editorial-secondary font-light leading-relaxed">
              <p className="text-[#F2F0EB] font-normal leading-relaxed text-xl sm:text-2xl">
                I am an aspiring cybersecurity professional with a solid foundation in programming and web technologies.
              </p>
              <p>
                My focus centers on ethical hacking, threat detection, vulnerability analysis, cryptography, and engineering digital systems that remain resilient against modern cyber adversaries.
              </p>
              <p>
                I believe in continuous learning, hands-on experimentation, and exploring how technology can solve real-world problems with rigorous technical precision and a proactive mindset.
              </p>
            </div>

            {/* Core Values / Focus Pillars (from resume) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyber-accent font-mono text-xs tracking-wider uppercase font-semibold">
                  <Shield className="w-4 h-4 text-cyber-accent" />
                  <span>Defensive Rigor</span>
                </div>
                <p className="text-xs text-editorial-secondary leading-relaxed">
                  Deep focus on vulnerability discovery, Shannon entropy threat detection, and proactive security mitigation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyber-gold font-mono text-xs tracking-wider uppercase font-semibold">
                  <Terminal className="w-4 h-4 text-cyber-gold" />
                  <span>Foundational Code</span>
                </div>
                <p className="text-xs text-editorial-secondary leading-relaxed">
                  Proficient in low-level memory paradigms (C/C++), automation scripting (Python), and web architecture.
                </p>
              </div>
            </div>

            {/* Official Summary Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-cyber-accent/20 relative">
              <span className="font-mono text-[10px] text-cyber-accent uppercase tracking-widest block mb-2">
                Official Resume Abstract
              </span>
              <p className="text-sm font-sans text-editorial-secondary italic leading-relaxed">
                "{personalData.summary}"
              </p>
            </div>
          </div>

          {/* Right Personal Identity Panel (Source of Truth) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/15 shadow-2xl relative overflow-hidden space-y-6">
              {/* Atmospheric subtle glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyber-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent tracking-widest">
                  <Fingerprint className="w-4 h-4 text-cyber-accent" />
                  <span>IDENTITY_PANEL // SYS_SPEC</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyber-emerald/15 border border-cyber-emerald/30 text-cyber-emerald text-[10px] font-mono">
                  ACTIVE STUDENT
                </span>
              </div>

              {/* Data Rows strictly matching resume */}
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#090909] border border-white/5 flex items-center justify-between">
                  <span className="text-editorial-muted">NAME</span>
                  <span className="text-[#F2F0EB] font-bold tracking-wider">{personalData.name}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090909] border border-white/5 flex items-center justify-between">
                  <span className="text-editorial-muted">FIELD</span>
                  <span className="text-cyber-accent font-semibold text-right">COMPUTER SCIENCE & CYBERSECURITY</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090909] border border-white/5 flex items-center justify-between">
                  <span className="text-editorial-muted">EDUCATION</span>
                  <span className="text-[#F2F0EB] font-semibold">{personalData.education.degree} ({personalData.education.period})</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090909] border border-white/5 flex items-center justify-between">
                  <span className="text-editorial-muted">INSTITUTION</span>
                  <span className="text-cyber-gold font-semibold text-right">{personalData.education.institution}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090909] border border-white/5 flex items-center justify-between">
                  <span className="text-editorial-muted">ACADEMIC STATUS</span>
                  <span className="text-[#F2F0EB] font-semibold">{personalData.education.currentSemester}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyber-accent/15 via-[#191919] to-cyber-gold/15 border border-cyber-accent/40 flex items-center justify-between">
                  <span className="text-editorial-primary font-bold">CUMULATIVE CGPA</span>
                  <span className="text-cyber-emerald font-black text-base">{personalData.education.cgpa} / 10.0</span>
                </div>
              </div>

              {/* Verified Accreditations */}
              <div className="border-t border-white/10 pt-4">
                <div className="text-[11px] font-mono text-editorial-muted mb-2.5 uppercase tracking-wider flex items-center justify-between">
                  <span>Accreditation Badges</span>
                  <span className="text-cyber-accent">12 Verified</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#191919] border border-white/10 text-[11px] font-mono text-[#F2F0EB] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-cyber-accent" /> Cisco C++ Advanced & Essentials
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#191919] border border-white/10 text-[11px] font-mono text-[#F2F0EB] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-cyber-gold" /> Cisco OS Basics & Cyber
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#191919] border border-white/10 text-[11px] font-mono text-[#F2F0EB] flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-cyber-cyan" /> Cisco JS Essentials 1 & 2
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#191919] border border-white/10 text-[11px] font-mono text-[#F2F0EB] flex items-center gap-1.5">
                    <MicrosoftIcon className="w-3 h-3" /> Microsoft Learn (Azure VDI & Copilot)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Disciplines */}
        <HobbiesSection />

        {/* Section Pagination Bar */}
        <SectionPagination currentSectionId="about" onNavigate={onNavigate} />
      </div>
    </section>
  );
};
