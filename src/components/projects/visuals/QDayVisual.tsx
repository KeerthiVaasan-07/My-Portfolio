import React, { useEffect, useRef } from 'react';
import { Binary, AlertTriangle } from 'lucide-react';

export const QDayVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const render = () => {
      angle += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw Rotating Quantum Lattice Points
      const points = 16;
      const baseRadius = 55;

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.25)';
      ctx.lineWidth = 1;

      // Connect lattice matrix
      const coords: { x: number; y: number }[] = [];

      for (let i = 0; i < points; i++) {
        const theta = (i / points) * Math.PI * 2 + angle;
        const r = baseRadius + Math.sin(theta * 3 + angle * 2) * 16;
        const x = centerX + Math.cos(theta) * r;
        const y = centerY + Math.sin(theta) * (r * 0.55);
        coords.push({ x, y });
      }

      for (let i = 0; i < coords.length; i++) {
        for (let j = i + 1; j < coords.length; j++) {
          const dist = Math.hypot(coords[i].x - coords[j].x, coords[i].y - coords[j].y);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(coords[i].x, coords[i].y);
            ctx.lineTo(coords[j].x, coords[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      coords.forEach((c, idx) => {
        ctx.fillStyle = idx % 2 === 0 ? '#A78BFA' : '#B99B72';
        ctx.beginPath();
        ctx.arc(c.x, c.y, idx % 3 === 0 ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Central core
      ctx.fillStyle = '#D5D5D5';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full bg-[#111111] rounded-xl border border-white/10 p-5 font-mono text-xs overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2 text-cyber-accent font-semibold tracking-wide">
          <Binary className="w-4 h-4 text-cyber-accent" />
          <span>Q-DAY_SENTINEL // POST-QUANTUM CRYPTOGRAPHIC AUDITOR</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/30 text-[10px]">
          LATTICE-BASED MIGRATION
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {/* Lattice Canvas */}
        <div className="relative w-full h-36 bg-[#090909] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
          <canvas ref={canvasRef} width={280} height={144} className="w-full h-full" />
          <div className="absolute bottom-2 left-2 text-[9px] text-editorial-muted">
            ROTATING LATTICE KEY EXCHANGE MATRIX
          </div>
        </div>

        {/* Algorithm Risk Triage Matrix */}
        <div className="bg-[#050505] rounded-lg p-3 border border-white/5 space-y-2 text-[11px] flex flex-col justify-center">
          <div className="flex items-center justify-between text-editorial-secondary">
            <span>RSA-2048 / ECC:</span>
            <span className="text-cyber-rose font-bold flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> HIGH (Shor Risk)
            </span>
          </div>
          <div className="flex items-center justify-between text-editorial-secondary">
            <span>AES-256 (Grover):</span>
            <span className="text-cyber-amber font-semibold">MODERATE (Doubled Key)</span>
          </div>
          <div className="flex items-center justify-between text-editorial-secondary">
            <span>ML-KEM / Dilithium:</span>
            <span className="text-cyber-emerald font-semibold">SECURE (Quantum-Safe)</span>
          </div>
        </div>
      </div>

      <div className="text-[11px] text-editorial-secondary leading-relaxed bg-[#090909] p-2.5 rounded border border-white/5">
        <span className="text-cyber-gold font-semibold">SNDL Defense Protocol: </span>
        Flags asymmetric keys stored today against retrospective post-quantum decryption attacks.
      </div>
    </div>
  );
};
