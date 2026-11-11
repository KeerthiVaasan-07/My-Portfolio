import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { RansomwareVisual } from './visuals/RansomwareVisual';
import { EthicalHackingVisual } from './visuals/EthicalHackingVisual';
import { QDayVisual } from './visuals/QDayVisual';
import { GpsTrackerVisual } from './visuals/GpsTrackerVisual';
import { cyberAudio } from '../../utils/audio';
import { GithubIcon } from '../ui/BrandIcons';
import { SectionPagination } from '../navigation/SectionPagination';

interface ProjectsSectionProps {
  onNavigate: (id: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(projectsData[0].id);

  const activeProject = projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  const renderVisual = (type: ProjectItem['visualType']) => {
    switch (type) {
      case 'ransomware':
        return <RansomwareVisual />;
      case 'ethical-hacking':
        return <EthicalHackingVisual />;
      case 'q-day':
        return <QDayVisual />;
      case 'gps-tracker':
        return <GpsTrackerVisual />;
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-[92vh] w-full py-28 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyber-accent" />
              <span>04 — EXHIBITION // CODE ARCHIVES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F2F0EB]">
              DIGITAL EXHIBITION<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-[#F2F0EB] to-cyber-gold">
                PROJECT GALLERY.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm font-mono text-editorial-secondary leading-relaxed">
            [EXHIBITION PROTOCOL: 4 VERIFIED TECHNICAL PROJECTS FROM RESUME]
          </div>
        </div>

        {/* Project Selector Rail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {projectsData.map((project) => {
            const isActive = project.id === activeProjectId;
            return (
              <button
                key={project.id}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveProjectId(project.id);
                }}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'bg-[#141414] border-cyber-accent text-[#F2F0EB] shadow-2xl shadow-cyber-accent/15'
                    : 'bg-[#0f0f0f] border-white/10 text-editorial-secondary hover:border-white/20 hover:text-[#F2F0EB]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-accent to-cyber-gold" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-black text-cyber-accent">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#F2F0EB] mb-2 leading-tight group-hover:text-cyber-accent transition-colors">
                  {project.title}
                </h3>

                <p className="font-mono text-xs text-cyber-gold mb-3 line-clamp-1">
                  {project.category}
                </p>

                <div className="flex items-center gap-1 font-mono text-[11px] text-editorial-muted group-hover:text-cyber-accent transition-colors pt-2 border-t border-white/5">
                  <span>INSPECT TELEMETRY</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Full Exhibition Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#111111] border border-white/15 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Project Narrative & Architectural Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-black text-cyber-accent">
                    {activeProject.number}
                  </span>
                  <span className="h-4 w-[1px] bg-white/20" />
                  <span className="font-mono text-xs uppercase tracking-widest text-cyber-gold">
                    {activeProject.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-display font-black text-[#F2F0EB] tracking-tight">
                  {activeProject.title}
                </h3>

                <p className="font-mono text-xs sm:text-sm text-cyber-accent tracking-wide">
                  "{activeProject.tagline}"
                </p>

                <p className="text-base sm:text-lg text-editorial-secondary leading-relaxed font-light">
                  {activeProject.description}
                </p>

                {/* Key Concept Box */}
                <div className="p-4 rounded-xl bg-[#090909] border border-white/5 space-y-1.5">
                  <div className="font-mono text-xs text-cyber-gold uppercase tracking-wider font-semibold">
                    Core Security / Engineering Concept:
                  </div>
                  <p className="font-mono text-xs text-editorial-primary leading-relaxed">
                    {activeProject.keyConcept}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-editorial-muted uppercase tracking-wider">
                    Key Architectural Highlights:
                  </div>
                  {activeProject.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-editorial-secondary">
                      <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <div className="font-mono text-xs text-editorial-muted uppercase tracking-wider mb-2">
                    Verified Technology Tags:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[#191919] border border-white/10 font-mono text-xs text-[#F2F0EB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Actions */}
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={activeProject.githubUrl || 'https://github.com/KeerthiVaasan-07'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-cyber-accent text-[#090909] font-mono text-xs font-bold hover:bg-[#F2F0EB] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB REPOSITORY</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Custom Interactive Simulation Visual */}
              <div className="lg:col-span-6 space-y-4">
                <div className="font-mono text-xs text-editorial-muted uppercase tracking-widest flex items-center justify-between">
                  <span>LIVE ARCHITECTURE VISUALIZATION</span>
                  <span className="text-cyber-accent">SIMULATED TELEMETRY</span>
                </div>

                {renderVisual(activeProject.visualType)}

                <div className="p-4 rounded-xl bg-[#090909] border border-white/5 font-mono text-xs text-editorial-secondary">
                  <span className="text-cyber-accent font-semibold">SECURITY IMPACT: </span>
                  {activeProject.securityFocus}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section Pagination Bar */}
        <SectionPagination currentSectionId="projects" onNavigate={onNavigate} />
      </div>
    </section>
  );
};
