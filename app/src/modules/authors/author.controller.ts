import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorModel, CreateAuthorModel } from './author.model';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getAuthors(): Promise<AuthorModel[]> {
    return this.authorService.getAuthors();
  }

  @Get(':id')
  getAuthorById(@Param('id') id: string): Promise<AuthorModel> {
    return this.authorService.getAuthorById(id);
  }

  @Post()
  createAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<AuthorModel> {
    const createAuthorModel: CreateAuthorModel = {
      firstName: createAuthorDto.firstName,
      lastName: createAuthorDto.lastName,
      photo: createAuthorDto.photo,
      biography: createAuthorDto.biography,
    };
    return this.authorService.createAuthor(createAuthorModel);
  }

  @Patch(':id')
  updateAuthor(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ): Promise<AuthorModel> {
    return this.authorService.updateAuthor(id, updateAuthorDto);
  }

  @Delete(':id')
  deleteAuthor(@Param('id') id: string): Promise<void> {
    return this.authorService.deleteAuthor(id);
  }
}