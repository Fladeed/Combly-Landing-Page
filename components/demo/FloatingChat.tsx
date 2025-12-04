"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChatService } from '@/lib/ai/chat-service';
import { ChatMessage, AIProvider } from '@/lib/ai/types';
import { FiSettings, FiTrash2, FiSend, FiMessageCircle, FiUser, FiX } from 'react-icons/fi';
import './FloatingChat.css';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState<AIProvider>('openai');
  const [model, setModel] = useState('gpt-4o-mini');
  const [availableModels, setAvailableModels] = useState<{ value: string; label: string }[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    loadAvailableModels();
  }, [provider]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadAvailableModels = async () => {
    const models = await ChatService.getAvailableModels(provider);
    setAvailableModels(models);
    if (models.length > 0) {
      setModel(models[0].value);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await ChatService.sendMessage(
        inputValue.trim(),
        provider,
        model
      );

      if (response.success && response.message) {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response.message,
          timestamp: new Date().toISOString(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Error: ${response.error || 'Failed to get response'}`,
          timestamp: new Date().toISOString(),
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Error: ${error instanceof Error ? error.message : 'Failed to get response'}`,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    ChatService.clearSession();
  };

  const toggleChat = () => {
    console.log('Toggle chat clicked! Current isOpen:', isOpen);
    setIsOpen(prev => {
      console.log('Setting isOpen to:', !prev);
      return !prev;
    });
    if (!isOpen) {
      setShowSettings(false);
    }
  };

  console.log('FloatingChat render - isOpen:', isOpen);

  return (
    <>
      {/* Floating Icon Button */}
      {!isOpen && (
        <button
          className="floating-chat-icon"
          onClick={toggleChat}
          aria-label="Open chat"
          style={{ 
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999
          }}
        >
          <Image src="/images/comby-avatar.png" alt="Comby" width={48} height={48} />
        </button>
      )}

      {/* Chat Container */}
      {isOpen && (
        <div className="floating-chat-container" style={{ position: "fixed", bottom: "90px", right: "24px", zIndex: 9999 }}>
          {/* Header */}
          <div className="floating-chat-header">
            <div className="floating-chat-header-left">
              <div className="floating-chat-logo">
                <Image src="/images/comby-avatar.png" alt="Comby" width={32} height={32} />
              </div>
              <div className="floating-chat-title">
                <h3>Comby</h3>
                <span className="floating-chat-subtitle">AI Assistant</span>
              </div>
            </div>
            <div className="floating-chat-header-right">
              <button
                className="floating-chat-header-btn"
                onClick={() => setShowSettings(!showSettings)}
                title="Settings"
              >
                <FiSettings size={18} />
              </button>
              <button
                className="floating-chat-header-btn"
                onClick={handleClearChat}
                title="Clear chat"
              >
                <FiTrash2 size={18} />
              </button>
              <button
                className="floating-chat-header-btn"
                onClick={toggleChat}
                title="Close"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="floating-chat-settings">
              <div className="floating-chat-setting">
                <label>AI Provider</label>
                <select value={provider} onChange={(e) => setProvider(e.target.value as AIProvider)}>
                  <option value="openai">OpenAI</option>
                  <option value="anthropic">Anthropic Claude</option>
                  <option value="groq">Groq</option>
                </select>
              </div>
              <div className="floating-chat-setting">
                <label>Model</label>
                <select value={model} onChange={(e) => setModel(e.target.value)}>
                  {availableModels.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>
              <p className="floating-chat-settings-note">
                Changes will apply to new messages
              </p>
            </div>
          )}

          {/* Messages */}
          <div className="floating-chat-messages">
            {messages.length === 0 ? (
              <div className="floating-chat-empty">
                <FiMessageCircle size={48} strokeWidth={1.5} />
                <p>Start a conversation with Comby</p>
                <span>Ask me anything!</span>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`floating-chat-message floating-chat-message-${message.role}`}
                >
                  <div className="floating-chat-message-avatar">
                    {message.role === 'user' ? (
                      <FiUser size={20} />
                    ) : (
                      <Image src="/images/comby-avatar.png" alt="Comby" width={20} height={20} />
                    )}
                  </div>
                  <div className="floating-chat-message-content">
                    <div className="floating-chat-message-text">{message.content}</div>
                    <div className="floating-chat-message-time">
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="floating-chat-message floating-chat-message-assistant">
                <div className="floating-chat-message-avatar">
                  <Image src="/images/comby-avatar.png" alt="Comby" width={20} height={20} />
                </div>
                <div className="floating-chat-message-content">
                  <div className="floating-chat-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="floating-chat-input-container">
            <textarea
              ref={inputRef}
              className="floating-chat-input"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
              disabled={isLoading}
            />
            <button
              className="floating-chat-send-btn"
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
