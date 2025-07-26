'use client';

import { useState } from 'react';
import { WebsiteIdeaForm } from '@/components/WebsiteIdeaForm';
import { SectionPreview } from '@/components/SectionPreview';
import { WebsiteIdea } from '@/types/website-idea';

export default function Home() {
  const [websiteIdeas, setWebsiteIdeas] = useState<WebsiteIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleIdeaSubmit = async (idea: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/website-ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate website sections');
      }

      const newWebsiteIdea: WebsiteIdea = await response.json();
      setWebsiteIdeas(prev => [newWebsiteIdea, ...prev]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Website Idea Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your ideas into structured website sections. Enter your concept and watch it come to life.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <WebsiteIdeaForm 
              onSubmit={handleIdeaSubmit} 
              isLoading={isLoading}
            />
            
            {error && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 dark:text-red-300">{error}</p>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          {websiteIdeas.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Generated Website Sections
              </h2>
              {websiteIdeas.map((websiteIdea) => (
                <SectionPreview 
                  key={websiteIdea._id} 
                  websiteIdea={websiteIdea} 
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {websiteIdeas.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Ready to create something amazing?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your website idea above to get started with AI-generated sections.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
