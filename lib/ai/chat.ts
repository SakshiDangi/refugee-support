// src/lib/ai/chat.ts
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { APP_CONFIG } from '@/config/constants';
import type { ChatMessage } from '@/types/job';

export class ChatService {
  private readonly client: ReturnType<typeof createOpenAI>;

  constructor() {
    this.client = createOpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
      organization: process.env.OPENAI_ORG_ID
    });
  }

  async createStream(messages: ChatMessage[]) {
    return streamText({
      model: this.client(APP_CONFIG.ai.chat.model),
      system: APP_CONFIG.ai.chat.systemPrompt,
      messages: this.normalizeMessages(messages),
      maxTokens: APP_CONFIG.ai.chat.maxTokens
    });
  }

  private normalizeMessages(messages: ChatMessage[]) {
    return messages.map(({ role, content }) => ({
      role,
      content: content.slice(0, APP_CONFIG.ai.translation.maxInputLength)
    }));
  }
}
