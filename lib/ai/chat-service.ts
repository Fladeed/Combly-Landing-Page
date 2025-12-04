import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
import Groq from 'groq-sdk';
import { AIProvider, ChatMessage, ChatResponse } from './types';

export class ChatService {
  private static sessionMessages: ChatMessage[] = [];

  static async sendMessage(
    userMessage: string,
    provider: AIProvider,
    model: string
  ): Promise<ChatResponse> {
    try {
      // Add user message to session
      const userMsg: ChatMessage = {
        id: `user_${Date.now()}`,
        role: 'user',
        content: userMessage,
        timestamp: new Date().toISOString(),
      };
      this.sessionMessages.push(userMsg);

      // Get API key from environment
      const apiKey = this.getApiKey(provider);
      if (!apiKey) {
        return {
          success: false,
          error: `${provider} API key not configured. Please add it to your .env.local file.`,
        };
      }

      // Send to AI provider
      const responseMessage = await this.sendToProvider(
        this.sessionMessages,
        provider,
        model,
        apiKey
      );

      if (responseMessage.success && responseMessage.message) {
        // Add assistant response to session
        const assistantMsg: ChatMessage = {
          id: `assistant_${Date.now()}`,
          role: 'assistant',
          content: responseMessage.message,
          timestamp: new Date().toISOString(),
        };
        this.sessionMessages.push(assistantMsg);
      }

      return responseMessage;
    } catch (error) {
      console.error('[ChatService] Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  private static getApiKey(provider: AIProvider): string | undefined {
    switch (provider) {
      case 'openai':
        return process.env.NEXT_PUBLIC_OPENAI_API_KEY;
      case 'anthropic':
        return process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY;
      case 'groq':
        return process.env.NEXT_PUBLIC_GROQ_API_KEY;
    }
  }

  private static async sendToProvider(
    messages: ChatMessage[],
    provider: AIProvider,
    model: string,
    apiKey: string
  ): Promise<ChatResponse> {
    const conversationMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    try {
      switch (provider) {
        case 'openai':
          return await this.sendToOpenAI(conversationMessages, model, apiKey);
        case 'anthropic':
          return await this.sendToAnthropic(conversationMessages, model, apiKey);
        case 'groq':
          return await this.sendToGroq(conversationMessages, model, apiKey);
        default:
          return { success: false, error: 'Unsupported AI provider' };
      }
    } catch (error) {
      console.error(`[ChatService] ${provider} error:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get AI response',
      };
    }
  }

  private static async sendToOpenAI(
    messages: Array<{ role: string; content: string }>,
    model: string,
    apiKey: string
  ): Promise<ChatResponse> {
    const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
    
    const response = await client.chat.completions.create({
      model,
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 1000,
    });

    return {
      success: true,
      message: response.choices[0]?.message?.content || 'No response',
    };
  }

  private static async sendToAnthropic(
    messages: Array<{ role: string; content: string }>,
    model: string,
    apiKey: string
  ): Promise<ChatResponse> {
    const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

    // Anthropic requires first message to be user message
    const anthropicMessages = messages.filter(m => m.role !== 'system');
    
    const response = await client.messages.create({
      model,
      max_tokens: 1000,
      messages: anthropicMessages as any,
    });

    const content = response.content[0];
    return {
      success: true,
      message: content.type === 'text' ? content.text : 'No response',
    };
  }

  private static async sendToGroq(
    messages: Array<{ role: string; content: string }>,
    model: string,
    apiKey: string
  ): Promise<ChatResponse> {
    const client = new Groq({ apiKey, dangerouslyAllowBrowser: true });
    
    const response = await client.chat.completions.create({
      model,
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 1000,
    });

    return {
      success: true,
      message: response.choices[0]?.message?.content || 'No response',
    };
  }

  static getMessages(): ChatMessage[] {
    return [...this.sessionMessages];
  }

  static clearSession(): void {
    this.sessionMessages = [];
  }

  static async getAvailableModels(provider: AIProvider): Promise<{ value: string; label: string }[]> {
    switch (provider) {
      case 'openai':
        return [
          { value: 'gpt-4o', label: 'GPT-4o' },
          { value: 'gpt-4o-mini', label: 'GPT-4o Mini' },
          { value: 'gpt-4-turbo', label: 'GPT-4 Turbo' },
          { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
        ];
      case 'anthropic':
        return [
          { value: 'claude-3-5-sonnet-20241022', label: 'Claude 3.5 Sonnet' },
          { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus' },
          { value: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku' },
        ];
      case 'groq':
        return [
          { value: 'llama-3.3-70b-versatile', label: 'Llama 3.3 70B' },
          { value: 'llama-3.1-70b-versatile', label: 'Llama 3.1 70B' },
          { value: 'mixtral-8x7b-32768', label: 'Mixtral 8x7B' },
        ];
      default:
        return [];
    }
  }
}
