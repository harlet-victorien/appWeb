import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorModel } from './author.model';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.listAuthors();
  }

  public async getAuthorById(id: string): Promise<AuthorModel | undefined> {
    return this.authorRepository.getAuthorById(id);
  }

  public async createAuthor(input: AuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }

  public async updateAuthor(id: string, input: Partial<AuthorModel>): Promise<void> {
    return this.authorRepository.updateAuthor(id, input);
  }

  public async deleteAuthor(id: string): Promise<void> {
    return this.authorRepository.deleteAuthor(id);
  }
}