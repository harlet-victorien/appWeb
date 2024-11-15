import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { AuthorModel } from './author.model';

@Injectable()
export class AuthorRepository {
  private readonly authorRepository: Repository<AuthorEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.authorRepository = this.dataSource.getRepository(AuthorEntity);
  }

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  public async getAuthorById(id: string): Promise<AuthorModel | undefined> {
    return this.authorRepository.findOne({ where: { id } });
  }

  public async createAuthor(input: AuthorModel): Promise<AuthorModel> {
    const author = this.authorRepository.create(input);
    return this.authorRepository.save(author);
  }

  public async updateAuthor(id: string, input: Partial<AuthorModel>): Promise<void> {
    await this.authorRepository.update(id, input);
  }

  public async deleteAuthor(id: string): Promise<void> {
    await this.authorRepository.delete(id);
  }
}