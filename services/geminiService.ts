import { GoogleGenAI, Type, Schema } from "@google/genai";
import { DHISE_PHP_SYSTEM_PROMPT } from '../constants';
import { ProjectStructure, ProjectFile } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Define the response schema strictly
const fileSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    path: { type: Type.STRING, description: "Relative path of the file, e.g., 'includes/db.php'" },
    content: { type: Type.STRING, description: "The full source code or text content of the file." },
  },
  required: ["path", "content"],
};

const projectSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    projectName: { type: Type.STRING },
    projectDescription: { type: Type.STRING },
    files: {
      type: Type.ARRAY,
      items: fileSchema,
    },
  },
  required: ["projectName", "files"],
};

export const generateProject = async (userPrompt: string): Promise<ProjectStructure> => {
  try {
    const modelId = "gemini-2.5-flash"; // Fast and capable for code generation

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction: DHISE_PHP_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: projectSchema,
        temperature: 0.2, // Low temperature for deterministic code
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const data = JSON.parse(text);

    // Transform to internal structure
    const files: ProjectFile[] = data.files.map((f: any) => ({
      path: f.path,
      content: f.content,
      type: 'file',
      language: getLanguageFromExtension(f.path)
    }));

    // Sort files: Root files last, folders alphabetically
    files.sort((a, b) => {
        const depthA = a.path.split('/').length;
        const depthB = b.path.split('/').length;
        if (depthA !== depthB) return depthB - depthA; // Deeper files first usually means components, but let's just alphabetical
        return a.path.localeCompare(b.path);
    });

    return {
      name: data.projectName || "Untitled PHP Project",
      description: data.projectDescription || "",
      files: files
    };

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw new Error("Failed to generate project. Please try again.");
  }
};

const getLanguageFromExtension = (path: string): string => {
  const ext = path.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'php': return 'php';
    case 'html': return 'html';
    case 'css': return 'css';
    case 'js': return 'javascript';
    case 'sql': return 'sql';
    case 'json': return 'json';
    case 'md': return 'markdown';
    default: return 'plaintext';
  }
};