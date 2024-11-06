import { Injectable } from '@nestjs/common';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { BookRepository } from './book.repository';
import { BookId } from '../database/entities/book.entity';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async listBooks(): Promise<BookModel[]> {
    return this.bookRepository.listBooks();
  }

  public async getBookById(id: BookId): Promise<BookModel | undefined> {
    return this.bookRepository.getBookById(id);
  }

  public async updateBook(id: BookId, input: UpdateBookModel) {
    return this.bookRepository.updateBook(id, input);
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.createBook(input);
  }

  public async deleteBook(id: BookId) {
    return this.bookRepository.deleteBook(id);
  }
}
