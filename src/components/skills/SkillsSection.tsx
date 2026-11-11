import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Globe, Cpu, CheckCircle, Info } from 'lucide-react';
import { SkillScene } from '../three/scenes/SkillScene';
import { skillsData, skillCategories } from '../../data/skills';
import type { SkillItem, SkillCategory } from '../../types';
import { cyberAudio } from '../../utils/audio';
import { SectionPagination } from '../navigation/SectionPagination';

interface SkillsSectionProps {
  onNavigate: (id: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigate }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<SkillCategory | 'ALL'>('ALL');

  const filteredSkills = activeCategoryFilter === 'ALL'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategoryFilter);

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'PROGRAMMING LANGUAGES':
        return <Terminal className="w-4 h-4 text-cyber-accent" />;
      case 'WEB TECHNOLOGIES':
        return <Globe className="w-4 h-4 text-cyber-cyan" />;
      case 'CYBERSECURITY':
        return <Shield className="w-4 h-4 text-cyber-emerald" />;
      case 'TOOLS':
        return <Cpu className="w-4 h-4 text-cyber-gold" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-[92vh] w-full py-28 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyber-accent" />
              <span>03 — CAPABILITIES // CONSTELLATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F2F0EB]">
              INTERACTIVE DIGITAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-editorial-metallic to-cyber-gold">
                SKILL UNIVERSE.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm font-mono text-editorial-secondary leading-relaxed">
            [3D ORBITAL MATRIX: Click or hover nodes in 3D space to inspect verified capabilities]
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => {
              cyberAudio.playClick();
              setActiveCategoryFilter('ALL');
            }}
            className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              activeCategoryFilter === 'ALL'
                ? 'bg-cyber-accent text-[#090909] font-bold shadow-lg shadow-cyber-accent/20'
                : 'bg-[#141414] text-editorial-secondary hover:text-[#F2F0EB] border border-white/5'
            }`}
          >
            ALL CAPABILITIES ({skillsData.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                cyberAudio.playClick();
                setActiveCategoryFilter(cat);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                activeCategoryFilter === cat
                  ? 'bg-[#222222] border-cyber-accent text-[#F2F0EB] font-bold border'
                  : 'bg-[#141414] text-editorial-secondary hover:text-[#F2F0EB] border border-white/5'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* 3D Constellation Orbit Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Scene */}
          <div className="lg:col-span-7 bg-[#111111] rounded-3xl border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 font-mono text-xs text-editorial-muted">
              <span className="w-2 h-2 rounded-full bg-cyber-accent animate-ping" />
              <span>3D ORBITAL SIMULATION // WEBGL</span>
            </div>

            <SkillScene
              selectedSkillId={selectedSkill.id}
              onSelectSkill={(skill) => {
                cyberAudio.playChirp(650, 0.05);
                setSelectedSkill(skill);
              }}
            />

            <div className="flex items-center justify-between font-mono text-[11px] text-editorial-muted border-t border-white/5 pt-3">
              <span>DRAG TO ROTATE SCENE</span>
              <span className="text-cyber-accent">CLICK NODE TO EXPAND</span>
            </div>
          </div>

          {/* Selected Skill Details Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl bg-[#111111] border border-white/15 shadow-2xl space-y-6 relative overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: selectedSkill.color }}
                />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-cyber-accent uppercase tracking-widest flex items-center gap-2">
                    {getCategoryIcon(selectedSkill.category)}
                    {selectedSkill.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyber-gold">
                    LEVEL: {selectedSkill.proficiencyLevel}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-[#F2F0EB] tracking-tight">
                    {selectedSkill.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-editorial-secondary leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-cyber-gold font-semibold">
                    <Info className="w-3.5 h-3.5 text-cyber-gold" />
                    <span>TECHNICAL CONTEXT & APPLICATION:</span>
                  </div>
                  <p className="font-mono text-xs text-editorial-primary leading-relaxed">
                    {selectedSkill.details}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-xs text-editorial-muted">
                  <span>RESUME VERIFIED</span>
                  <span className="text-cyber-emerald flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> CONFIRMED
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Skill Node Grid Pills for Quick Selection */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.id === skill.id;
            return (
              <button
                key={skill.id}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedSkill(skill);
                }}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#191919] border-cyber-accent text-[#F2F0EB] shadow-lg shadow-cyber-accent/10 translate-y-[-2px]'
                    : 'bg-[#111111] border-white/5 text-editorial-secondary hover:border-white/20 hover:text-[#F2F0EB]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="font-mono text-[10px] text-editorial-muted">
                    {skill.category === 'PROGRAMMING LANGUAGES'
                      ? 'LANG'
                      : skill.category === 'WEB TECHNOLOGIES'
                      ? 'WEB'
                      : skill.category === 'CYBERSECURITY'
                      ? 'SEC'
                      : 'TOOL'}
                  </span>
                </div>
                <div className="font-bold text-sm tracking-tight text-[#F2F0EB] truncate">
                  {skill.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Section Pagination Bar */}
        <SectionPagination currentSectionId="skills" onNavigate={onNavigate} />
      </div>
    </section>
  );
};
