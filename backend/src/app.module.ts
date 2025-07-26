import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsiteIdeasModule } from './website-ideas/website-ideas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        'mongodb+srv://mohamed:mohamed@cluster0.7jkva8p.mongodb.net/website-idea-generator?retryWrites=true&w=majority',
    ),
    WebsiteIdeasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
