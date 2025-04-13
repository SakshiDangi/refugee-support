'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div Name="max-w-4xl mx-auto">
      <div Name="mb-8">
        <h1 Name="text-3xl font-bold mb-4">AI Chatbot Assistant</h1>
        <p Name="text-gray-600">
          Chat with our AI assistant to get instant answers to your questions.
        </p>
      </div>

      <div Name="bg-white rounded-xl shadow-md p-4 mb-4 h-[500px] overflow-y-auto">
        <div Name="space-y-4">
          {messages.length === 0 ? (
            <div Name="text-center py-10 text-gray-500">
              <p>Start a conversation with the AI assistant</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                Name={`p-4 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-blue-100 ml-auto'
                    : 'bg-gray-100'
                }`}
              >
                <p Name="text-sm font-semibold mb-1">
                  {message.role === 'user' ? 'You' : 'AI Assistant'}
                </p>
                <div Name="prose">
                  {message.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div Name="p-4 rounded-lg bg-gray-100 max-w-[80%]">
              <p Name="text-sm font-semibold mb-1">AI Assistant</p>
              <div Name="animate-pulse">Thinking...</div>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} Name="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
          Name="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          Name="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
