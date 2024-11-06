import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { BookEntity, BookId } from '../database/entities/book.entity';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';

@Injectable()
export class BookRepository {
  private readonly authorRepository =
    this.dataSource.getRepository(AuthorEntity);
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async listBooks(): Promise<BookModel[]> {
    const books = await this.bookRepository.find({
      relations: { author: true },
    });

    return books;
  }

  public async getBookById(id: BookId): Promise<BookModel | undefined> {
    const book = await this.bookRepository.findOneOrFail({
      where: { id },
      relations: { author: true },
    });

    return book;
  }

  public async updateBook(id: BookId, input: UpdateBookModel) {
    await this.bookRepository.update(id, input);
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    const author = await this.authorRepository.findOneOrFail({
      where: { id: input.authorId },
    });

    const book = this.bookRepository.create({
      ...input,
      author,
    });

    const savedBook = await this.bookRepository.save(book);

    return savedBook;
  }

  public async deleteBook(id: BookId) {
    await this.bookRepository.delete(id);
  }
}
