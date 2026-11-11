import React from 'react';
import { Activity } from 'lucide-react';
import { hobbiesData } from '../../data/hobbies';

export const HobbiesSection: React.FC = () => {
  return (
    <section
      id="hobbies"
      className="relative w-full py-24 px-6 sm:px-12 md:px-16 bg-[#090909] text-[#F2F0EB] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-gold uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-gold" />
              <span>DISCIPLINE // BEYOND THE SCREEN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#F2F0EB]">
              ATHLETIC RIGOR & STRATEGY.
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono text-editorial-secondary leading-relaxed">
            [TACTICAL DISCIPLINE: Handball & Volleyball develop split-second reflexes and collaborative defense]
          </div>
        </div>

        {/* 2-Column Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbiesData.map((hobby) => (
            <div
              key={hobby.id}
              className="p-8 rounded-3xl bg-[#111111] border border-white/10 hover:border-cyber-gold/40 transition-all duration-300 relative overflow-hidden space-y-6"
            >
              {/* Geometric court trajectory graphic backdrop */}
              <div className="absolute top-4 right-4 w-32 h-32 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="#B99B72" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                  <line x1="10" y1="50" x2="90" y2="50" />
                  <path d="M50 10 Q70 50 50 90" />
                </svg>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-cyber-gold uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyber-gold" />
                  {hobby.category}
                </span>
                <span className="font-mono text-[10px] text-editorial-muted">
                  COMPETITIVE COURT
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-3xl text-[#F2F0EB]">
                  {hobby.title}
                </h3>
                <p className="font-mono text-xs text-cyber-accent mt-1">
                  {hobby.subtitle}
                </p>
                <p className="text-sm text-editorial-secondary mt-3 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Athletic Attributes */}
              <div className="space-y-1.5">
                {hobby.attributes.map((attr, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-editorial-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-gold" />
                    <span>{attr}</span>
                  </div>
                ))}
              </div>

              {/* Engineering parallel */}
              <div className="p-3.5 rounded-xl bg-[#090909] border border-white/5 font-mono text-xs text-editorial-secondary leading-relaxed">
                <span className="text-cyber-gold font-semibold">Strategic Parity: </span>
                {hobby.strategicConnection}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
