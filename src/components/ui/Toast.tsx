import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-[1000] flex items-center gap-3 px-4 py-3 rounded-xl bg-[#191919] border border-cyber-accent/40 shadow-2xl shadow-black/80 text-[#F2F0EB]"
        >
          <div className="w-6 h-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent">
            <CheckCircle2 className="w-4 h-4 text-cyber-accent" />
          </div>
          <span className="text-sm font-medium font-mono text-[#F2F0EB]">{message}</span>
          <button
            onClick={onClose}
            className="ml-3 text-editorial-muted hover:text-[#F2F0EB] text-xs font-mono"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
