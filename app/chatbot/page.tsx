'use client';

import { useChat } from '@ai-sdk/react';

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">AI Chatbot Assistant</h1>
        <p className="text-gray-600">
          Chat with our AI assistant to get instant answers to your questions.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 mb-4 h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p>Start a conversation with the AI assistant</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-blue-100 ml-auto'
                    : 'bg-gray-100'
                }`}
              >
                <p className="text-sm font-semibold mb-1">
                  {message.role === 'user' ? 'You' : 'AI Assistant'}
                </p>
                <div className="prose">
                  {message.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="p-4 rounded-lg bg-gray-100 max-w-[80%]">
              <p className="text-sm font-semibold mb-1">AI Assistant</p>
              <div className="animate-pulse">Thinking...</div>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
