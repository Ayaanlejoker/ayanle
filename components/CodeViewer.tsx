import React from 'react';
import { ProjectFile } from '../types';

interface CodeViewerProps {
  file: ProjectFile;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ file }) => {
  return (
    <div className="h-full w-full overflow-auto bg-[#0d1117] text-gray-300 p-4 font-mono text-sm leading-relaxed">
      <pre>
        <code>{file.content}</code>
      </pre>
    </div>
  );
};