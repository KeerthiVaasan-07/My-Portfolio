import React, { useState } from 'react';
import { Volume2, VolumeX, FileText, Menu } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { cyberAudio } from '../../utils/audio';

interface NavigationDockProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenMobileMenu: () => void;
  onOpenResumeModal: () => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  activeSection,
  onNavigate,
  onOpenMobileMenu,
  onOpenResumeModal,
}) => {
  const [audioEnabled, setAudioEnabled] = useState(false);

  const handleAudioToggle = () => {
    const newState = cyberAudio.toggle();
    setAudioEnabled(newState);
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo: Keerthi Vaasan T */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('hero');
          }}
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111111]/85 backdrop-blur-xl border border-white/10 hover:border-cyber-accent/40 transition-all duration-300 group"
          title="Keerthi Vaasan T - Portfolio 2026"
        >
          <div className="w-2 h-2 rounded-full bg-cyber-accent animate-ping" />
          <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-[#F2F0EB] group-hover:text-cyber-accent transition-colors">
            Keerthi Vaasan T
          </span>
        </a>

        {/* Desktop Minimal Floating Dock for Section Views */}
        <nav className="hidden lg:flex pointer-events-auto items-center gap-1 px-3 py-2 rounded-full bg-[#111111]/85 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  cyberAudio.playClick();
                  onNavigate(item.id);
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#F2F0EB] font-bold'
                    : 'text-editorial-secondary hover:text-[#F2F0EB]'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-cyber-accent/25 rounded-full border border-cyber-accent/50 shadow-lg shadow-cyber-accent/20" />
                )}
                <span className={`text-[10px] ${isActive ? 'text-cyber-accent font-bold' : 'text-editorial-muted'}`}>
                  {item.number}
                </span>
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Tools Dock: Audio toggle + Resume button + Mobile trigger */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => cyberAudio.playHover()}
            title={audioEnabled ? 'Mute cyber audio synthesizer' : 'Enable ambient cyber synthesizer'}
            className="w-10 h-10 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 hover:border-cyber-accent/40 text-editorial-secondary hover:text-[#F2F0EB] flex items-center justify-center transition-all"
          >
            {audioEnabled ? (
              <Volume2 className="w-4 h-4 text-cyber-accent animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-editorial-muted" />
            )}
          </button>

          {/* Dedicated Resume Preview Trigger */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              onOpenResumeModal();
            }}
            onMouseEnter={() => cyberAudio.playHover()}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-cyber-accent/15 border border-cyber-accent/30 hover:bg-cyber-accent/25 hover:border-cyber-accent text-[#F2F0EB] font-mono text-xs transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-cyber-accent" />
            <span>RESUME</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              onOpenMobileMenu();
            }}
            className="lg:hidden w-10 h-10 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 hover:border-cyber-accent/40 text-editorial-secondary hover:text-[#F2F0EB] flex items-center justify-center transition-all"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
