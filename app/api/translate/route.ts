import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function POST(req: Request) {
  try {
    const { text, sourceLanguage, targetLanguage } = await req.json();

    if (!text || !sourceLanguage || !targetLanguage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const prompt = `Translate the following text from ${sourceLanguage} to ${targetLanguage}. 
    Keep the original meaning, tone, and formatting as much as possible.
    Text to translate: "${text}"`;

    const result = await model.generateContent(prompt);
    const translation = result.response.text();

    return NextResponse.json({ translation });
  } catch (error) {
    console.error('Error in translation API:', error);
    return NextResponse.json(
      { error: 'An error occurred during translation' },
      { status: 500 }
    );
  }
}
