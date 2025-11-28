import React, { useRef, useEffect } from 'react';
import { TerminalSquare } from 'lucide-react';

interface TerminalProps {
  logs: string[];
}

export const Terminal: React.FC<TerminalProps> = ({ logs }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex-1 bg-black p-3 font-mono text-xs overflow-hidden flex flex-col">
      <div className="flex items-center space-x-2 text-slate-500 mb-2 border-b border-slate-900 pb-1">
        <TerminalSquare className="w-3 h-3" />
        <span className="uppercase tracking-wider">System Logs</span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-1">
        {logs.map((log, i) => (
          <div key={i} className={`truncate ${log.includes('Error') ? 'text-red-400' : 'text-green-400/80'}`}>
            <span className="opacity-50 mr-2">{new Date().toLocaleTimeString()}</span>
            {log}
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};