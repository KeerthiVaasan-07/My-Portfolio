import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import type { CertificationItem } from '../../types';
import { cyberAudio } from '../../utils/audio';
import { MicrosoftIcon, CiscoIcon } from '../ui/BrandIcons';
import { SectionPagination } from '../navigation/SectionPagination';

interface CertificationsSectionProps {
  onNavigate: (id: string) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [filterIssuer, setFilterIssuer] = useState<'ALL' | 'Cisco' | 'Microsoft'>('ALL');

  const filteredCerts = filterIssuer === 'ALL'
    ? certificationsData
    : certificationsData.filter((c) => c.category === filterIssuer);

  const ciscoCount = certificationsData.filter((c) => c.category === 'Cisco').length;
  const msCount = certificationsData.filter((c) => c.category === 'Microsoft').length;

  return (
    <section
      id="certifications"
      className="relative min-h-[92vh] w-full py-28 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyber-accent" />
              <span>06 — ACCREDITATION // INDUSTRY CREDENTIALS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F2F0EB]">
              VERIFIED LEARNING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-[#F2F0EB] to-cyber-gold">
                & CREDENTIALS.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm font-mono text-editorial-secondary leading-relaxed space-y-1">
            <div>[OFFICIAL INDUSTRY BADGES: CISCO NETACADEMY & MICROSOFT LEARN]</div>
            <a
              href="https://learn.microsoft.com/en-in/users/keerthivaasant-2593/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyber-accent hover:underline text-xs"
            >
              <span>MICROSOFT LEARN PROFILE // keerthivaasant-2593</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <button
            onClick={() => {
              cyberAudio.playClick();
              setFilterIssuer('ALL');
            }}
            className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              filterIssuer === 'ALL'
                ? 'bg-cyber-accent text-[#090909] font-bold shadow-lg shadow-cyber-accent/20'
                : 'bg-[#141414] text-editorial-secondary hover:text-[#F2F0EB] border border-white/5'
            }`}
          >
            ALL CREDENTIALS ({certificationsData.length})
          </button>

          <button
            onClick={() => {
              cyberAudio.playClick();
              setFilterIssuer('Microsoft');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              filterIssuer === 'Microsoft'
                ? 'bg-[#191919] border-cyber-accent text-[#F2F0EB] font-bold border shadow-lg shadow-cyber-accent/15'
                : 'bg-[#141414] text-editorial-secondary hover:text-[#F2F0EB] border border-white/5'
            }`}
          >
            <MicrosoftIcon className="w-3.5 h-3.5" />
            <span>MICROSOFT LEARN ({msCount})</span>
          </button>

          <button
            onClick={() => {
              cyberAudio.playClick();
              setFilterIssuer('Cisco');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              filterIssuer === 'Cisco'
                ? 'bg-[#191919] border-cyber-accent text-[#F2F0EB] font-bold border shadow-lg shadow-cyber-accent/15'
                : 'bg-[#141414] text-editorial-secondary hover:text-[#F2F0EB] border border-white/5'
            }`}
          >
            <CiscoIcon className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>CISCO NETACADEMY ({ciscoCount})</span>
          </button>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const isMicrosoft = cert.category === 'Microsoft';
            return (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`p-7 rounded-3xl bg-[#111111] border transition-all duration-300 relative group flex flex-col justify-between shadow-2xl ${
                  isMicrosoft
                    ? 'border-cyber-accent/30 hover:border-cyber-accent'
                    : 'border-white/10 hover:border-cyber-accent/40'
                }`}
              >
                {/* Corner accent glow */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-transparent rounded-tr-3xl pointer-events-none ${
                    isMicrosoft ? 'from-cyber-accent/20' : 'from-cyber-gold/15'
                  }`}
                />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#191919] border border-white/10 flex items-center justify-center text-cyber-accent group-hover:scale-110 transition-transform">
                      {isMicrosoft ? (
                        <MicrosoftIcon className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5 text-cyber-accent" />
                      )}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      {isMicrosoft ? 'ASSESSMENT PASSED' : 'VERIFIED'}
                    </span>
                  </div>

                  {/* Issuer & Date */}
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                    <span className={isMicrosoft ? 'text-cyber-accent font-semibold' : 'text-cyber-gold'}>
                      {cert.issuer}
                    </span>
                    {cert.completionDate && (
                      <span className="text-[10px] text-editorial-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.completionDate.replace('Completed on ', '')}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#F2F0EB] mb-4 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Competencies Validated */}
                  <div className="space-y-1.5 mb-6">
                    <div className="font-mono text-[10px] text-editorial-muted uppercase tracking-wider">
                      Competencies Covered:
                    </div>
                    {cert.skillsCovered.slice(0, 3).map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-editorial-secondary font-mono truncate">
                        <span className={`w-1.5 h-1.5 rounded-full ${isMicrosoft ? 'bg-cyber-accent' : 'bg-cyber-gold'}`} />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                    {cert.skillsCovered.length > 3 && (
                      <div className="text-[10px] font-mono text-editorial-muted pl-3.5">
                        +{cert.skillsCovered.length - 3} more modules
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      setSelectedCert(cert);
                    }}
                    className="font-mono text-xs text-cyber-accent hover:text-[#F2F0EB] flex items-center gap-1 transition-colors"
                  >
                    <span>INSPECT DETAILS</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <a
                    href={cert.verificationUrl || (isMicrosoft ? 'https://learn.microsoft.com/en-in/users/keerthivaasant-2593/' : 'https://www.netacad.com/')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-editorial-muted hover:text-cyber-gold transition-colors"
                  >
                    {isMicrosoft ? 'MICROSOFT LEARN ↗' : 'CISCO NETACAD ↗'}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for Certificate Detail Inspection */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <div className="fixed inset-0" onClick={() => setSelectedCert(null)} />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10 w-full max-w-lg bg-[#141414] border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent">
                    <ShieldCheck className="w-4 h-4 text-cyber-accent" />
                    <span>{selectedCert.category === 'Microsoft' ? 'MICROSOFT LEARN CREDENTIAL' : 'CISCO NETACADEMY CREDENTIAL'}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-editorial-muted hover:text-[#F2F0EB] font-mono text-xs"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F2F0EB]">
                    {selectedCert.title}
                  </h3>
                  <div className="flex items-center justify-between gap-2 mt-2 font-mono text-xs">
                    <span className="text-cyber-gold font-semibold">Issuer: {selectedCert.issuer}</span>
                    {selectedCert.completionDate && (
                      <span className="text-editorial-secondary">{selectedCert.completionDate}</span>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090909] border border-white/5 space-y-2">
                  <div className="font-mono text-xs text-editorial-muted uppercase">Verified Modules & Syllabus:</div>
                  <ul className="space-y-2 font-mono text-xs text-editorial-primary">
                    {selectedCert.skillsCovered.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-cyber-accent text-[#090909] font-mono text-xs font-bold hover:bg-[#F2F0EB] transition-colors flex items-center gap-2"
                  >
                    <span>
                      {selectedCert.category === 'Microsoft' ? 'OPEN MICROSOFT PROFILE' : 'OPEN CISCO PORTAL'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="font-mono text-xs text-editorial-muted hover:text-[#F2F0EB]"
                  >
                    DISMISS
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Section Pagination Bar */}
        <SectionPagination currentSectionId="certifications" onNavigate={onNavigate} />
      </div>
    </section>
  );
};
