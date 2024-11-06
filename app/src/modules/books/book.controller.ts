import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, GetBooksDto, UpdateBookDto } from './book.dto';
import { BookPresenter } from './book.presenter';


@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(@Query() query: GetBooksDto) {
    const books = await this.bookService.findAll(query);
    return books.map(book => BookPresenter.toResponse(book));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.bookService.findOne(id);
    return BookPresenter.toResponse(book);
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const book = await this.bookService.create(createBookDto);
    return BookPresenter.toResponse(book);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const book = await this.bookService.update(id, updateBookDto);
    return BookPresenter.toResponse(book);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}