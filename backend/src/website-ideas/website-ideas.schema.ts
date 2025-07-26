import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebsiteIdeaDocument = WebsiteIdea & Document;

@Schema()
export class Section {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  contentSuggestions: string[];

  @Prop({ required: true })
  priority: number;

  @Prop({ required: true })
  category: string;
}

@Schema({
  collection: 'website_ideas',
  timestamps: true,
})
export class WebsiteIdea {
  @Prop({ required: true })
  idea: string;

  @Prop({ type: [Section], required: true })
  sections: Section[];

  @Prop({ required: true })
  industry: string;

  @Prop({ required: true })
  websiteType: string;

  @Prop({ type: [String], required: true })
  tags: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const WebsiteIdeaSchema = SchemaFactory.createForClass(WebsiteIdea);
