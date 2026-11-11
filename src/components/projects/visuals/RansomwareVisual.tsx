import React, { useEffect, useRef } from 'react';
import { ShieldAlert, Activity, Terminal } from 'lucide-react';

export const RansomwareVisual: React.FC = () => {
  const logs = [
    'FS_WATCH: /storage/sys/documents/ detected file mod frequency spike: +340 files/sec',
    'ENTROPY_ANALYSIS: Shannon entropy computed at 7.94 bits/byte (Threshold: 7.2)',
    'ALERT: High probability of AES-CBC/GCM automated encryption payload',
    'RESPONSE: Isolating PID 4091, tripwire triggered, locking read-write handles'
  ];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw threshold line
      const thresholdY = canvas.height * 0.35;
      ctx.strokeStyle = '#F43F5E';
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(0, thresholdY);
      ctx.lineTo(canvas.width, thresholdY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#F43F5E';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('CRITICAL ENTROPY THRESHOLD (7.2 H)', 10, thresholdY - 6);

      // Draw wave graph
      ctx.beginPath();
      ctx.strokeStyle = '#A78BFA';
      ctx.lineWidth = 2.5;

      const points = 30;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * canvas.width;
        // Normal state then spike on right side
        const isSpike = i > 16;
        const base = isSpike ? thresholdY - 30 : thresholdY + 45;
        const noise = Math.sin(time * 3 + i * 0.5) * (isSpike ? 24 : 8);
        const y = base + noise;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Threat highlight circle
      const spikeX = canvas.width * 0.75;
      const spikeY = thresholdY - 25 + Math.sin(time * 3 + 22 * 0.5) * 20;
      ctx.fillStyle = '#F43F5E';
      ctx.beginPath();
      ctx.arc(spikeX, spikeY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Outer ripple
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(spikeX, spikeY, 12 + Math.sin(time * 6) * 4, 0, Math.PI * 2);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full bg-[#111111] rounded-xl border border-white/10 p-5 font-mono text-xs overflow-hidden">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2 text-cyber-rose font-semibold tracking-wide">
          <ShieldAlert className="w-4 h-4 text-cyber-rose animate-pulse" />
          <span>SHANNON_ENTROPY_DETECTOR // ACTIVE HEURISTICS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-editorial-muted">STATUS:</span>
          <span className="px-2 py-0.5 rounded bg-cyber-rose/20 text-cyber-rose border border-cyber-rose/30">
            HIGH_ENTROPY_TRIPWIRE
          </span>
        </div>
      </div>

      {/* Waveform Canvas */}
      <div className="relative w-full h-36 bg-[#090909] rounded-lg border border-white/5 mb-4 overflow-hidden">
        <canvas ref={canvasRef} width={500} height={144} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded bg-[#111]/80 border border-white/10 text-[10px] text-cyber-accent">
          <Activity className="w-3 h-3 animate-spin" />
          <span>LIVE ANALYSIS: 7.94 H</span>
        </div>
      </div>

      {/* Audit Log Terminal */}
      <div className="bg-[#050505] rounded-lg p-3 border border-white/5 space-y-1.5 text-[11px]">
        <div className="flex items-center gap-1.5 text-editorial-secondary mb-1">
          <Terminal className="w-3.5 h-3.5 text-cyber-accent" />
          <span className="text-[10px] tracking-wider uppercase">Audit Stream Log</span>
        </div>
        {logs.map((log, i) => (
          <div key={i} className="leading-relaxed flex items-start gap-2">
            <span className="text-cyber-accent select-none">&gt;</span>
            <span className={i === 2 ? 'text-cyber-rose font-medium' : i === 3 ? 'text-cyber-emerald font-medium' : 'text-editorial-secondary'}>
              {log}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
