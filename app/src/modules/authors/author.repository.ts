import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Author } from '../database/entities/author.entity';
import { AuthorModel, CreateAuthorModel } from './author.model';

@Injectable()
export class AuthorRepository {
  private readonly authorRepository = this.dataSource.getRepository(Author);

  constructor(private readonly dataSource: DataSource) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    const authors = await this.authorRepository.find({
      relations: ['books'],
    });

    return authors.map((author) => ({
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      photo: author.photo,
      biography: author.biography,
      bookCount: author.books.length,
      averageRating: author.books.length
        ? author.books.reduce((acc, book) => {
            const bookRating = book.reviews.length
              ? book.reviews.reduce((sum, rev) => sum + rev.rating, 0) / book.reviews.length
              : 0;
            return acc + bookRating;
          }, 0) / author.books.length
        : null,
    }));
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    const author = this.authorRepository.create(input);
    const savedAuthor = await this.authorRepository.save(author);
    return {
      id: savedAuthor.id,
      firstName: savedAuthor.firstName,
      lastName: savedAuthor.lastName,
      photo: savedAuthor.photo,
      biography: savedAuthor.biography,
      bookCount: 0,
      averageRating: null,
    };
  }

  public async findAuthorById(id: string): Promise<AuthorModel> {
    const author = await this.authorRepository.findOne({
      where: { id },
      relations: ['books', 'books.reviews'],
    });

    if (!author) {
      throw new Error('Author not found');
    }

    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      photo: author.photo,
      biography: author.biography,
      bookCount: author.books.length,
      averageRating: author.books.length
        ? author.books.reduce((acc, book) => {
            const bookRating = book.reviews.length
              ? book.reviews.reduce((sum, rev) => sum + rev.rating, 0) / book.reviews.length
              : 0;
            return acc + bookRating;
          }, 0) / author.books.length
        : null,
    };
  }

  public async updateAuthor(id: string, updateData: Partial<CreateAuthorModel>): Promise<AuthorModel> {
    await this.authorRepository.update(id, updateData);
    return this.findAuthorById(id);
  }

  public async deleteAuthor(id: string): Promise<void> {
    await this.authorRepository.delete(id);
  }
}