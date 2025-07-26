import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';
import { WebsiteIdeasService } from './website-ideas.service';
import { CreateWebsiteIdeaDto } from './dto/create-website-idea.dto';
import { WebsiteIdea } from './website-ideas.schema';

@Controller('api/website-ideas')
export class WebsiteIdeasController {
  constructor(private readonly websiteIdeasService: WebsiteIdeasService) {}

  @Post()
  async create(
    @Body() createWebsiteIdeaDto: CreateWebsiteIdeaDto,
  ): Promise<WebsiteIdea> {
    try {
      return await this.websiteIdeasService.create(createWebsiteIdeaDto);
    } catch (error: unknown) {
      console.error('Error creating website idea:', error);
      throw new HttpException(
        'Failed to create website idea',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll(): Promise<WebsiteIdea[]> {
    try {
      return await this.websiteIdeasService.findAll();
    } catch (error: unknown) {
      console.error('Error fetching website ideas:', error);
      throw new HttpException(
        'Failed to fetch website ideas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('examples')
  async getExamples(@Query('limit') limit?: string): Promise<string[]> {
    try {
      const limitNumber = limit ? Number(limit) || 5 : 5;
      return await this.websiteIdeasService.getExampleIdeas(limitNumber);
    } catch (error: unknown) {
      console.error('Error fetching example ideas:', error);
      throw new HttpException(
        'Failed to fetch example ideas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<WebsiteIdea> {
    try {
      const websiteIdea = await this.websiteIdeasService.findOne(id);
      if (!websiteIdea) {
        throw new HttpException('Website idea not found', HttpStatus.NOT_FOUND);
      }
      return websiteIdea;
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch website idea',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
