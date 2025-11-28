import React from 'react';
import { ProjectFile } from '../types';
import { FileCode, FileJson, FileText, Database, Folder, FileType } from 'lucide-react';

interface FileExplorerProps {
  files: ProjectFile[];
  selectedFile: ProjectFile | null;
  onSelect: (file: ProjectFile) => void;
}

const getIconForFile = (path: string) => {
  const ext = path.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'php': return <FileCode className="w-4 h-4 text-purple-400" />;
    case 'js': return <FileCode className="w-4 h-4 text-yellow-400" />;
    case 'css': return <FileType className="w-4 h-4 text-blue-400" />;
    case 'html': return <FileCode className="w-4 h-4 text-orange-400" />;
    case 'sql': return <Database className="w-4 h-4 text-green-400" />;
    case 'json': return <FileJson className="w-4 h-4 text-gray-400" />;
    case 'md': return <FileText className="w-4 h-4 text-slate-400" />;
    default: return <FileText className="w-4 h-4 text-slate-400" />;
  }
};

export const FileExplorer: React.FC<FileExplorerProps> = ({ files, selectedFile, onSelect }) => {
  // Simple flat rendering for now, but indented by slashes
  return (
    <div className="space-y-0.5">
        {files.map((file) => {
            const depth = file.path.split('/').length - 1;
            const isSelected = selectedFile?.path === file.path;
            
            return (
                <button
                    key={file.path}
                    onClick={() => onSelect(file)}
                    className={`w-full flex items-center space-x-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
                        isSelected 
                            ? 'bg-blue-600/20 text-blue-300' 
                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                    style={{ paddingLeft: `${(depth * 12) + 8}px` }}
                >
                    <span className="opacity-75">{getIconForFile(file.path)}</span>
                    <span className="truncate">{file.path.split('/').pop()}</span>
                </button>
            );
        })}
    </div>
  );
};