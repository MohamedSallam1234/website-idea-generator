import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  WebsiteIdea,
  WebsiteIdeaDocument,
  Section,
} from './website-ideas.schema';
import { CreateWebsiteIdeaDto } from './dto/create-website-idea.dto';

interface SectionTemplate {
  name: string;
  description: string;
  contentSuggestions: string[];
  priority: number;
  category: string;
}

@Injectable()
export class WebsiteIdeasService {
  constructor(
    @InjectModel(WebsiteIdea.name)
    private websiteIdeaModel: Model<WebsiteIdeaDocument>,
  ) {}

  async create(
    createWebsiteIdeaDto: CreateWebsiteIdeaDto,
  ): Promise<WebsiteIdea> {
    const { idea } = createWebsiteIdeaDto;
    // Detect industry and website type
    const industry = this.detectIndustry(idea);
    const websiteType = this.detectWebsiteType(idea);
    const tags = this.generateTags(idea, industry, websiteType);
    // Generate advanced sections
    const sections = this.generateAdvancedSections(idea, industry, websiteType);
    const createdWebsiteIdea = new this.websiteIdeaModel({
      idea,
      sections,
      industry,
      websiteType,
      tags,
    });

    return createdWebsiteIdea.save();
  }

  async findAll(): Promise<WebsiteIdea[]> {
    return this.websiteIdeaModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<WebsiteIdea | null> {
    return this.websiteIdeaModel.findById(id).exec();
  }

  async getExampleIdeas(limit: number): Promise<string[]> {
    const examples = await this.websiteIdeaModel
      .find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
    return examples.map((idea) => idea.idea);
  }

  private detectIndustry(idea: string): string {
    const lowerIdea = idea.toLowerCase();

    if (
      lowerIdea.includes('restaurant') ||
      lowerIdea.includes('bakery') ||
      lowerIdea.includes('food') ||
      lowerIdea.includes('cafe') ||
      lowerIdea.includes('catering')
    ) {
      return 'Food & Beverage';
    } else if (
      lowerIdea.includes('tech') ||
      lowerIdea.includes('software') ||
      lowerIdea.includes('app') ||
      lowerIdea.includes('saas')
    ) {
      return 'Technology';
    } else if (
      lowerIdea.includes('health') ||
      lowerIdea.includes('medical') ||
      lowerIdea.includes('doctor') ||
      lowerIdea.includes('clinic')
    ) {
      return 'Healthcare';
    } else if (
      lowerIdea.includes('fashion') ||
      lowerIdea.includes('clothing') ||
      lowerIdea.includes('jewelry') ||
      lowerIdea.includes('beauty')
    ) {
      return 'Fashion & Beauty';
    } else if (
      lowerIdea.includes('education') ||
      lowerIdea.includes('course') ||
      lowerIdea.includes('school') ||
      lowerIdea.includes('training')
    ) {
      return 'Education';
    } else if (
      lowerIdea.includes('finance') ||
      lowerIdea.includes('bank') ||
      lowerIdea.includes('investment') ||
      lowerIdea.includes('insurance')
    ) {
      return 'Finance';
    } else if (
      lowerIdea.includes('travel') ||
      lowerIdea.includes('hotel') ||
      lowerIdea.includes('tourism') ||
      lowerIdea.includes('vacation')
    ) {
      return 'Travel & Tourism';
    } else if (
      lowerIdea.includes('real estate') ||
      lowerIdea.includes('property') ||
      lowerIdea.includes('home') ||
      lowerIdea.includes('rent')
    ) {
      return 'Real Estate';
    }

    return 'General Business';
  }

  private detectWebsiteType(idea: string): string {
    const lowerIdea = idea.toLowerCase();

    if (lowerIdea.includes('portfolio') || lowerIdea.includes('personal')) {
      return 'Portfolio';
    } else if (
      lowerIdea.includes('ecommerce') ||
      lowerIdea.includes('shop') ||
      lowerIdea.includes('store') ||
      lowerIdea.includes('buy') ||
      lowerIdea.includes('sell')
    ) {
      return 'E-commerce';
    } else if (
      lowerIdea.includes('blog') ||
      lowerIdea.includes('news') ||
      lowerIdea.includes('article')
    ) {
      return 'Blog/News';
    } else if (
      lowerIdea.includes('landing') ||
      lowerIdea.includes('product launch') ||
      lowerIdea.includes('campaign')
    ) {
      return 'Landing Page';
    } else if (
      lowerIdea.includes('corporate') ||
      lowerIdea.includes('company') ||
      lowerIdea.includes('business') ||
      lowerIdea.includes('agency')
    ) {
      return 'Corporate';
    } else if (
      lowerIdea.includes('nonprofit') ||
      lowerIdea.includes('charity') ||
      lowerIdea.includes('foundation')
    ) {
      return 'Non-profit';
    }

    return 'Business Website';
  }

  private generateTags(
    idea: string,
    industry: string,
    websiteType: string,
  ): string[] {
    const tags = [industry.toLowerCase(), websiteType.toLowerCase()];
    const lowerIdea = idea.toLowerCase();

    // Add specific feature tags
    if (lowerIdea.includes('mobile') || lowerIdea.includes('app'))
      tags.push('mobile-friendly');
    if (lowerIdea.includes('online') || lowerIdea.includes('digital'))
      tags.push('digital');
    if (lowerIdea.includes('local') || lowerIdea.includes('neighborhood'))
      tags.push('local-business');
    if (
      lowerIdea.includes('premium') ||
      lowerIdea.includes('luxury') ||
      lowerIdea.includes('high-end')
    )
      tags.push('premium');
    if (lowerIdea.includes('startup') || lowerIdea.includes('new'))
      tags.push('startup');

    return [...new Set(tags)]; // Remove duplicates
  }

  private generateAdvancedSections(
    idea: string,
    industry: string,
    websiteType: string,
  ): Section[] {
    const sectionTemplates = this.getSectionTemplates(industry, websiteType);
    const contextualSections = this.getContextualSections(idea);

    // Combine and prioritize sections
    const allSections = [...sectionTemplates, ...contextualSections];
    const uniqueSections = this.removeDuplicateSections(allSections);

    // Sort by priority and return top 5
    return uniqueSections.sort((a, b) => a.priority - b.priority).slice(0, 5);
  }

  private getSectionTemplates(
    industry: string,
    websiteType: string,
  ): SectionTemplate[] {
    const templates: SectionTemplate[] = [];

    // Core sections for all websites
    templates.push({
      name: 'Hero Section',
      description:
        'Compelling headline and value proposition to grab visitor attention',
      contentSuggestions: [
        'Eye-catching headline that clearly states your value proposition',
        'Subheading that explains what you do in 1-2 sentences',
        'Call-to-action button (e.g., "Get Started", "Learn More")',
        'Hero image or video that represents your brand',
      ],
      priority: 1,
      category: 'Essential',
    });

    // Industry-specific sections
    if (industry === 'Food & Beverage') {
      templates.push(
        {
          name: 'Menu/Products',
          description: 'Showcase your food items, prices, and specialties',
          contentSuggestions: [
            'High-quality food photography',
            'Clear pricing and descriptions',
            'Dietary information (vegan, gluten-free, etc.)',
            'Daily specials or seasonal items',
          ],
          priority: 2,
          category: 'Core',
        },
        {
          name: 'Location & Hours',
          description: "Help customers find you and know when you're open",
          contentSuggestions: [
            'Interactive map with your location',
            'Full address and contact information',
            'Operating hours for each day',
            'Parking information and directions',
          ],
          priority: 3,
          category: 'Core',
        },
      );
    }

    if (websiteType === 'E-commerce') {
      templates.push(
        {
          name: 'Featured Products',
          description: 'Highlight your best-selling or newest products',
          contentSuggestions: [
            'Product images with zoom functionality',
            'Clear pricing and availability',
            'Customer ratings and reviews',
            'Quick add-to-cart buttons',
          ],
          priority: 2,
          category: 'Core',
        },
        {
          name: 'Shopping Cart & Checkout',
          description: 'Streamlined purchasing process for customers',
          contentSuggestions: [
            'Clear cart summary with item details',
            'Multiple payment options (credit card, PayPal, etc.)',
            'Shipping options and calculations',
            'Guest checkout option',
          ],
          priority: 4,
          category: 'Essential',
        },
      );
    }

    if (websiteType === 'Portfolio') {
      templates.push(
        {
          name: 'Portfolio Gallery',
          description: 'Showcase your best work and projects',
          contentSuggestions: [
            'High-resolution project images',
            'Project descriptions and technologies used',
            'Links to live projects or case studies',
            'Filterable categories (web, mobile, design, etc.)',
          ],
          priority: 2,
          category: 'Core',
        },
        {
          name: 'Skills & Expertise',
          description: 'Highlight your technical skills and capabilities',
          contentSuggestions: [
            'Technical skills with proficiency levels',
            'Certifications and achievements',
            'Tools and technologies you use',
            'Years of experience in each area',
          ],
          priority: 3,
          category: 'Core',
        },
      );
    }

    // Common sections
    templates.push(
      {
        name: 'About Us',
        description: 'Tell your story and build trust with visitors',
        contentSuggestions: [
          'Your mission and values',
          'Company history and founding story',
          'Team photos and bios',
          'What makes you unique',
        ],
        priority: 5,
        category: 'Core',
      },
      {
        name: 'Contact Information',
        description: 'Make it easy for customers to reach you',
        contentSuggestions: [
          'Contact form with relevant fields',
          'Phone number and email address',
          'Social media links',
          'Response time expectations',
        ],
        priority: 6,
        category: 'Essential',
      },
      {
        name: 'Testimonials',
        description: 'Build credibility with customer reviews and feedback',
        contentSuggestions: [
          'Customer photos and names',
          'Specific benefits they received',
          'Star ratings or scores',
          'Before/after results if applicable',
        ],
        priority: 7,
        category: 'Trust',
      },
    );

    return templates;
  }

  private getContextualSections(idea: string): SectionTemplate[] {
    const lowerIdea = idea.toLowerCase();
    const contextualSections: SectionTemplate[] = [];

    if (
      lowerIdea.includes('booking') ||
      lowerIdea.includes('appointment') ||
      lowerIdea.includes('reservation')
    ) {
      contextualSections.push({
        name: 'Online Booking',
        description:
          'Allow customers to book appointments or make reservations',
        contentSuggestions: [
          'Calendar with available time slots',
          'Service/table selection options',
          'Customer information form',
          'Confirmation and reminder system',
        ],
        priority: 3,
        category: 'Functionality',
      });
    }

    if (
      lowerIdea.includes('pricing') ||
      lowerIdea.includes('cost') ||
      lowerIdea.includes('plans')
    ) {
      contextualSections.push({
        name: 'Pricing Plans',
        description: 'Clear pricing structure for your services or products',
        contentSuggestions: [
          'Tiered pricing options (Basic, Premium, Enterprise)',
          'Feature comparison table',
          'Special offers or discounts',
          'Money-back guarantee or trial period',
        ],
        priority: 4,
        category: 'Commercial',
      });
    }

    if (
      lowerIdea.includes('team') ||
      lowerIdea.includes('staff') ||
      lowerIdea.includes('employees')
    ) {
      contextualSections.push({
        name: 'Our Team',
        description: 'Introduce your team members and their expertise',
        contentSuggestions: [
          'Professional headshots',
          'Role titles and responsibilities',
          'Brief bios and backgrounds',
          'Contact information for key personnel',
        ],
        priority: 6,
        category: 'About',
      });
    }

    if (
      lowerIdea.includes('faq') ||
      lowerIdea.includes('questions') ||
      lowerIdea.includes('help')
    ) {
      contextualSections.push({
        name: 'FAQ',
        description: 'Answer common questions to reduce support inquiries',
        contentSuggestions: [
          'Most frequently asked questions',
          'Clear, concise answers',
          'Search functionality',
          'Contact option for additional questions',
        ],
        priority: 8,
        category: 'Support',
      });
    }

    return contextualSections;
  }

  private removeDuplicateSections(
    sections: SectionTemplate[],
  ): SectionTemplate[] {
    const seen = new Set<string>();
    return sections.filter((section) => {
      const key = section.name.toLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }
}
