export interface Section {
  name: string;
  description: string;
  contentSuggestions: string[];
  priority: number;
  category: string;
}

export interface WebsiteIdea {
  _id: string;
  idea: string;
  sections: Section[];
  industry: string;
  websiteType: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
} 