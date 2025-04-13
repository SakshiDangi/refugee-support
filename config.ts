export const APP_CONFIG = {
    ai: {
      chat: {
        model: 'gpt-4o',
        maxTokens: 4096,
        temperature: 0.7,
        systemPrompt: `You are a professional assistant specialized in refugee support. 
          Provide accurate, up-to-date information about:
          - Legal procedures
          - Healthcare access
          - Education opportunities
          - Cultural integration
          Respond in the user's preferred language.`
      },
      translation: {
        model: 'gemini-1.5-flash',
        maxInputLength: 5000
      }
    },
    jobs: {
      defaultPageSize: 10,
      cacheTTL: 3600 // 1 hour
    }
  } as const;
  