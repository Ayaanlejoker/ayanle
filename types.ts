export interface ProjectFile {
  path: string;
  content: string;
  type: 'file' | 'folder';
  language?: string;
}

export interface ProjectStructure {
  name: string;
  description: string;
  files: ProjectFile[];
}

export enum FileType {
  PHP = 'php',
  SQL = 'sql',
  HTML = 'html',
  CSS = 'css',
  JS = 'javascript',
  JSON = 'json',
  MD = 'markdown',
  TXT = 'text',
  UNKNOWN = 'unknown'
}