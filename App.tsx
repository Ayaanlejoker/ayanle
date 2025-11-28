import React, { useState, useEffect } from 'react';
import { generateProject } from './services/geminiService';
import { ProjectFile, ProjectStructure } from './types';
import { FileExplorer } from './components/FileExplorer';
import { CodeViewer } from './components/CodeViewer';
import { Terminal } from './components/Terminal';
import { Loader2, Box, Code2, Layout, Database } from 'lucide-react';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState<ProjectStructure | null>(null);
  const [selectedFile, setSelectedFile] = useState<ProjectFile | null>(null);
  const [logs, setLogs] = useState<string[]>(["DhisePHP AI System Online.", "Waiting for project instructions..."]);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    if (!process.env.API_KEY) {
      setApiKeyMissing(true);
      setLogs(prev => [...prev, "CRITICAL ERROR: API_KEY is missing from environment variables."]);
    }
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setLogs(prev => [...prev, `> Analysis started: "${prompt}"`, "> Designing architecture...", "> Generating PHP backend...", "> Crafting MySQL schema...", "> Building frontend assets..."]);
    
    try {
      const result = await generateProject(prompt);
      setProject(result);
      if (result.files.length > 0) {
        setSelectedFile(result.files[0]);
      }
      setLogs(prev => [...prev, "> Project generation complete.", "> System ready."]);
    } catch (error) {
      console.error(error);
      setLogs(prev => [...prev, `> Error: ${(error as Error).message}`]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="flex h-full flex-col md:flex-row bg-slate-950 text-slate-200">
      {/* Sidebar - File Explorer */}
      <div className="w-full md:w-72 bg-slate-900 border-r border-slate-800 flex flex-col h-[40vh] md:h-full">
        <div className="p-4 border-b border-slate-800 flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">DhisePHP</h1>
            <span className="text-xs text-blue-400">v2.0.0 (AI-Powered)</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {project ? (
            <FileExplorer 
              files={project.files} 
              selectedFile={selectedFile} 
              onSelect={setSelectedFile} 
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 p-4 text-center">
              <Box className="w-12 h-12 mb-3 opacity-20" />
              <p className="text-sm">No project loaded.</p>
              <p className="text-xs mt-1">Enter a prompt to generate a PHP system.</p>
            </div>
          )}
        </div>
        
        {/* Project Stats */}
        {project && (
          <div className="p-3 bg-slate-800/50 text-xs border-t border-slate-800">
            <div className="flex justify-between mb-1">
              <span>Files:</span>
              <span className="text-slate-300">{project.files.length}</span>
            </div>
            <div className="flex justify-between">
              <span>DB Tables:</span>
              <span className="text-slate-300">
                {project.files.find(f => f.path.endsWith('.sql')) ? 'Included' : 'None'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-[60vh] md:h-full min-w-0">
        
        {/* Top Bar / Tabs */}
        <div className="h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
          <div className="flex items-center space-x-2 overflow-hidden">
             {selectedFile ? (
               <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-800 rounded-md text-sm text-blue-300 border border-blue-900/50">
                 <Code2 className="w-4 h-4" />
                 <span className="truncate">{selectedFile.path}</span>
               </div>
             ) : (
                <span className="text-slate-500 text-sm italic">Select a file to view code</span>
             )}
          </div>
          {isLoading && (
            <div className="flex items-center space-x-2 text-blue-400 text-xs animate-pulse">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generative Process Active...</span>
            </div>
          )}
        </div>

        {/* Code Viewer */}
        <div className="flex-1 overflow-hidden relative bg-slate-950">
          {selectedFile ? (
             <CodeViewer file={selectedFile} />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-600">
              <div className="text-center">
                <Layout className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <h2 className="text-xl font-semibold mb-2">Ready to Build</h2>
                <p className="max-w-md mx-auto text-sm">
                  DhisePHP AI specializes in creating production-ready PHP & MySQL architectures. 
                  Describe your project idea below.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Terminal / Input Area */}
        <div className="h-64 bg-slate-900 border-t border-slate-800 flex flex-col">
          <Terminal logs={logs} />
          
          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={apiKeyMissing ? "API Key Missing" : "DhisePHP AI, create a project — [describe your idea, e.g., 'A Hospital Management System with Doctor/Patient roles']"}
                disabled={isLoading || apiKeyMissing}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none h-20 text-slate-200 placeholder-slate-500 font-mono disabled:opacity-50"
              />
              <button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim() || apiKeyMissing}
                className="absolute right-3 bottom-3 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-md transition-colors"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span className="text-xs font-bold">RUN</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;