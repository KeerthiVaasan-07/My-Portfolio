import React from 'react';
import { Phone, Copy, Download, ArrowUpRight } from 'lucide-react';
import { ContactScene } from '../three/scenes/ContactScene';
import { personalData } from '../../data/personal';
import { cyberAudio } from '../../utils/audio';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { SectionPagination } from '../navigation/SectionPagination';

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
  onDownloadResume: () => void;
  onNavigate: (id: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyEmail,
  onDownloadResume,
  onNavigate,
}) => {
  return (
    <section
      id="contact"
      className="relative min-h-[92vh] w-full pt-28 pb-12 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB] flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-accent uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyber-accent" />
              <span>07 — COMMUNICATE // SECURE CHANNEL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F2F0EB]">
              LET'S BUILD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-[#F2F0EB] to-cyber-gold">
                WHAT'S NEXT.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base font-light text-editorial-secondary leading-relaxed">
            Interested in technology, cybersecurity, or building something meaningful? Let's connect.
          </div>
        </div>

        {/* Center Grid: 3D Centerpiece + Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Direct Links & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 hover:border-cyber-accent/40 transition-all space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-editorial-muted">
                <span>PRIMARY EMAIL</span>
                <span className="text-cyber-accent">DIRECT TRANSMISSION</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${personalData.email}`}
                  className="font-mono text-base sm:text-lg text-[#F2F0EB] hover:text-cyber-accent transition-colors truncate"
                >
                  {personalData.email}
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onCopyEmail(personalData.email);
                    }}
                    className="p-2.5 rounded-xl bg-[#191919] hover:bg-[#222] border border-white/10 text-editorial-secondary hover:text-[#F2F0EB] transition-colors"
                    title="Copy email to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="p-2.5 rounded-xl bg-cyber-accent text-[#090909] font-bold hover:bg-[#F2F0EB] transition-colors"
                    title="Open mail client"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 hover:border-cyber-gold/40 transition-all space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-editorial-muted">
                <span>TELEPHONE / WHATSAPP</span>
                <span className="text-cyber-gold">+91 TELEMETRY</span>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-base sm:text-lg text-[#F2F0EB] hover:text-cyber-gold transition-colors"
                >
                  {personalData.phone}
                </a>
                <a
                  href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-xl bg-[#191919] hover:bg-[#222] border border-white/10 text-cyber-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social / Network Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-cyber-accent/50 text-[#F2F0EB] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#191919] flex items-center justify-center text-cyber-accent">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">LinkedIn</div>
                    <div className="text-[11px] font-mono text-editorial-muted">Professional Network</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-editorial-muted group-hover:text-cyber-accent transition-colors" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-cyber-accent/50 text-[#F2F0EB] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#191919] flex items-center justify-center text-editorial-metallic">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">GitHub</div>
                    <div className="text-[11px] font-mono text-editorial-muted">Open Source Code</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-editorial-muted group-hover:text-cyber-accent transition-colors" />
              </a>
            </div>

            {/* Download Resume Action */}
            <div className="pt-2">
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onDownloadResume();
                }}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyber-accent/20 via-[#181818] to-cyber-gold/20 border border-cyber-accent/40 hover:border-cyber-accent text-[#F2F0EB] font-mono text-xs font-bold tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-xl"
              >
                <Download className="w-4 h-4 text-cyber-accent" />
                <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Cyber Core Centerpiece */}
          <div className="lg:col-span-6 bg-[#111111] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 left-6 font-mono text-xs text-editorial-muted">
              CYBER SHIELD MATRIX // 3D INTERACTION
            </div>
            <ContactScene />
            <div className="font-mono text-xs text-cyber-gold tracking-widest uppercase mt-4 text-center">
              "THINK BEYOND CODE. BUILD BEYOND LIMITS."
            </div>
          </div>
        </div>

        {/* Section Pagination Bar */}
        <SectionPagination currentSectionId="contact" onNavigate={onNavigate} />

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-editorial-muted">
          <div>
            DESIGNED &amp; BUILT BY <span className="text-[#F2F0EB] font-semibold">{personalData.name}</span>.
          </div>
          <div className="flex items-center gap-4">
            <span>AMRITA VISHWA VIDYAPEETHAM</span>
            <span>•</span>
            <span className="text-cyber-accent">2026 EDITION</span>
          </div>
        </div>
      </div>
    </section>
  );
};
