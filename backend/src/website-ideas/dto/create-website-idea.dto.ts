import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWebsiteIdeaDto {
  @IsNotEmpty()
  @IsString()
  idea!: string;
}
