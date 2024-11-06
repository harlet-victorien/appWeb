import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateBookAuthorDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  yearPublished: number;

  @Type(() => CreateBookAuthorDto)
  authorId: string;
}

export class CreateBooksDto {
  book?: CreateBookDto;

  books?: CreateBookDto[];
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsInt()
  @IsOptional()
  yearPublished: number;

  @Type(() => CreateBookAuthorDto)
  @IsOptional()
  author: CreateBookAuthorDto;
}

export class GetBooksDto {
  @IsString()
  @IsOptional()
  name: string;
}
