import { Controller, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { AuthorEntity } from './entities/author.entity';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<AuthorEntity> {
    return this.authorService.create(createAuthorDto);
  }
}
