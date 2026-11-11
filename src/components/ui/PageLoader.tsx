import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING OBSIDIAN ENVIRONMENT');

  useEffect(() => {
    const steps = [
      { p: 15, text: 'LOADING THREE.JS SHADER KERNELS...' },
      { p: 38, text: 'PARSING RESUME SOURCE OF TRUTH...' },
      { p: 64, text: 'CONFIGURING CYBER TELEMETRY NODES...' },
      { p: 88, text: 'MOUNTING IMMERSIVE DIGITAL UNIVERSE...' },
      { p: 100, text: 'SYSTEM READY // KEERTHI VAASAN T' },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setStatusText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[10000] bg-[#090909] flex flex-col justify-between p-8 sm:p-14 select-none"
      >
        {/* Top header */}
        <div className="flex items-center justify-between font-mono text-xs text-editorial-muted tracking-widest uppercase">
          <span>KEERTHI VAASAN T</span>
          <span>CYBERSECURITY & DEV // 2026</span>
        </div>

        {/* Center Progress Counter */}
        <div className="max-w-xl mx-auto w-full text-center space-y-6">
          <div className="text-7xl sm:text-9xl font-display font-black tracking-tighter text-[#F2F0EB]">
            {progress}
            <span className="text-cyber-accent text-3xl sm:text-5xl">%</span>
          </div>

          <div className="w-full bg-[#191919] h-[2px] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-accent via-cyber-gold to-[#F2F0EB]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>

          <div className="font-mono text-xs sm:text-sm text-cyber-accent tracking-widest uppercase">
            {statusText}
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex items-center justify-between font-mono text-[11px] text-editorial-muted">
          <span>PORTFOLIO SYSTEM</span>
          <span>AMRITA VISHWA VIDYAPEETHAM</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
