import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
import { ValidationPipe } from '../pipe/validation.pipe';
import { AuthGuard } from 'src/guard/auth.guard';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('/article')
  @UseGuards(AuthGuard)
  async index(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get('/article/:issueNumber')
  getDetail(@Param('issueNumber', ValidationPipe) issueNumber: number): Promise<Blog> {
    return this.blogService.findOne(issueNumber);
  }

  @Post('/article')
  async new(@Body() dto: CreateBlogDto): Promise<Blog> {
    return this.blogService.createArticle(dto)
  }

  @Put('/article/:issueNumber')
  putArticle(@Param('issueNumber') issueNumber: number, @Body() updateBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.updateArticle(issueNumber, updateBlogDto);
  }

  @Delete('/article/:issueNumber')
  deleteArticle(@Param('issueNumber') issueNumber: number) {
    return this.blogService.deleteArticle(issueNumber);
  }
}
