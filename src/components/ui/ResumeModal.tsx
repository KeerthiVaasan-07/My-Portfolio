import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, Check, Mail, Phone, MapPin, Award, GraduationCap, Shield } from 'lucide-react';
import { personalData } from '../../data/personal';
import { educationData } from '../../data/education';
import { certificationsData } from '../../data/certifications';
import { projectsData } from '../../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadResume: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onDownloadResume,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
          {/* Backdrop click */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0d0d0d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-cyber-accent" />
                <span className="font-mono text-sm font-semibold tracking-wide text-[#F2F0EB]">
                  KEERTHI_VAASAN_RESUME.DOCUMENT_VIEWER
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20">
                  SOURCE OF TRUTH VERIFIED
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onDownloadResume}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-accent text-[#090909] font-semibold text-xs font-mono hover:bg-cyber-accent/90 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-[#222] hover:bg-[#333] text-editorial-secondary hover:text-[#F2F0EB] flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-editorial-primary bg-[#0d0d0d]">
              {/* Document Header */}
              <div className="border-b border-white/10 pb-6">
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#F2F0EB] tracking-tight">
                  {personalData.name}
                </h1>
                <p className="text-sm font-mono text-cyber-accent mt-1">
                  {personalData.headline}
                </p>

                <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-editorial-secondary">
                  <a href={`mailto:${personalData.email}`} className="flex items-center gap-1.5 hover:text-cyber-accent">
                    <Mail className="w-3.5 h-3.5 text-cyber-accent" />
                    <span>{personalData.email}</span>
                  </a>
                  <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-cyber-accent">
                    <Phone className="w-3.5 h-3.5 text-cyber-gold" />
                    <span>{personalData.phone}</span>
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-editorial-muted" />
                    <span>Amrita Vishwa Vidyapeetham</span>
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-cyber-gold font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Professional Summary
                </h2>
                <p className="text-sm sm:text-base text-editorial-secondary leading-relaxed bg-[#141414] p-4 rounded-xl border border-white/5">
                  {personalData.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-cyber-accent font-bold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Education
                </h2>
                {educationData.map((edu) => (
                  <div key={edu.id} className="bg-[#141414] p-5 rounded-xl border border-white/5 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-base text-[#F2F0EB]">{edu.degree}</span>
                      <span className="font-mono text-xs text-cyber-gold">{edu.period}</span>
                    </div>
                    <div className="text-sm text-cyber-accent">{edu.institution}</div>
                    <div className="flex items-center gap-3 text-xs font-mono text-editorial-muted">
                      <span>Status: <span className="text-[#F2F0EB]">{edu.currentStatus}</span></span>
                      <span>•</span>
                      <span>CGPA: <span className="text-cyber-emerald font-bold">{edu.cgpa}</span></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Technical Skills */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-cyber-gold font-bold mb-3">
                  Technical Core Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-[#141414] p-3.5 rounded-xl border border-white/5">
                    <div className="text-cyber-accent font-semibold mb-1">PROGRAMMING LANGUAGES:</div>
                    <div className="text-editorial-primary">Python, C, C++</div>
                  </div>
                  <div className="bg-[#141414] p-3.5 rounded-xl border border-white/5">
                    <div className="text-cyber-accent font-semibold mb-1">WEB TECHNOLOGIES:</div>
                    <div className="text-editorial-primary">HTML, CSS, JavaScript</div>
                  </div>
                  <div className="bg-[#141414] p-3.5 rounded-xl border border-white/5">
                    <div className="text-cyber-accent font-semibold mb-1">CYBERSECURITY:</div>
                    <div className="text-editorial-primary">Cryptography, Cybersecurity Essentials</div>
                  </div>
                  <div className="bg-[#141414] p-3.5 rounded-xl border border-white/5">
                    <div className="text-cyber-accent font-semibold mb-1">PLATFORMS & TOOLS:</div>
                    <div className="text-editorial-primary">Linux, Visual Studio Code, Azure Virtual Desktop</div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-cyber-accent font-bold mb-3">
                  Verified Technical Projects
                </h2>
                <div className="space-y-4">
                  {projectsData.map((project) => (
                    <div key={project.id} className="bg-[#141414] p-4 rounded-xl border border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#F2F0EB]">{project.title}</span>
                        <span className="text-[10px] font-mono text-cyber-gold px-2 py-0.5 rounded bg-cyber-gold/10 border border-cyber-gold/20">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-editorial-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Badges */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-cyber-gold font-bold mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" /> Verified Certifications & Badges ({certificationsData.length})
                  </span>
                  <span className="text-[11px] font-mono text-editorial-muted">Cisco & Microsoft Learn</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {certificationsData.map((cert) => {
                    const isMicrosoft = cert.category === 'Microsoft';
                    return (
                      <div key={cert.id} className="bg-[#141414] p-3.5 rounded-xl border border-white/5 space-y-1">
                        <div className="font-bold text-xs text-[#F2F0EB] leading-snug">{cert.title}</div>
                        <div className="text-[11px] font-mono text-editorial-muted">{cert.issuer}</div>
                        {cert.completionDate && (
                          <div className="text-[10px] font-mono text-cyber-gold">{cert.completionDate}</div>
                        )}
                        <div className="mt-1 text-[10px] font-mono text-cyber-emerald flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>{isMicrosoft ? 'Microsoft Assessment Passed' : 'Cisco Verified'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
