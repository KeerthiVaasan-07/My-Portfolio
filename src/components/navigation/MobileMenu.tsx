import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, FileText } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { personalData } from '../../data/personal';
import { cyberAudio } from '../../utils/audio';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
  onOpenResumeModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
  onOpenResumeModal,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] bg-[#090909]/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="font-mono text-xs text-cyber-accent tracking-widest uppercase">
              NAVIGATION // OBSIDIAN PORTFOLIO
            </div>
            <button
              onClick={() => {
                cyberAudio.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-[#191919] border border-white/10 text-editorial-secondary hover:text-[#F2F0EB] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 my-auto py-6">
            {navigationItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1, duration: 0.35 }}
                  onClick={() => {
                    cyberAudio.playClick();
                    onNavigate(item.id);
                    onClose();
                  }}
                  className="flex items-center justify-between text-left py-2.5 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-cyber-accent">
                      {item.number}
                    </span>
                    <span
                      className={`text-2xl sm:text-4xl font-display font-bold tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-cyber-accent pl-2'
                          : 'text-[#F2F0EB] group-hover:text-cyber-accent group-hover:pl-2'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 text-cyber-accent transition-transform duration-300 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </motion.button>
              );
            })}
          </nav>

          {/* Bottom quick actions */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  onClose();
                  onOpenResumeModal();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-cyber-accent/15 border border-cyber-accent/30 text-[#F2F0EB] font-mono text-xs font-semibold"
              >
                <FileText className="w-4 h-4 text-cyber-accent" />
                <span>VIEW RESUME</span>
              </button>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#191919] border border-white/10 flex items-center justify-center text-editorial-secondary hover:text-[#F2F0EB] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#191919] border border-white/10 flex items-center justify-center text-editorial-secondary hover:text-[#F2F0EB] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-editorial-muted">
              <span>{personalData.email}</span>
              <span>{personalData.phone}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
