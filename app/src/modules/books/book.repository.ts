import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Author} from '../database/entities/author.entity';
import { Book } from '../database/entities/book.entity';
import { CreateBookDto, UpdateBookDto } from './book.dto';

@Injectable()
export class BookRepository {
  constructor(private readonly dataSource: DataSource) {}

  private readonly bookRepository = this.dataSource.getRepository(Book);
  private readonly authorRepository = this.dataSource.getRepository(Author);

  async findAll(query: { search?: string; sortBy?: string }): Promise<Book[]> {
    const queryBuilder = this.bookRepository.createQueryBuilder('book')
      .leftJoinAndSelect('book.author', 'author')
      .leftJoinAndSelect('book.reviews', 'reviews');

    if (query.search) {
      queryBuilder.where('book.title ILIKE :search', { search: `%${query.search}%` });
    }

    if (query.sortBy) {
      queryBuilder.orderBy(`book.${query.sortBy}`);
    }

    return queryBuilder.getMany();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookRepository.findOneOrFail({
      where: { id },
      relations: ['author', 'reviews']
    });
  }

  async create(data: CreateBookDto): Promise<Book> {
    const author = await this.authorRepository.findOneByOrFail({ id: data.authorId });
    const book = this.bookRepository.create({
      ...data,
      author
    });
    return this.bookRepository.save(book);
  }

  async update(id: string, data: UpdateBookDto): Promise<Book> {
    await this.bookRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}