import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async getAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.listAuthors();
  }

  public async getAuthorById(id: string): Promise<AuthorModel> {
    try {
      return this.authorRepository.findAuthorById(id);
    } catch {
      throw new NotFoundException('Author not found');
    }
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }

  public async updateAuthor(id: string, updateAuthorDto: UpdateAuthorDto): Promise<AuthorModel> {
    try {
      return this.authorRepository.updateAuthor(id, updateAuthorDto);
    } catch {
      throw new NotFoundException('Author not found');
    }
  }

  public async deleteAuthor(id: string): Promise<void> {
    try {
      await this.authorRepository.deleteAuthor(id);
    } catch {
      throw new NotFoundException('Author not found');
    }
  }
}