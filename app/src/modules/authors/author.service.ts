import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { CreateAuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<AuthorEntity> {
    const author = this.authorRepository.create(createAuthorDto);
    return this.authorRepository.save(author);
  }
}
