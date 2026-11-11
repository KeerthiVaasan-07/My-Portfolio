import React from 'react';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../../data/education';
import { SectionPagination } from '../navigation/SectionPagination';

interface EducationSectionProps {
  onNavigate: (id: string) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onNavigate }) => {
  const edu = educationData[0];

  return (
    <section
      id="education"
      className="relative min-h-[92vh] w-full py-28 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyber-accent" />
              <span>05 — ACADEMICS // FOUNDATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F2F0EB]">
              ACADEMIC JOURNEY<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-[#F2F0EB] to-cyber-gold">
                AND RIGOR.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm font-mono text-editorial-secondary leading-relaxed">
            [INSTITUTION: AMRITA VISHWA VIDYAPEETHAM // B.TECH CSE CYBERSECURITY]
          </div>
        </div>

        {/* Timeline Exhibition Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Timeline Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/15 relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-cyber-gold uppercase tracking-widest flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyber-gold" />
                  DEGREE TIMELINE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyber-accent/15 border border-cyber-accent/30 text-cyber-accent text-[11px] font-mono">
                  {edu.period}
                </span>
              </div>

              {/* Progress Milestones */}
              <div className="relative pl-6 border-l-2 border-cyber-accent/40 space-y-8 my-4">
                {/* Year 1 Foundation */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyber-accent border-4 border-[#111111]" />
                  <div className="font-mono text-xs text-cyber-accent">SEMESTER I & II</div>
                  <div className="font-bold text-sm text-[#F2F0EB]">Computing Fundamentals & Discrete Math</div>
                  <p className="text-xs text-editorial-secondary mt-1">C Programming, Hardware Architecture, Calculus, and Logic.</p>
                </div>

                {/* Year 2 Core & Specialization */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyber-gold border-4 border-[#111111] animate-ping" />
                  <div className="font-mono text-xs text-cyber-gold">CURRENT // {edu.currentStatus.toUpperCase()}</div>
                  <div className="font-bold text-sm text-[#F2F0EB]">{edu.specialization}</div>
                  <p className="text-xs text-editorial-secondary mt-1">Data Structures, Cryptography Foundations, Linux Systems.</p>
                </div>

                {/* Horizon 2029 */}
                <div className="relative opacity-60">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-editorial-muted border-4 border-[#111111]" />
                  <div className="font-mono text-xs text-editorial-muted">2027 – 2029</div>
                  <div className="font-bold text-sm text-editorial-secondary">Advanced Threat Intelligence & Capstone</div>
                  <p className="text-xs text-editorial-secondary mt-1">Network Forensics, Post-Quantum Systems, Secure Engineering.</p>
                </div>
              </div>

              {/* CGPA Score Display */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyber-accent/15 via-[#161616] to-cyber-gold/15 border border-cyber-accent/30 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-editorial-muted uppercase tracking-wider">OFFICIAL CGPA IN RESUME</div>
                  <div className="font-display font-black text-2xl text-[#F2F0EB]">{edu.cgpa} <span className="text-sm font-mono text-editorial-muted font-normal">/ 10.0</span></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyber-emerald/20 text-cyber-emerald flex items-center justify-center font-bold text-sm font-mono">
                  ✓
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Coursework & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/15 space-y-6">
              <div>
                <span className="font-mono text-xs text-cyber-accent uppercase tracking-widest">
                  Academic Focus & Context
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F2F0EB] mt-1">
                  {edu.degree}
                </h3>
                <p className="text-cyber-gold font-mono text-sm mt-1">{edu.institution}</p>
              </div>

              <p className="text-editorial-secondary text-base leading-relaxed font-light">
                {edu.description}
              </p>

              {/* Program Pillars */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs text-editorial-muted uppercase tracking-wider">
                  Academic Highlights:
                </div>
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-editorial-secondary">
                    <CheckCircle className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Key Courses */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-mono text-xs text-editorial-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyber-gold" />
                  Key University Coursework:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.keyCourses.map((course) => (
                    <div
                      key={course}
                      className="p-3 rounded-xl bg-[#090909] border border-white/5 font-mono text-xs text-editorial-primary flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Pagination Bar */}
        <SectionPagination currentSectionId="education" onNavigate={onNavigate} />
      </div>
    </section>
  );
};
