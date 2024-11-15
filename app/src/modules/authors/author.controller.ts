import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorModel } from './author.model';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async listAuthors(): Promise<AuthorModel[]> {
    return this.authorService.listAuthors();
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: string): Promise<AuthorModel | undefined> {
    return this.authorService.getAuthorById(id);
  }

  @Post()
  async createAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<AuthorModel> {
    return this.authorService.createAuthor(createAuthorDto);
  }

  @Patch(':id')
  async updateAuthor(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto): Promise<void> {
    return this.authorService.updateAuthor(id, updateAuthorDto);
  }

  @Delete(':id')
  async deleteAuthor(@Param('id') id: string): Promise<void> {
    return this.authorService.deleteAuthor(id);
  }
}