import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from '../database/entities/book.entity';
import { Author } from '../database/entities/author.entity';
import { CreateBookDto, GetBooksDto, UpdateBookDto } from './book.dto';

@Injectable()
export class BookService {
  constructor(
    private readonly bookRepository: Repository<Book>,
    private readonly authorRepository: Repository<Author>
  ) {}

  async findAll(query: GetBooksDto): Promise<Book[]> {
    const queryBuilder = this.bookRepository.createQueryBuilder('book');
    
    if (query.search) {
      queryBuilder.where('book.title LIKE :search', { search: `%${query.search}%` });
    }

    if (query.sortBy) {
      queryBuilder.orderBy(`book.${query.sortBy}`);
    }

    return queryBuilder.getMany();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['author', 'reviews']
    });
    if (!book) throw new NotFoundException();
    return book;
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const author = await this.authorRepository.findOneBy({ id: createBookDto.authorId });
    if (!author) throw new NotFoundException('Author not found');

    const book = this.bookRepository.create({
      ...createBookDto,
      author
    });

    return this.bookRepository.save(book);
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.findOne(id);
    Object.assign(book, updateBookDto);
    return this.bookRepository.save(book);
  }

  async remove(id: string): Promise<void> {
    const result = await this.bookRepository.delete(id);
    if (!result.affected) throw new NotFoundException();
  }
}