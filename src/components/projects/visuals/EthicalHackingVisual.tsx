import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface AuditNode {
  id: string;
  name: string;
  status: 'Audited' | 'Secured' | 'Hardened';
  vulnScore: string;
  remediation: string;
}

export const EthicalHackingVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes: AuditNode[] = [
    {
      id: 'NODE-01',
      name: 'AUTH_GATEWAY // PORT 8443',
      status: 'Secured',
      vulnScore: 'Low (CVSS 2.1)',
      remediation: 'Patched TLS 1.3 downgrade weakness, enforced HTTP Strict Transport Security (HSTS).'
    },
    {
      id: 'NODE-02',
      name: 'CORE_DATABASE // PORT 5432',
      status: 'Hardened',
      vulnScore: 'Mitigated (CVSS 0.0)',
      remediation: 'Parameterized queries enforced. Strict access control lists (ACL) configured.'
    },
    {
      id: 'NODE-03',
      name: 'API_ENDPOINT // /api/v2/stream',
      status: 'Audited',
      vulnScore: 'Remediated',
      remediation: 'Rate limiting implemented against automated enumeration. Token validation reinforced.'
    }
  ];

  return (
    <div className="w-full bg-[#111111] rounded-xl border border-white/10 p-5 font-mono text-xs overflow-hidden">
      {/* Top Protocol Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2 text-cyber-emerald font-semibold tracking-wide">
          <ShieldCheck className="w-4 h-4 text-cyber-emerald" />
          <span>AUTHORIZED_VULNERABILITY_ASSESSMENT // SCOPE_VERIFIED</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 text-[10px]">
          ETHICAL SCOPE: 100% COMPLIANT
        </span>
      </div>

      {/* Interactive Topology Graph */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
        {nodes.map((node, idx) => (
          <button
            key={node.id}
            onClick={() => setActiveNode(idx)}
            className={`text-left p-3 rounded-lg border transition-all ${
              activeNode === idx
                ? 'bg-cyber-accent/15 border-cyber-accent text-[#F2F0EB] shadow-lg shadow-cyber-accent/10'
                : 'bg-[#090909] border-white/5 text-editorial-secondary hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-cyber-accent">{node.id}</span>
              <span className="flex items-center gap-1 text-[10px] text-cyber-emerald">
                <CheckCircle2 className="w-3 h-3" />
                {node.status}
              </span>
            </div>
            <div className="font-semibold text-xs tracking-tight truncate">{node.name}</div>
          </button>
        ))}
      </div>

      {/* Selected Node Inspection Card */}
      <div className="bg-[#090909] rounded-lg p-3.5 border border-white/10 space-y-2">
        <div className="flex items-center justify-between text-editorial-muted text-[11px]">
          <span className="flex items-center gap-1.5 text-cyber-gold">
            <Lock className="w-3 h-3 text-cyber-gold" />
            TARGET INSPECTION REPORT: {nodes[activeNode].name}
          </span>
          <span className="text-cyber-emerald">SCORE: {nodes[activeNode].vulnScore}</span>
        </div>
        <div className="text-editorial-primary text-xs leading-relaxed border-t border-white/5 pt-2">
          <span className="text-cyber-accent font-semibold">Remediation Action: </span>
          {nodes[activeNode].remediation}
        </div>
      </div>
    </div>
  );
};
