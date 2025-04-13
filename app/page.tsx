"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Intelligent Web Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI with modern web technology to create seamless, intelligent user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/chatbot" className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Try AI Chat
            </Link>
            <Link href="/translator" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Explore Translator
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powered by AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Chatbot</h3>
              <p className="text-gray-600">
                Our AI-powered chatbot provides instant assistance and answers to your questions with human-like responses.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Translation</h3>
              <p className="text-gray-600">
                Break language barriers with our accurate and context-aware translation tool powered by advanced AI.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Matching</h3>
              <p className="text-gray-600">
                Find the perfect job with our AI-powered job board that matches your skills with relevant opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
