'use client';

import { useState } from 'react';
import { WebsiteIdea, Section } from '@/types/website-idea';

interface SectionPreviewProps {
  websiteIdea: WebsiteIdea;
}

export function SectionPreview({ websiteIdea }: SectionPreviewProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'essential':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'core':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'functionality':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'commercial':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'trust':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'about':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'support':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const generateContextualContent = (sectionName: string, idea: string, industry: string) => {
    const businessName = extractBusinessName(idea);
    return {
      businessName,
      industry,
      idea
    };
  };

  const extractBusinessName = (idea: string) => {
    // Extract business type/name from the idea
    const words = idea.toLowerCase().split(' ');
    if (words.includes('bakery')) return 'Sweet Dreams Bakery';
    if (words.includes('restaurant')) return 'Gourmet Delights';
    if (words.includes('coffee') || words.includes('cafe')) return 'Bean & Brew Café';
    if (words.includes('photography')) return 'Capture Moments Studio';
    if (words.includes('jewelry')) return 'Elegant Gems';
    if (words.includes('consulting')) return 'Expert Solutions';
    if (words.includes('fitness') || words.includes('gym')) return 'FitLife Gym';
    if (words.includes('travel')) return 'Adventure Tours';
    if (words.includes('tech') || words.includes('software')) return 'TechForward Solutions';
    return 'Your Business';
  };

  const renderSectionPreview = (section: Section) => {
    const content = generateContextualContent(section.name, websiteIdea.idea, websiteIdea.industry);
    const sectionName = section.name.toLowerCase();

    if (sectionName.includes('hero')) {
      return (
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to {content.businessName}</h1>
            <p className="text-xl mb-6 opacity-90">
              {websiteIdea.industry === 'Food & Beverage' && 'Fresh, delicious, and made with love every day'}
              {websiteIdea.industry === 'Technology' && 'Innovative solutions for your business needs'}
              {websiteIdea.industry === 'Fashion & Beauty' && 'Discover your unique style with our curated collection'}
              {websiteIdea.industry === 'Healthcare' && 'Quality care you can trust, when you need it most'}
              {content.industry === 'General Business' && 'Excellence in service, trusted by customers worldwide'}
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>
      );
    }

    if (sectionName.includes('about')) {
      return (
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About {content.businessName}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {websiteIdea.industry === 'Food & Beverage' && 'Founded with a passion for creating exceptional culinary experiences, we have been serving our community with the finest ingredients and traditional recipes passed down through generations.'}
                {websiteIdea.industry === 'Technology' && 'We are a team of innovative developers and designers committed to creating cutting-edge solutions that transform businesses and improve lives through technology.'}
                {websiteIdea.industry === 'Fashion & Beauty' && 'Our journey began with a simple belief: everyone deserves to feel confident and beautiful. We curate the finest products and provide personalized service to help you express your unique style.'}
                {content.industry === 'General Business' && 'With years of experience and a commitment to excellence, we have built our reputation on quality service, innovative solutions, and genuine care for our clients.'}
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Company Photo</span>
            </div>
          </div>
        </div>
      );
    }

    if (sectionName.includes('contact')) {
      return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">hello@{content.businessName.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">123 Business St, City, State 12345</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }

    if (sectionName.includes('menu') || sectionName.includes('product')) {
      const products = [
        { name: 'Signature Item', price: '$12.99', description: 'Our most popular choice' },
        { name: 'Premium Option', price: '$18.99', description: 'Made with finest ingredients' },
        { name: 'Daily Special', price: '$9.99', description: 'Fresh and seasonal' }
      ];

      return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {websiteIdea.industry === 'Food & Beverage' ? 'Our Menu' : 'Featured Products'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Product Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                      {websiteIdea.industry === 'Food & Beverage' ? 'Order Now' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (sectionName.includes('testimonial')) {
      const testimonials = [
        { name: 'Sarah Johnson', text: 'Absolutely amazing service! Exceeded all my expectations.', rating: 5 },
        { name: 'Mike Chen', text: 'Professional, reliable, and outstanding quality.', rating: 5 },
        { name: 'Emma Davis', text: 'Best decision I made for my business this year!', rating: 5 }
      ];

      return (
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (sectionName.includes('pricing')) {
      const plans = [
        { name: 'Basic', price: '$29', features: ['Feature 1', 'Feature 2', 'Email Support'] },
        { name: 'Premium', price: '$59', features: ['Everything in Basic', 'Feature 3', 'Priority Support', 'Advanced Analytics'], popular: true },
        { name: 'Enterprise', price: '$99', features: ['Everything in Premium', 'Custom Integration', 'Dedicated Account Manager'] }
      ];

      return (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <div key={idx} className={`border-2 rounded-lg p-6 relative ${plan.popular ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (sectionName.includes('team')) {
      const team = [
        { name: 'Alex Smith', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years experience' },
        { name: 'Sarah Wilson', role: 'Head of Operations', bio: 'Operations expert ensuring smooth delivery' },
        { name: 'David Brown', role: 'Lead Developer', bio: 'Tech enthusiast building amazing solutions' }
      ];

      return (
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Default section preview
    return (
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description}</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Suggestions:</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {section.contentSuggestions.slice(0, 3).map((suggestion, idx) => (
                <li key={idx}>• {suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {websiteIdea.idea}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Generated on {formatDate(websiteIdea.createdAt)}
            </p>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
            {websiteIdea.industry}
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
            {websiteIdea.websiteType}
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full">
            {websiteIdea.sections.length} sections
          </span>
          {websiteIdea.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Section Previews */}
      <div className="p-6">
        <div className="space-y-8">
          {websiteIdea.sections.map((section: Section, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden">
              {/* Section Header */}
              <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(section.category)}`}>
                      {section.category}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {section.name}
                    </h4>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Priority {section.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{section.description}</p>
              </div>

              {/* Full Section Preview */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800">
                {renderSectionPreview(section)}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>ID: {websiteIdea._id.slice(-8)}</span>
            <span>🎨 Full section previews generated</span>
          </div>
        </div>
      </div>
    </div>
  );
} 