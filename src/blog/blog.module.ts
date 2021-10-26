import { Module } from '@nestjs/common';
import { blogProviders } from './blog.provider';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogController],
  providers: [...blogProviders, BlogService],
})
export class BlogModule {}
