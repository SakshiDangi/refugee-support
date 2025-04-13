export type ApiResponse<T> = 
  | { data: T; error?: never }
  | { data?: never; error: string };

// Domain Models
export type Job = {
  salaryRange: any;
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
  description: string;
  requirements: string[];
  salary: [number, number];
  postedDate: string;
};


export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

export type TranslationRequest = {
  text: string;
  sourceLang: LanguageCode;
  targetLang: LanguageCode;
};

export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'ar' | 'tr' | 'ku';
