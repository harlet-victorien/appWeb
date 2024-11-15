import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateBooksDto, GetBooksDto, UpdateBookDto } from './book.dto';
import { BookService } from './book.service';
import { BookPresenter } from './book.presenter';
import { BookId } from '../database/entities/book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks(@Query() input: GetBooksDto) {
    return this.bookService.listBooks();
  }

  @Get(':id')
  public async getBookById(@Param('id') id: BookId) {
    const book = await this.bookService.getBookById(id);

    return BookPresenter.from(book);
  }

  @Post()
  public async createBook(@Body() input: CreateBooksDto) {
    console.log(input);
    if (input.books) {
      return Promise.all(
        input.books.map((book) => this.bookService.createBook(book)),
      );
    }

    if (input.book) {
      return this.bookService.createBook(input.book);
    }
  }

  @Patch(':id')
  public async updateBook(
    @Param('id') id: BookId,
    @Body() input: UpdateBookDto,
  ) {
    return this.bookService.updateBook(id, input);
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: BookId) {
    return this.bookService.deleteBook(id);
  }
}
