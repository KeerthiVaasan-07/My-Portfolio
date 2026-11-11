import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { cyberAudio } from '../../utils/audio';

interface SectionPaginationProps {
  currentSectionId: string;
  onNavigate: (id: string) => void;
}

export const SectionPagination: React.FC<SectionPaginationProps> = ({
  currentSectionId,
  onNavigate,
}) => {
  const currentIndex = navigationItems.findIndex((item) => item.id === currentSectionId);
  const prevItem = currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null;

  return (
    <div className="w-full max-w-7xl mx-auto pt-16 pb-8 border-t border-white/10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
      {/* Prev Button */}
      {prevItem ? (
        <button
          onClick={() => {
            cyberAudio.playClick();
            onNavigate(prevItem.id);
          }}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#111111] hover:bg-[#191919] border border-white/10 text-editorial-secondary hover:text-[#F2F0EB] hover:border-cyber-accent/40 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-cyber-accent" />
          <span>PREVIOUS: {prevItem.number} {prevItem.label}</span>
        </button>
      ) : (
        <div className="text-editorial-muted">01 / 07 — BEGINNING OF DOSSIER</div>
      )}

      {/* Middle indicator */}
      <div className="text-editorial-muted tracking-widest">
        SECTION 0{currentIndex + 1} OF 0{navigationItems.length}
      </div>

      {/* Next Button */}
      {nextItem ? (
        <button
          onClick={() => {
            cyberAudio.playClick();
            onNavigate(nextItem.id);
          }}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-cyber-accent/15 hover:bg-cyber-accent/25 border border-cyber-accent/40 text-[#F2F0EB] hover:border-cyber-accent transition-all font-semibold"
        >
          <span>NEXT: {nextItem.number} {nextItem.label}</span>
          <ArrowRight className="w-4 h-4 text-cyber-accent" />
        </button>
      ) : (
        <button
          onClick={() => {
            cyberAudio.playClick();
            onNavigate('hero');
          }}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-cyber-accent text-[#090909] font-bold transition-all"
        >
          <span>RETURN TO 01 HOME</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
