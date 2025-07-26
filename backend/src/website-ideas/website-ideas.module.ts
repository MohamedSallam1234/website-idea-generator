import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteIdeasService } from './website-ideas.service';
import { WebsiteIdeasController } from './website-ideas.controller';
import { WebsiteIdea, WebsiteIdeaSchema } from './website-ideas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WebsiteIdea.name, schema: WebsiteIdeaSchema },
    ]),
  ],
  controllers: [WebsiteIdeasController],
  providers: [WebsiteIdeasService],
})
export class WebsiteIdeasModule {}
