// Workflow type definitions for landing page demo

export type ElementType = 'input' | 'prompt' | 'output' | 'action' | 'workflow';

export interface ElementSelector {
  selector?: string;
  xpath?: string;
  tagName: string;
  id?: string;
  name?: string;
  className?: string;
  description?: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface PromptConfig {
  systemPrompt?: string;
  userPrompt: string;
}

export interface OutputConfig {
  type: 'popup' | 'page' | 'clipboard' | 'download';
  clearBeforeWrite?: boolean;
}

export interface WorkflowElement {
  id: string;
  name: string;
  type: ElementType;
  position: Position;
  inputSelector?: ElementSelector;
  promptConfig?: PromptConfig;
  outputConfig?: OutputConfig;
  websiteUrl?: string;
}

export interface WorkflowConnection {
  sourceElementId: string;
  targetElementId: string;
  connectionType: 'direct';
}

export interface Workflow {
  name: string;
  description?: string;
  version?: string;
  elements: WorkflowElement[];
  connections: WorkflowConnection[];
  metadata?: {
    author?: string;
    tags?: string[];
    category?: string;
    documentation?: string;
  };
}

export interface ExecutionStatus {
  elementId: string;
  status: 'pending' | 'running' | 'success' | 'error';
  message?: string;
  timestamp: number;
}
