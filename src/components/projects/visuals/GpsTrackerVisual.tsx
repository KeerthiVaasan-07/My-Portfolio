import React, { useEffect, useRef, useState } from 'react';
import { Radio, Wifi, Satellite, Cpu } from 'lucide-react';

export const GpsTrackerVisual: React.FC = () => {
  const [telemetry] = useState({
    satellitesLocked: 8,
    fixType: '3D GPS FIX',
    signalChannel: 'Wi-Fi / GSM Failover',
    nmeaSentence: '$GPGGA,123519,10.9027,N,076.8997,E,1,08,0.9,545.4,M*47'
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const render = () => {
      angle += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = 42;

      // Draw Earth Wireframe Sphere
      ctx.strokeStyle = 'rgba(213, 213, 213, 0.2)';
      ctx.lineWidth = 1;

      // Outer circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Longitude ellipses
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(radius * Math.cos(angle + i * 0.6)), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(167, 139, 250, 0.18)';
        ctx.stroke();
      }

      // Latitude lines
      for (let j = -2; j <= 2; j++) {
        const yOff = j * 14;
        const rLat = Math.sqrt(Math.max(0, radius * radius - yOff * yOff));
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOff, rLat, rLat * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(185, 155, 114, 0.2)';
        ctx.stroke();
      }

      // Orbiting Satellite Track
      const orbitR = radius + 22;
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.35)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Satellite position
      const satX = cx + Math.cos(angle * 1.5) * orbitR;
      const satY = cy + Math.sin(angle * 1.5) * (orbitR * 0.7);

      ctx.fillStyle = '#A78BFA';
      ctx.beginPath();
      ctx.arc(satX, satY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Satellite broadcast ray to Earth
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(cx + 8, cy - 6);
      ctx.stroke();

      // ESP32 ground node
      ctx.fillStyle = '#34D399';
      ctx.beginPath();
      ctx.arc(cx + 8, cy - 6, 3.5, 0, Math.PI * 2);
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
        <div className="flex items-center gap-2 text-cyber-gold font-semibold tracking-wide">
          <Satellite className="w-4 h-4 text-cyber-gold" />
          <span>ESP32_TELEMETRY // MULTI-CHANNEL GEO-STREAM</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyber-gold/15 text-cyber-gold border border-cyber-gold/30 text-[10px]">
          U-BLOX NMEA LOCK
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {/* Orbit Canvas */}
        <div className="relative w-full h-36 bg-[#090909] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
          <canvas ref={canvasRef} width={280} height={144} className="w-full h-full" />
          <div className="absolute top-2 left-2 text-[9px] text-cyber-emerald flex items-center gap-1">
            <Radio className="w-3 h-3 animate-ping" />
            LIVE TELEMETRY
          </div>
        </div>

        {/* Telemetry Status Box */}
        <div className="bg-[#050505] rounded-lg p-3 border border-white/5 space-y-2 text-[11px] flex flex-col justify-center">
          <div className="flex items-center justify-between text-editorial-secondary">
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-cyber-accent" /> MCU:</span>
            <span className="text-[#F2F0EB]">ESP32 Dual-Core 240MHz</span>
          </div>
          <div className="flex items-center justify-between text-editorial-secondary">
            <span className="flex items-center gap-1"><Satellite className="w-3 h-3 text-cyber-gold" /> Sats:</span>
            <span className="text-cyber-emerald">{telemetry.satellitesLocked} Locked ({telemetry.fixType})</span>
          </div>
          <div className="flex items-center justify-between text-editorial-secondary">
            <span className="flex items-center gap-1"><Wifi className="w-3 h-3 text-cyber-accent" /> Comm:</span>
            <span className="text-cyber-gold">{telemetry.signalChannel}</span>
          </div>
        </div>
      </div>

      {/* Raw NMEA Stream */}
      <div className="bg-[#090909] p-2.5 rounded border border-white/5 text-[10px] text-editorial-muted truncate">
        <span className="text-cyber-emerald font-mono">&gt; RAW: </span>
        <span className="text-editorial-secondary">{telemetry.nmeaSentence}</span>
      </div>
    </div>
  );
};
