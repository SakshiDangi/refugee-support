export const APP_CONFIG = {
    ai: {
      chat: {
        model: 'gpt-4o',
        maxTokens: 4096,
        systemPrompt: `You are a professional assistant providing accurate,
          verified information to displaced populations. Prioritize:
          1. Cultural sensitivity
          2. Legal accuracy
          3. Resource availability
          4. Language accessibility`
      },
      translation: {
        model: 'gemini-1.5-flash',
        maxInputLength: 5000
      }
    },
    jobs: {
      cacheTTL: 3600,
      defaultPageSize: 10
    },
    languages: [
      { code: 'en', name: 'English' },
      { code: 'ar', name: 'Arabic' },
      { code: 'tr', name: 'Turkish' },
      { code: 'ku', name: 'Kurdish' },
      { code: 'de', name: 'German' }
    ] as const
  } as const;
  