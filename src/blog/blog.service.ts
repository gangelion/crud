import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @Inject('BLOG_REPOSITORY')
    private blogRepository: Repository<Blog>
  ) {}

  async createArticle(data: CreateBlogDto): Promise<Blog> {
    return await this.blogRepository.save(data)
  }

  async updateArticle(issueNumber: number, updateBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = await this.blogRepository.findOne(issueNumber)
    blog.issueNumber = issueNumber
    blog.author = updateBlogDto.author
    blog.title = updateBlogDto.title
    await this.blogRepository.update(updateBlogDto, blog)
    return this.blogRepository.findOne(blog.issueNumber)
  }

  deleteArticle(issueNumber: number) {
    return this.blogRepository.delete(issueNumber)
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }

  async findOne(issueNumber: number): Promise<Blog> {
    return await this.blogRepository.findOne({issueNumber});
  }
}
