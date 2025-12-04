export type AIProvider = 'openai' | 'anthropic' | 'groq';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface AIConfig {
  provider: AIProvider;
  model: string;
  apiKey: string;
}
