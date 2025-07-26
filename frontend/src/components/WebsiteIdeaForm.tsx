'use client';

import { useState, useEffect } from 'react';

interface WebsiteIdeaFormProps {
  onSubmit: (idea: string) => Promise<void>;
  isLoading: boolean;
}

export function WebsiteIdeaForm({ onSubmit, isLoading }: WebsiteIdeaFormProps) {
  const [idea, setIdea] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [exampleIdeas, setExampleIdeas] = useState<string[]>([]);
  const [loadingExamples, setLoadingExamples] = useState(true);

  // Fallback examples in case API fails
  const fallbackExamples = [
    "Landing page for a bakery",
    "Portfolio website for a photographer",
    "E-commerce store for handmade jewelry",
    "Blog about sustainable living",
    "Business website for a consulting agency"
  ];

  useEffect(() => {
    fetchExampleIdeas();
  }, []);

  const fetchExampleIdeas = async () => {
    try {
      setLoadingExamples(true);
      const response = await fetch('http://localhost:3001/api/website-ideas/examples?limit=6');
      
      if (response.ok) {
        const examples = await response.json();
        setExampleIdeas(examples);
      } else {
        console.warn('Failed to fetch examples from API, using fallback');
        setExampleIdeas(fallbackExamples);
      }
    } catch (error) {
      console.error('Error fetching example ideas:', error);
      setExampleIdeas(fallbackExamples);
    } finally {
      setLoadingExamples(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    
    if (!idea.trim()) {
      newErrors.push('Please enter a website idea');
    } else if (idea.trim().length < 3) {
      newErrors.push('Website idea must be at least 3 characters long');
    } else if (idea.trim().length > 200) {
      newErrors.push('Website idea must be less than 200 characters');
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await onSubmit(idea.trim());
    setIdea(''); // Clear form after successful submission
    setErrors([]);
    
    // Refresh examples after successful submission to include the new idea
    setTimeout(() => {
      fetchExampleIdeas();
    }, 1000);
  };

  const handleExampleClick = (exampleIdea: string) => {
    setIdea(exampleIdea);
    setErrors([]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          What&apos;s your website idea?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Describe your website concept and we&apos;ll generate relevant sections for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="website-idea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Website Idea
          </label>
          <textarea
            id="website-idea"
            value={idea}
            onChange={(e) => {
              setIdea(e.target.value);
              if (errors.length > 0) {
                setErrors([]);
              }
            }}
            placeholder="e.g., Landing page for a bakery specializing in organic pastries..."
            rows={4}
            disabled={isLoading}
            className={`w-full px-4 py-3 border-2 rounded-xl resize-none transition-all duration-200 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${
              errors.length > 0
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200 dark:focus:border-blue-400'
            } focus:outline-none focus:ring-2`}
          />
          {errors.length > 0 && (
            <div className="mt-2 space-y-1">
              {errors.map((error, index) => (
                <p key={index} className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !idea.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 dark:disabled:from-gray-600 dark:disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
              </svg>
              <span>Generating sections...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Generate Website Sections</span>
            </>
          )}
        </button>
      </form>

      {/* Example Ideas */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {loadingExamples ? 'Loading examples...' : 'Try these examples from our community:'}
          </h3>
          {!loadingExamples && (
            <button
              onClick={fetchExampleIdeas}
              disabled={isLoading}
              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors disabled:opacity-50"
            >
              Refresh
            </button>
          )}
        </div>
        
        {loadingExamples ? (
          <div className="flex flex-wrap gap-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse h-8"
                style={{ width: `${Math.random() * 100 + 100}px` }}
              ></div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {exampleIdeas.map((exampleIdea, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(exampleIdea)}
                disabled={isLoading}
                className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
              >
                {exampleIdea}
              </button>
            ))}
          </div>
        )}
        
        {!loadingExamples && exampleIdeas.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            No examples available. Be the first to create a website idea!
          </p>
        )}
      </div>
    </div>
  );
} 